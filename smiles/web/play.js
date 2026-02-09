import './play.css';
import $ from 'jquery';
import { Notificacion } from '../widev.js';

/* ==================== RENDER ==================== */
export const render = () => `
  <div class="wi_play">
    <div class="play_layout">
      <div class="play_left">
        <div class="play_zone" id="play_zone">
          <div class="play_placeholder">
            <i class="fas fa-headphones"></i>
            <h2>Arrastra tus audios aquí</h2>
          </div>
          <div class="play_player dpn">
            <div class="play_visualizer">
              <canvas id="play_canvas"></canvas>
              <div class="play_overlay">
                <div class="play_cover"><i class="fas fa-music"></i></div>
                <div class="play_overlay_info">
                  <div class="play_overlay_name" id="play_overlay_name"></div>
                  <div class="play_overlay_stats" id="play_overlay_stats"></div>
                </div>
              </div>
            </div>
            <audio id="play_audio"></audio>
          </div>
        </div>
        <div class="play_info dpn" id="play_info">
          <div class="play_info_top">
            <div class="play_info_left">
              <span class="play_name" id="play_name"></span>
              <span class="play_details" id="play_details"></span>
            </div>
          </div>
          <div class="play_timeline" id="play_timeline">
            <span class="play_time_current" id="play_time_current">00:00</span>
            <div class="play_timeline_container" id="play_timeline_click">
              <div class="play_timeline_bg"><div class="play_timeline_fill" id="play_timeline_fill"></div></div>
            </div>
            <span class="play_time_total" id="play_time_total">00:00</span>
          </div>
          <div class="play_controls" id="play_controls"></div>
        </div>
      </div>

      <div class="play_right">
        <div class="play_gallery_header" id="play_header">
          <h3><i class="fas fa-music"></i> Audios (<span id="play_count">0</span>)</h3>
          <div class="play_gallery_actions">
            <button class="play_btn_icon play_btn_add" title="Agregar"><i class="fas fa-folder-open"></i></button>
            <button class="play_btn_icon play_btn_clear" title="Limpiar"><i class="fas fa-trash"></i></button>
            <button class="play_btn_icon play_btn_search" title="Buscar"><i class="fas fa-search"></i></button>
          </div>
        </div>
        <div class="play_search_bar dpn" id="play_search_bar">
          <i class="fas fa-search play_search_icon"></i>
          <input type="text" id="play_search_input" placeholder="Buscar audios..." autocomplete="off">
          <button class="play_btn_close_search" id="play_btn_close_search"><i class="fas fa-times"></i></button>
          <div class="play_search_results" id="play_search_results">0 de 0</div>
        </div>
        <div class="play_gallery" id="play_gallery"></div>
      </div>
    </div>
  </div>
`;

/* ==================== ESTADO ==================== */
const state = {
  files: [],
  idx: 0,
  pasteN: 1,
  looping: false,
  speed: 1,
  vol: 70,
  searchQ: '',
  searching: false,
  actx: null,
  analyser: null,
  dataArr: null,
  srcNode: null,
  rafId: null
};

/* ==================== CONSTANTES ==================== */
const AUDIO_TYPES = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/m4a', 'audio/ogg', 'audio/aac', 'audio/flac', 'audio/webm'];
const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
const VOLS = [0, 25, 50, 70, 100];

/* ==================== HELPERS ==================== */
const isAudio = f => f.type.startsWith('audio/') || AUDIO_TYPES.includes(f.type);
const bytes = b => !b ? '0 B' : `${(b / 1024 ** Math.floor(Math.log(b) / Math.log(1024))).toFixed(1)} ${['B', 'KB', 'MB'][Math.floor(Math.log(b) / Math.log(1024))]}`;
const fmtTime = (s = 0) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const $audio = () => $('#play_audio')[0];
const filtered = () => state.searchQ ? state.files.filter(m => m.name.toLowerCase().includes(state.searchQ)) : state.files;

/* ==================== BUSCADOR ==================== */
const toggleSearch = () => {
  state.searching = !state.searching;
  if (state.searching) {
    $('#play_header').addClass('dpn');
    $('#play_search_bar').removeClass('dpn');
    setTimeout(() => $('#play_search_input').focus(), 100);
  } else closeSearch();
};

const closeSearch = () => {
  state.searching = false;
  $('#play_search_bar').addClass('dpn');
  $('#play_header').removeClass('dpn');
  $('#play_search_input').val('');
  state.searchQ = '';
  updateGallery();
};

const doSearch = q => {
  state.searchQ = q.toLowerCase().trim();
  updateGallery();
  const f = filtered();
  $('#play_search_results').text(`${f.length} de ${state.files.length}`);
};

/* ==================== ARCHIVOS ==================== */
const addFiles = (list, pasted = false) => {
  const validFiles = Array.from(list).filter(f => {
    if (!isAudio(f)) {
      Notificacion(`${f.name} no es audio`, 'error', 2000);
      return false;
    }
    return true;
  });

  if (!validFiles.length) return;

  const startIdx = state.files.length;
  
  validFiles.forEach(f => {
    const url = URL.createObjectURL(f);
    const item = {
      id: Date.now() + Math.random(),
      name: pasted ? `Audio_${state.pasteN++}.mp3` : f.name,
      format: f.type,
      size: f.size,
      url,
      isPasted: pasted,
      duration: 0
    };

    // Cargar metadata sin revocar la URL
    const tmp = new Audio();
    tmp.preload = 'metadata';
    tmp.onloadedmetadata = () => {
      item.duration = tmp.duration;
      updateGallery();
      tmp.src = ''; // Limpiar referencia temporal
    };
    tmp.onerror = () => tmp.src = '';
    tmp.src = url;

    state.files.push(item);
  });

  Notificacion(pasted ? 'Audio pegado' : `${validFiles.length} audio(s) agregado(s)`, 'success', 1500);
  updateGallery();
  
  // Auto-play solo si es el primer archivo o pegado
  if (pasted || startIdx === 0) playAt(pasted ? state.files.length - 1 : 0);
};

/* ==================== PASTE ==================== */
const handlePaste = e => {
  const items = e.originalEvent?.clipboardData?.items;
  if (!items) return;

  for (let i = 0; i < items.length; i++) {
    if (items[i].type.startsWith('audio/')) {
      const blob = items[i].getAsFile();
      if (blob) {
        addFiles([blob], true);
        $('#play_zone').addClass('paste_flash');
        setTimeout(() => $('#play_zone').removeClass('paste_flash'), 300);
        return;
      }
    }
  }
  
  if (items.length) Notificacion('No se detectó audio en portapapeles', 'warning', 2000);
};

/* ==================== GALERÍA ==================== */
const updateGallery = () => {
  const $g = $('#play_gallery');
  const list = filtered();
  
  $('#play_count').text(state.files.length);

  if (!state.files.length) {
    $g.html(`<div class="play_gallery_empty"><i class="fas fa-folder-open"></i><p>Sin audios</p></div>`);
    return;
  }

  if (!list.length && state.searchQ) {
    $g.html(`<div class="play_gallery_empty"><i class="fas fa-search"></i><p>Sin resultados</p></div>`);
    return;
  }

  $g.html(list.map(m => {
    const ri = state.files.indexOf(m);
    const name = state.searchQ 
      ? m.name.replace(new RegExp(`(${state.searchQ})`, 'gi'), '<mark>$1</mark>')
      : m.name;
    
    return `
      <div class="play_gallery_item ${ri === state.idx ? 'active' : ''}" data-i="${ri}">
        <div class="play_item_preview"><i class="fas fa-music"></i></div>
        <div class="play_item_info">
          <span class="play_item_name">${name}</span>
          <span class="play_item_details">${bytes(m.size)}${m.duration ? ` • ${fmtTime(m.duration)}` : ''}</span>
        </div>
        <span class="play_type_badge"><i class="fas fa-music"></i></span>
        ${m.isPasted ? '<span class="play_paste_badge"><i class="fas fa-paste"></i></span>' : ''}
        <button class="play_btn_del" data-i="${ri}"><i class="fas fa-times"></i></button>
      </div>`;
  }).join(''));
};

/* ==================== VISUALIZADOR ==================== */
const setupVisualizer = el => {
  const canvas = $('#play_canvas')[0];
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  if (!state.actx) {
    state.actx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (state.actx.state === 'suspended') state.actx.resume();

  if (!state.srcNode) {
    state.srcNode = state.actx.createMediaElementSource(el);
    state.analyser = state.actx.createAnalyser();
    state.analyser.fftSize = 256;
    state.srcNode.connect(state.analyser);
    state.analyser.connect(state.actx.destination);
    state.dataArr = new Uint8Array(state.analyser.frequencyBinCount);
  }

  if (state.rafId) cancelAnimationFrame(state.rafId);

  const draw = () => {
    state.rafId = requestAnimationFrame(draw);
    if (!state.analyser || !state.dataArr) return;

    state.analyser.getByteFrequencyData(state.dataArr);

    const cs = getComputedStyle(document.documentElement);
    ctx.fillStyle = cs.getPropertyValue('--bg3');
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barW = (canvas.width / state.dataArr.length) * 2.5;
    let x = 0;

    for (let i = 0; i < state.dataArr.length; i++) {
      const h = (state.dataArr[i] / 255) * canvas.height;
      const g = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - h);
      g.addColorStop(0, cs.getPropertyValue('--mco'));
      g.addColorStop(1, cs.getPropertyValue('--bg2'));
      ctx.fillStyle = g;
      ctx.fillRect(x, canvas.height - h, barW, h);
      x += barW + 1;
    }
  };

  draw();
};

/* ==================== REPRODUCTOR ==================== */
const playAt = i => {
  if (i < 0 || i >= state.files.length) return;
  
  state.idx = i;
  const m = state.files[i];
  const a = $audio();

  $('.play_placeholder').addClass('dpn');
  $('.play_player, #play_info').removeClass('dpn');

  stopAudio();
  
  a.src = m.url;
  a.load();
  a.volume = state.vol / 100;
  a.playbackRate = state.speed;
  a.play().catch(() => {});

  $('#play_name, #play_overlay_name').text(m.name);
  $('#play_details, #play_overlay_stats').text(`${bytes(m.size)} • ${fmtTime(m.duration)}`);

  setupVisualizer(a);

  a.ontimeupdate = () => {
    $('#play_time_current').text(fmtTime(a.currentTime));
    $('#play_timeline_fill').css('width', `${(a.currentTime / a.duration) * 100}%`);
    $('#play_time_total').text(fmtTime(a.duration));
  };

  a.onplay = () => {
    $('#play_btn_play i').attr('class', 'fas fa-pause');
    $('.play_cover').addClass('spinning');
  };

  a.onpause = () => {
    $('#play_btn_play i').attr('class', 'fas fa-play');
    $('.play_cover').removeClass('spinning');
  };

  a.onended = () => state.looping ? (a.currentTime = 0, a.play()) : next();

  updateGallery();
  renderControls();
};

/* ==================== CONTROLES ==================== */
const renderControls = () => {
  const volIcon = state.vol === 0 ? 'fa-volume-mute' : state.vol < 50 ? 'fa-volume-down' : 'fa-volume-up';
  
  $('#play_controls').html(`
    <button class="play_btn_ctrl" id="play_btn_prev"><i class="fas fa-step-backward"></i></button>
    <button class="play_btn_ctrl" id="play_btn_play"><i class="fas fa-pause"></i></button>
    <button class="play_btn_ctrl" id="play_btn_next"><i class="fas fa-step-forward"></i></button>
    <button class="play_btn_ctrl ${state.looping ? 'active' : ''}" id="play_btn_loop"><i class="fas fa-redo"></i></button>
    <button class="play_btn_ctrl" id="play_btn_speed">${state.speed}x</button>
    <div class="play_vol_control">
      <button class="play_btn_ctrl" id="play_btn_vol"><i class="fas ${volIcon}"></i></button>
      <div class="play_vol_container" id="play_vol_click">
        <div class="play_vol_bg"><div class="play_vol_fill" id="play_vol_fill"></div></div>
      </div>
    </div>
    <button class="play_btn_ctrl" id="play_btn_download"><i class="fas fa-download"></i></button>
  `);
  
  setTimeout(() => $('#play_vol_fill').css('width', `${state.vol}%`), 10);
};

/* ==================== ACCIONES ==================== */
const togglePlay = () => {
  const a = $audio();
  if (!a?.src) return;
  a.paused ? a.play() : a.pause();
};

const toggleLoop = () => {
  state.looping = !state.looping;
  $('#play_btn_loop').toggleClass('active', state.looping);
  Notificacion(`Loop ${state.looping ? 'ON' : 'OFF'}`, 'info', 1200);
};

const changeSpeed = () => {
  const idx = (SPEEDS.indexOf(state.speed) + 1) % SPEEDS.length;
  state.speed = SPEEDS[idx];
  $audio().playbackRate = state.speed;
  $('#play_btn_speed').text(`${state.speed}x`);
  Notificacion(`Velocidad: ${state.speed}x`, 'info', 1200);
};

const changeVol = () => {
  const idx = (VOLS.indexOf(state.vol) + 1) % VOLS.length;
  state.vol = VOLS[idx];
  updateVolume();
  Notificacion(`Volumen: ${state.vol}%`, 'info', 1200);
};

const updateVolume = () => {
  const a = $audio();
  a.volume = state.vol / 100;
  $('#play_vol_fill').css('width', `${state.vol}%`);
  const icon = state.vol === 0 ? 'fa-volume-mute' : state.vol < 50 ? 'fa-volume-down' : 'fa-volume-up';
  $('#play_btn_vol i').attr('class', `fas ${icon}`);
};

const download = () => {
  if (!state.files.length) return;
  const m = state.files[state.idx];
  const a = document.createElement('a');
  a.href = m.url;
  a.download = m.name;
  a.click();
  Notificacion(`${m.name} descargado`, 'success', 1500);
};

const next = () => playAt(state.idx < state.files.length - 1 ? state.idx + 1 : 0);
const prev = () => playAt(state.idx > 0 ? state.idx - 1 : state.files.length - 1);

const stopAudio = () => {
  const a = $audio();
  if (a?.src) {
    a.pause();
    a.currentTime = 0;
  }
  if (state.rafId) {
    cancelAnimationFrame(state.rafId);
    state.rafId = null;
  }
};

const openFile = () => {
  const input = $('<input type="file" accept="audio/*" multiple style="display:none">');
  input.on('change', function () {
    if (this.files.length) addFiles(this.files);
    input.remove();
  });
  $('body').append(input);
  input.click();
};

const clearAll = () => {
  if (!state.files.length) return;
  
  state.files.forEach(m => URL.revokeObjectURL(m.url));
  state.files = [];
  state.idx = 0;
  state.pasteN = 1;
  
  stopAudio();
  
  $('.play_placeholder').removeClass('dpn');
  $('.play_player, #play_info').addClass('dpn');
  
  updateGallery();
  Notificacion('Todo limpiado', 'success', 1500);
};

const deleteFile = i => {
  if (i < 0 || i >= state.files.length) return;
  
  URL.revokeObjectURL(state.files[i].url);
  state.files.splice(i, 1);

  if (state.files.length) {
    if (i === state.idx) {
      playAt(Math.min(i, state.files.length - 1));
    } else if (i < state.idx) {
      state.idx--;
    }
  } else {
    stopAudio();
    $('.play_placeholder').removeClass('dpn');
    $('.play_player, #play_info').addClass('dpn');
  }
  
  updateGallery();
};

/* ==================== EVENTOS ==================== */
const bindEvents = () => {
  // Zona de drop
  $('#play_zone')
    .on('dblclick', openFile)
    .on('dragover', e => {
      e.preventDefault();
      $('#play_zone').addClass('dragover');
    })
    .on('dragleave', () => $('#play_zone').removeClass('dragover'))
    .on('drop', e => {
      e.preventDefault();
      $('#play_zone').removeClass('dragover');
      const f = e.originalEvent.dataTransfer?.files;
      if (f?.length) addFiles(f);
    });

  // Paste global
  $(document).on('paste.play', handlePaste);

  // Botones superiores
  $('.play_btn_add').on('click', openFile);
  $('.play_btn_clear').on('click', clearAll);
  $('.play_btn_search').on('click', toggleSearch);
  $('#play_btn_close_search').on('click', closeSearch);
  $('#play_search_input').on('input', function () {
    doSearch($(this).val());
  });

  // Controles de reproducción
  $(document).on('click.play', '#play_btn_play', togglePlay);
  $(document).on('click.play', '#play_btn_prev', prev);
  $(document).on('click.play', '#play_btn_next', next);
  $(document).on('click.play', '#play_btn_loop', toggleLoop);
  $(document).on('click.play', '#play_btn_speed', changeSpeed);
  $(document).on('click.play', '#play_btn_vol', changeVol);
  $(document).on('click.play', '#play_btn_download', download);

  // Timeline
  $(document).on('click.play', '#play_timeline_click', function (e) {
    const a = $audio();
    if (a?.duration) {
      a.currentTime = (e.offsetX / $(this).width()) * a.duration;
    }
  });

  // Control de volumen
  $(document).on('click.play', '#play_vol_click', function (e) {
    state.vol = Math.round((e.offsetX / $(this).width()) * 100);
    updateVolume();
  });

  // Galería
  $(document).on('click.play', '.play_gallery_item', function () {
    playAt(parseInt($(this).data('i')));
  });

  $(document).on('click.play', '.play_btn_del', function (e) {
    e.stopPropagation();
    deleteFile(parseInt($(this).data('i')));
  });

  // Teclado
  $(document).on('keydown.play', e => {
    if (state.searching) {
      if (e.key === 'Escape') closeSearch();
      return;
    }
    
    if (!state.files.length) return;
    
    if ([' ', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
    
    if (e.key === ' ') togglePlay();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
};

/* ==================== INIT ==================== */
export const init = () => {
  bindEvents();
  console.log('✅ Play cargado');
};

