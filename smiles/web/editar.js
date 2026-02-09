// filepath: c:\midev\miweb\audiowii\smiles\web\editar.js
import './editar.css';
import $ from 'jquery';
import { Notificacion } from '../widev.js';

/* ==================== RENDER ==================== */
export const render = () => `
  <div class="wi_editar">
    <div class="edit_layout">
      <div class="edit_left">
        <div class="edit_zone" id="edit_zone">
          <div class="edit_placeholder" id="edit_placeholder">
            <i class="fas fa-sliders-h"></i>
            <h2>Editor de Audio</h2>
            <p>Arrastra un archivo de audio para comenzar a editar</p>
          </div>
          <div class="edit_waveform_wrap dpn" id="edit_waveform_wrap">
            <div class="edit_waveform_visual">
              <canvas id="edit_canvas"></canvas>
              <div class="edit_cursor dpn" id="edit_cursor"></div>
              <div class="edit_selection dpn" id="edit_selection">
                <div class="edit_selection_label" id="edit_sel_label">0.0s</div>
              </div>
              <div class="edit_wave_overlay">
                <span class="edit_wave_name" id="edit_wave_name"></span>
                <span class="edit_wave_time" id="edit_wave_time">00:00 / 00:00</span>
              </div>
            </div>
            <audio id="edit_audio"></audio>
          </div>
          <div class="edit_processing dpn" id="edit_processing">
            <div class="edit_processing_spinner"></div>
            <div class="edit_processing_text" id="edit_proc_text">Procesando...</div>
            <div class="edit_processing_progress"><div class="edit_processing_fill" id="edit_proc_fill"></div></div>
          </div>
        </div>
        <div class="edit_info dpn" id="edit_info">
          <div class="edit_info_top">
            <div class="edit_info_left">
              <span class="edit_name" id="edit_name"></span>
              <span class="edit_details" id="edit_details"></span>
            </div>
          </div>
          <div class="edit_timeline">
            <span class="edit_time_current" id="edit_time_current">00:00</span>
            <div class="edit_timeline_container" id="edit_timeline_click">
              <div class="edit_timeline_bg"><div class="edit_timeline_fill" id="edit_timeline_fill"></div></div>
            </div>
            <span class="edit_time_total" id="edit_time_total">00:00</span>
          </div>
          <div class="edit_playback" id="edit_playback"></div>
        </div>
        <div class="edit_panel" id="edit_panel">
          <div class="edit_panel_header">
            <h4><i class="fas fa-magic"></i> Herramientas</h4>
            <div class="edit_tabs" id="edit_tabs">
              <button class="edit_tab active" data-tab="volume"><i class="fas fa-volume-up"></i> Volumen</button>
              <button class="edit_tab" data-tab="eq"><i class="fas fa-sliders-h"></i> EQ</button>
              <button class="edit_tab" data-tab="effects"><i class="fas fa-magic"></i> Efectos</button>
              <button class="edit_tab" data-tab="trim"><i class="fas fa-cut"></i> Cortar</button>
              <button class="edit_tab" data-tab="export"><i class="fas fa-download"></i> Exportar</button>
            </div>
          </div>
          <div class="edit_panel_content" id="edit_panel_content">
            <div class="edit_panel_empty">
              <i class="fas fa-sliders-h"></i>
              <p>Carga un audio para usar las herramientas</p>
            </div>
          </div>
        </div>
        <div class="edit_status">
          <div class="edit_status_left">
            <span><i class="fas fa-info-circle"></i> <span id="edit_status_msg">Listo</span></span>
          </div>
          <div class="edit_status_right">
            <span class="edit_status_badge" id="edit_status_sr">--</span>
            <span class="edit_status_badge" id="edit_status_ch">--</span>
            <span class="edit_status_badge" id="edit_status_bits">--</span>
          </div>
        </div>
      </div>

      <div class="edit_right">
        <div class="edit_gallery_header" id="edit_header">
          <h3><i class="fas fa-sliders-h"></i> Archivos (<span id="edit_count">0</span>)</h3>
          <div class="edit_gallery_actions">
            <button class="edit_btn_icon edit_btn_add" title="Agregar"><i class="fas fa-folder-open"></i></button>
            <button class="edit_btn_icon edit_btn_clear" title="Limpiar"><i class="fas fa-trash"></i></button>
            <button class="edit_btn_icon edit_btn_search" title="Buscar"><i class="fas fa-search"></i></button>
          </div>
        </div>
        <div class="edit_search_bar dpn" id="edit_search_bar">
          <i class="fas fa-search edit_search_icon"></i>
          <input type="text" id="edit_search_input" placeholder="Buscar archivos..." autocomplete="off">
          <button class="edit_btn_close_search" id="edit_btn_close_search"><i class="fas fa-times"></i></button>
          <div class="edit_search_results" id="edit_search_results">0 de 0</div>
        </div>
        <div class="edit_gallery" id="edit_gallery"></div>
      </div>
    </div>
  </div>
`;

/* ==================== ESTADO ==================== */
let files = [], idx = 0;
let speed = 1, vol = 70, looping = false;
let searchQ = '', searching = false;
let currentTab = 'volume';

/* Web Audio API */
let actx = null, analyser = null, dataArr = null, srcNode = null;
let canvas = null, ctx2d = null, rafId = null;

/* Audio Buffer para edición offline */
let audioBuffer = null, offlineCtx = null;

/* Selección de rango */
let selStart = 0, selEnd = 0, isSelecting = false;

/* EQ state */
let eqBands = [
  { freq: 60, gain: 0, label: '60' },
  { freq: 170, gain: 0, label: '170' },
  { freq: 350, gain: 0, label: '350' },
  { freq: 1000, gain: 0, label: '1K' },
  { freq: 3500, gain: 0, label: '3.5K' },
  { freq: 10000, gain: 0, label: '10K' }
];
let eqFilters = [];

/* Effects state */
let gainVal = 100, fadeInDur = 0, fadeOutDur = 0;

/* ==================== HELPERS ==================== */
const AUDIO_TYPES = ['audio/mp3','audio/mpeg','audio/wav','audio/m4a','audio/ogg','audio/aac','audio/flac','audio/webm'];
const isAudio = f => f.type.startsWith('audio/') || AUDIO_TYPES.includes(f.type);
const bytes = b => !b ? '0 B' : `${(b / 1024 ** Math.floor(Math.log(b) / Math.log(1024))).toFixed(1)} ${['B','KB','MB'][Math.floor(Math.log(b) / Math.log(1024))]}`;
const fmtTime = (s = 0) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const fmtTimePrecise = (s = 0) => `${fmtTime(s)}.${String(Math.floor((s % 1) * 10))}`;
const $audio = () => $('#edit_audio')[0];
const setStatus = msg => $('#edit_status_msg').text(msg);

/* ==================== BUSCADOR ==================== */
const toggleSearch = () => {
  searching = !searching;
  if (searching) {
    $('#edit_header').addClass('dpn');
    $('#edit_search_bar').removeClass('dpn');
    setTimeout(() => $('#edit_search_input').focus(), 100);
  } else closeSearch();
};
const closeSearch = () => {
  searching = false;
  $('#edit_search_bar').addClass('dpn');
  $('#edit_header').removeClass('dpn');
  $('#edit_search_input').val('');
  searchQ = '';
  renderGallery();
};
const doSearch = q => {
  searchQ = q.toLowerCase().trim();
  renderGallery();
  const f = filtered();
  $('#edit_search_results').text(`${f.length} de ${files.length}`);
};
const filtered = () => searchQ ? files.filter(m => m.name.toLowerCase().includes(searchQ)) : files;

/* ==================== AGREGAR ARCHIVOS ==================== */
const addFiles = list => {
  let added = 0;
  Array.from(list).forEach(f => {
    if (!isAudio(f)) return Notificacion(`${f.name} no es audio`, 'error', 2000);
    const url = URL.createObjectURL(f);
    const item = { id: Date.now() + Math.random(), name: f.name, format: f.type, size: f.size, url, file: f, duration: 0 };
    const tmp = document.createElement('audio');
    tmp.onloadedmetadata = () => { item.duration = tmp.duration; renderGallery(); URL.revokeObjectURL(tmp.src); };
    tmp.src = url;
    files.push(item);
    added++;
  });
  if (!added) return;
  Notificacion(`${added} audio(s) agregado(s)`, 'success', 1500);
  renderGallery();
  if (files.length === added) loadFile(0);
};

/* ==================== PASTE ==================== */
let pasteN = 1;
const handlePaste = e => {
  const items = e.originalEvent?.clipboardData?.items;
  if (!items) return;
  let found = false;
  $.each(items, (_, item) => {
    if (item.type.startsWith('audio/')) {
      const blob = item.getAsFile();
      if (!blob) return true;
      addFiles([new File([blob], `Audio_${pasteN++}.mp3`, { type: blob.type })]);
      found = true;
      $('#edit_zone').addClass('paste_flash');
      setTimeout(() => $('#edit_zone').removeClass('paste_flash'), 300);
      return false;
    }
  });
  if (!found && items.length) Notificacion('No se detectó audio en portapapeles', 'warning', 2000);
};

/* ==================== RENDER GALLERY ==================== */
const renderGallery = () => {
  const $g = $('#edit_gallery'), list = filtered();
  $('#edit_count').text(files.length);

  if (!files.length) return $g.html(`<div class="edit_gallery_empty"><i class="fas fa-folder-open"></i><p>Sin archivos</p></div>`);
  if (!list.length && searchQ) return $g.html(`<div class="edit_gallery_empty"><i class="fas fa-search"></i><p>Sin resultados</p></div>`);

  $g.html(list.map(m => {
    const ri = files.indexOf(m);
    let name = m.name;
    if (searchQ) name = m.name.replace(new RegExp(`(${searchQ})`, 'gi'), '<mark>$1</mark>');
    return `
      <div class="edit_file_item ${ri === idx ? 'active' : ''}" data-i="${ri}">
        <div class="edit_file_icon"><i class="fas fa-music"></i></div>
        <div class="edit_file_info">
          <span class="edit_file_name">${name}</span>
          <span class="edit_file_meta">${bytes(m.size)} • ${m.format.split('/')[1]?.toUpperCase() || 'AUDIO'}</span>
        </div>
        <span class="edit_file_dur">${fmtTime(m.duration)}</span>
        <button class="edit_file_del" data-i="${ri}"><i class="fas fa-times"></i></button>
      </div>`;
  }).join(''));
};

/* ==================== LOAD FILE FOR EDITING ==================== */
const loadFile = async i => {
  if (i < 0 || i >= files.length) return;
  idx = i;
  const m = files[i], a = $audio();

  $('#edit_placeholder').addClass('dpn');
  $('#edit_waveform_wrap').removeClass('dpn');
  $('#edit_info').removeClass('dpn');

  stopAll();
  a.src = m.url; a.load(); a.volume = vol / 100; a.playbackRate = speed;

  $('#edit_name, #edit_wave_name').text(m.name);
  $('#edit_details').text(`${bytes(m.size)} • ${fmtTime(m.duration)} • ${m.format.split('/')[1]?.toUpperCase() || 'AUDIO'}`);

  setupVisualizer(a);
  setupEQ(a);
  await decodeFile(m);

  a.ontimeupdate = () => {
    const cur = a.currentTime, dur = a.duration || 1;
    $('#edit_time_current').text(fmtTime(cur));
    $('#edit_timeline_fill').css('width', `${(cur / dur) * 100}%`);
    $('#edit_time_total').text(fmtTime(dur));
    $('#edit_wave_time').text(`${fmtTime(cur)} / ${fmtTime(dur)}`);
    updateCursor(cur, dur);
  };
  a.onplay = () => { $('#edit_btn_play i').attr('class', 'fas fa-pause'); setStatus('Reproduciendo...'); };
  a.onpause = () => { $('#edit_btn_play i').attr('class', 'fas fa-play'); setStatus('Pausado'); };
  a.onended = () => looping ? (a.currentTime = 0, a.play()) : setStatus('Finalizado');

  renderGallery();
  renderPlayback();
  renderTab();
  updateStatusBar(m);
  setStatus('Audio cargado');
};

/* ==================== DECODE FILE (AudioBuffer) ==================== */
const decodeFile = async m => {
  try {
    showProcessing('Decodificando audio...');
    if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
    const resp = await fetch(m.url);
    const arrBuf = await resp.arrayBuffer();
    audioBuffer = await actx.decodeAudioData(arrBuf);
    hideProcessing();
    drawStaticWave();
    selStart = 0;
    selEnd = audioBuffer.duration;
    setStatus(`Decodificado: ${audioBuffer.numberOfChannels}ch, ${audioBuffer.sampleRate}Hz`);
  } catch (err) {
    hideProcessing();
    audioBuffer = null;
    Notificacion('Error al decodificar audio', 'error', 2000);
    console.error(err);
  }
};

/* ==================== STATIC WAVEFORM ==================== */
const drawStaticWave = () => {
  if (!audioBuffer) return;
  canvas = $('#edit_canvas')[0];
  if (!canvas) return;
  ctx2d = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx2d.scale(2, 2);

  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  const data = audioBuffer.getChannelData(0);
  const step = Math.ceil(data.length / w);
  const cs = getComputedStyle(document.documentElement);

  ctx2d.fillStyle = cs.getPropertyValue('--bg3').trim();
  ctx2d.fillRect(0, 0, w, h);

  const mid = h / 2;
  for (let i = 0; i < w; i++) {
    let min = 1, max = -1;
    for (let j = 0; j < step; j++) {
      const val = data[i * step + j] || 0;
      if (val < min) min = val;
      if (val > max) max = val;
    }
    const top = (1 + min) * mid;
    const bot = (1 + max) * mid;

    const g = ctx2d.createLinearGradient(0, top, 0, bot);
    g.addColorStop(0, cs.getPropertyValue('--info').trim());
    g.addColorStop(1, cs.getPropertyValue('--mco').trim());
    ctx2d.fillStyle = g;
    ctx2d.fillRect(i, top, 1, bot - top || 1);
  }
};

/* ==================== CURSOR ==================== */
const updateCursor = (cur, dur) => {
  if (!dur) return;
  const pct = (cur / dur) * 100;
  $('#edit_cursor').removeClass('dpn').css('left', `${pct}%`);
};

/* ==================== SELECTION ==================== */
const startSelection = (e) => {
  if (!audioBuffer) return;
  isSelecting = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  selStart = x * audioBuffer.duration;
  selEnd = selStart;
  updateSelection();
};
const moveSelection = (e) => {
  if (!isSelecting || !audioBuffer) return;
  const rect = canvas.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  selEnd = x * audioBuffer.duration;
  updateSelection();
};
const endSelection = () => {
  isSelecting = false;
  if (selStart > selEnd) [selStart, selEnd] = [selEnd, selStart];
  if (Math.abs(selEnd - selStart) < 0.05) { selStart = 0; selEnd = audioBuffer?.duration || 0; $('#edit_selection').addClass('dpn'); }
  if (currentTab === 'trim') renderTab();
};
const updateSelection = () => {
  if (!audioBuffer) return;
  const dur = audioBuffer.duration;
  let s = selStart, e = selEnd;
  if (s > e) [s, e] = [e, s];
  const left = (s / dur) * 100, width = ((e - s) / dur) * 100;
  $('#edit_selection').removeClass('dpn').css({ left: `${left}%`, width: `${width}%` });
  $('#edit_sel_label').text(`${fmtTimePrecise(s)} - ${fmtTimePrecise(e)}`);
};

/* ==================== VISUALIZER (realtime) ==================== */
const setupVisualizer = el => {
  canvas = $('#edit_canvas')[0];
  if (!canvas) return;
  if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  if (actx.state === 'suspended') actx.resume();

  if (!srcNode) {
    srcNode = actx.createMediaElementSource(el);
    analyser = actx.createAnalyser();
    analyser.fftSize = 256;
    srcNode.connect(analyser);
    analyser.connect(actx.destination);
    dataArr = new Uint8Array(analyser.frequencyBinCount);
  }
};

/* ==================== EQ SETUP ==================== */
const setupEQ = el => {
  if (!actx) return;
  // Desconectar filtros viejos
  disconnectEQ();
  eqFilters = eqBands.map(band => {
    const f = actx.createBiquadFilter();
    f.type = band.freq <= 60 ? 'lowshelf' : band.freq >= 10000 ? 'highshelf' : 'peaking';
    f.frequency.value = band.freq;
    f.gain.value = band.gain;
    f.Q.value = 1.4;
    return f;
  });
  // Reconectar cadena: srcNode -> eq1 -> eq2 -> ... -> analyser -> dest
  if (srcNode && analyser) {
    srcNode.disconnect();
    let prev = srcNode;
    eqFilters.forEach(f => { prev.connect(f); prev = f; });
    prev.connect(analyser);
    analyser.connect(actx.destination);
  }
};

const disconnectEQ = () => {
  eqFilters.forEach(f => { try { f.disconnect(); } catch(e){} });
  eqFilters = [];
};

const updateEQBand = (i, gain) => {
  eqBands[i].gain = gain;
  if (eqFilters[i]) eqFilters[i].gain.value = gain;
};

/* ==================== PROCESSING OVERLAY ==================== */
const showProcessing = (msg = 'Procesando...', pct = 0) => {
  $('#edit_processing').removeClass('dpn');
  $('#edit_proc_text').text(msg);
  $('#edit_proc_fill').css('width', `${pct}%`);
};
const updateProcessing = (msg, pct) => {
  $('#edit_proc_text').text(msg);
  $('#edit_proc_fill').css('width', `${pct}%`);
};
const hideProcessing = () => { $('#edit_processing').addClass('dpn'); };

/* ==================== RENDER PLAYBACK ==================== */
const renderPlayback = () => {
  $('#edit_playback').html(`
    <button class="edit_btn_ctrl" id="edit_btn_prev"><i class="fas fa-step-backward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_play"><i class="fas fa-play"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_next"><i class="fas fa-step-forward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_stop"><i class="fas fa-stop"></i></button>
    <button class="edit_btn_ctrl ${looping ? 'active' : ''}" id="edit_btn_loop"><i class="fas fa-redo"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_speed">${speed}x</button>
    <div class="edit_vol_control">
      <button class="edit_btn_ctrl" id="edit_btn_vol"><i class="fas ${vol === 0 ? 'fa-volume-mute' : vol < 50 ? 'fa-volume-down' : 'fa-volume-up'}"></i></button>
      <div class="edit_vol_container" id="edit_vol_click"><div class="edit_vol_bg"><div class="edit_vol_fill" id="edit_vol_fill"></div></div></div>
    </div>
  `);
  setTimeout(() => $('#edit_vol_fill').css('width', `${vol}%`), 10);
};

/* ==================== RENDER TABS ==================== */
const renderTab = () => {
  const $c = $('#edit_panel_content');
  if (!files.length || !audioBuffer) {
    return $c.html(`<div class="edit_panel_empty"><i class="fas fa-sliders-h"></i><p>Carga un audio para usar las herramientas</p></div>`);
  }

  switch (currentTab) {
    case 'volume': return renderVolumeTab($c);
    case 'eq': return renderEQTab($c);
    case 'effects': return renderEffectsTab($c);
    case 'trim': return renderTrimTab($c);
    case 'export': return renderExportTab($c);
  }
};

/* === VOLUME TAB === */
const renderVolumeTab = $c => {
  $c.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-volume-up"></i> Ajuste de Volumen</div>
      <div class="edit_tool_row">
        <label>Ganancia</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_gain" min="0" max="300" value="${gainVal}" step="1">
          <span class="edit_slider_val" id="edit_gain_val">${gainVal}%</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade In</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadein" min="0" max="10" value="${fadeInDur}" step="0.1">
          <span class="edit_slider_val" id="edit_fadein_val">${fadeInDur}s</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade Out</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadeout" min="0" max="10" value="${fadeOutDur}" step="0.1">
          <span class="edit_slider_val" id="edit_fadeout_val">${fadeOutDur}s</span>
        </div>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn primary" id="edit_apply_vol"><i class="fas fa-check"></i> Aplicar Volumen</button>
        <button class="edit_action_btn" id="edit_normalize"><i class="fas fa-balance-scale"></i> Normalizar</button>
        <button class="edit_action_btn danger" id="edit_reset_vol"><i class="fas fa-undo"></i> Reset</button>
      </div>
    </div>
  `);
};

/* === EQ TAB === */
const renderEQTab = $c => {
  $c.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-sliders-h"></i> Ecualizador de 6 Bandas</div>
      <div class="edit_eq_container">
        ${eqBands.map((b, i) => `
          <div class="edit_eq_band">
            <span class="edit_eq_val" id="edit_eq_v${i}">${b.gain > 0 ? '+' : ''}${b.gain}dB</span>
            <input type="range" class="edit_eq_slider" data-band="${i}" min="-12" max="12" value="${b.gain}" step="0.5">
            <label>${b.label}</label>
          </div>
        `).join('')}
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn" id="edit_eq_flat"><i class="fas fa-minus"></i> Flat</button>
        <button class="edit_action_btn" id="edit_eq_bass"><i class="fas fa-drum"></i> Bass Boost</button>
        <button class="edit_action_btn" id="edit_eq_vocal"><i class="fas fa-microphone"></i> Vocal</button>
        <button class="edit_action_btn" id="edit_eq_treble"><i class="fas fa-bell"></i> Treble</button>
      </div>
    </div>
  `);
};

/* === EFFECTS TAB === */
const renderEffectsTab = $c => {
  $c.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-magic"></i> Efectos de Audio</div>
      <div class="edit_actions">
        <button class="edit_action_btn" id="edit_fx_reverse"><i class="fas fa-backward"></i> Reversa</button>
        <button class="edit_action_btn" id="edit_fx_speed_up"><i class="fas fa-tachometer-alt"></i> Speed Up (1.5x)</button>
        <button class="edit_action_btn" id="edit_fx_slow"><i class="fas fa-hourglass-half"></i> Slow Down (0.75x)</button>
        <button class="edit_action_btn" id="edit_fx_mono"><i class="fas fa-headphones"></i> Mono</button>
        <button class="edit_action_btn" id="edit_fx_silence"><i class="fas fa-volume-mute"></i> Silenciar Selección</button>
        <button class="edit_action_btn danger" id="edit_fx_undo"><i class="fas fa-undo"></i> Deshacer Todo</button>
      </div>
    </div>
  `);
};

/* === TRIM TAB === */
const renderTrimTab = $c => {
  const dur = audioBuffer?.duration || 0;
  let s = Math.min(selStart, selEnd), e = Math.max(selStart, selEnd);
  $c.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-cut"></i> Cortar / Recortar</div>
      <div class="edit_tool_row">
        <label>Inicio</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_trim_start" min="0" max="${dur}" value="${s}" step="0.01">
          <span class="edit_slider_val" id="edit_trim_s_val">${fmtTimePrecise(s)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fin</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_trim_end" min="0" max="${dur}" value="${e}" step="0.01">
          <span class="edit_slider_val" id="edit_trim_e_val">${fmtTimePrecise(e)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Duración selección</label>
        <span class="edit_slider_val">${fmtTimePrecise(e - s)}</span>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn primary" id="edit_trim_keep"><i class="fas fa-crop-alt"></i> Mantener Selección</button>
        <button class="edit_action_btn danger" id="edit_trim_delete"><i class="fas fa-trash"></i> Eliminar Selección</button>
        <button class="edit_action_btn" id="edit_trim_all"><i class="fas fa-expand"></i> Seleccionar Todo</button>
      </div>
    </div>
  `);
};

/* === EXPORT TAB === */
const renderExportTab = $c => {
  $c.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-download"></i> Exportar Audio</div>
      <div class="edit_tool_row">
        <label>Formato</label>
        <select id="edit_export_format" style="max-width:200px">
          <option value="wav" selected>WAV (Sin pérdida)</option>
          <option value="mp3">MP3 (Comprimido)</option>
          <option value="webm">WebM</option>
        </select>
      </div>
      <div class="edit_tool_row">
        <label>Calidad</label>
        <select id="edit_export_quality" style="max-width:200px">
          <option value="high" selected>Alta</option>
          <option value="medium">Media</option>
          <option value="low">Baja</option>
        </select>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn success" id="edit_export_btn"><i class="fas fa-download"></i> Exportar Audio</button>
        <button class="edit_action_btn primary" id="edit_export_sel"><i class="fas fa-crop-alt"></i> Exportar Selección</button>
      </div>
    </div>
  `);
};

/* ==================== AUDIO PROCESSING ==================== */

/* Aplicar ganancia + fades */
const applyVolume = () => {
  if (!audioBuffer) return;
  showProcessing('Aplicando volumen...');
  setTimeout(() => {
    const gain = gainVal / 100;
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const data = audioBuffer.getChannelData(ch);
      const sr = audioBuffer.sampleRate;
      const fiSamples = Math.floor(fadeInDur * sr);
      const foSamples = Math.floor(fadeOutDur * sr);

      for (let i = 0; i < data.length; i++) {
        let g = gain;
        if (i < fiSamples) g *= i / fiSamples;
        if (i > data.length - foSamples) g *= (data.length - i) / foSamples;
        data[i] *= g;
      }
    }
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    Notificacion('Volumen aplicado', 'success', 1500);
    setStatus('Volumen aplicado');
  }, 50);
};

/* Normalizar */
const normalizeAudio = () => {
  if (!audioBuffer) return;
  showProcessing('Normalizando...');
  setTimeout(() => {
    let maxAmp = 0;
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const data = audioBuffer.getChannelData(ch);
      for (let i = 0; i < data.length; i++) {
        const abs = Math.abs(data[i]);
        if (abs > maxAmp) maxAmp = abs;
      }
    }
    if (maxAmp > 0 && maxAmp !== 1) {
      const factor = 1 / maxAmp;
      for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
        const data = audioBuffer.getChannelData(ch);
        for (let i = 0; i < data.length; i++) data[i] *= factor;
      }
    }
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    Notificacion('Audio normalizado', 'success', 1500);
    setStatus('Normalizado');
  }, 50);
};

/* Reversa */
const reverseAudio = () => {
  if (!audioBuffer) return;
  showProcessing('Invirtiendo...');
  setTimeout(() => {
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const data = audioBuffer.getChannelData(ch);
      data.reverse();
    }
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    Notificacion('Audio invertido', 'success', 1500);
    setStatus('Reversa aplicada');
  }, 50);
};

/* Cambiar velocidad (resample) */
const changePlaybackSpeed = (rate) => {
  if (!audioBuffer) return;
  showProcessing(`Cambiando velocidad a ${rate}x...`);
  setTimeout(() => {
    const newLen = Math.floor(audioBuffer.length / rate);
    const newBuf = actx.createBuffer(audioBuffer.numberOfChannels, newLen, audioBuffer.sampleRate);
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const oldData = audioBuffer.getChannelData(ch);
      const newData = newBuf.getChannelData(ch);
      for (let i = 0; i < newLen; i++) {
        const srcIdx = i * rate;
        const lo = Math.floor(srcIdx), hi = Math.min(lo + 1, oldData.length - 1);
        const frac = srcIdx - lo;
        newData[i] = oldData[lo] * (1 - frac) + oldData[hi] * frac;
      }
    }
    audioBuffer = newBuf;
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    selEnd = audioBuffer.duration;
    Notificacion(`Velocidad cambiada a ${rate}x`, 'success', 1500);
    setStatus(`Speed: ${rate}x`);
  }, 50);
};

/* Convertir a mono */
const convertMono = () => {
  if (!audioBuffer || audioBuffer.numberOfChannels === 1) return Notificacion('Ya es mono', 'info', 1500);
  showProcessing('Convirtiendo a mono...');
  setTimeout(() => {
    const newBuf = actx.createBuffer(1, audioBuffer.length, audioBuffer.sampleRate);
    const mono = newBuf.getChannelData(0);
    const channels = [];
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) channels.push(audioBuffer.getChannelData(ch));
    for (let i = 0; i < audioBuffer.length; i++) {
      let sum = 0;
      channels.forEach(ch => sum += ch[i]);
      mono[i] = sum / channels.length;
    }
    audioBuffer = newBuf;
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    updateStatusBar(files[idx]);
    Notificacion('Convertido a mono', 'success', 1500);
    setStatus('Mono');
  }, 50);
};

/* Silenciar selección */
const silenceSelection = () => {
  if (!audioBuffer) return;
  let s = Math.min(selStart, selEnd), e = Math.max(selStart, selEnd);
  if (e - s < 0.01) return Notificacion('Selecciona una región primero', 'warning', 1500);
  showProcessing('Silenciando selección...');
  setTimeout(() => {
    const sr = audioBuffer.sampleRate;
    const startSample = Math.floor(s * sr), endSample = Math.floor(e * sr);
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const data = audioBuffer.getChannelData(ch);
      for (let i = startSample; i < endSample && i < data.length; i++) data[i] = 0;
    }
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    Notificacion('Selección silenciada', 'success', 1500);
    setStatus('Selección silenciada');
  }, 50);
};

/* Trim: mantener selección */
const trimKeep = () => {
  if (!audioBuffer) return;
  let s = Math.min(selStart, selEnd), e = Math.max(selStart, selEnd);
  if (e - s < 0.05) return Notificacion('Selecciona una región', 'warning', 1500);
  showProcessing('Recortando...');
  setTimeout(() => {
    const sr = audioBuffer.sampleRate;
    const startS = Math.floor(s * sr), endS = Math.floor(e * sr);
    const newLen = endS - startS;
    const newBuf = actx.createBuffer(audioBuffer.numberOfChannels, newLen, sr);
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const old = audioBuffer.getChannelData(ch);
      const nw = newBuf.getChannelData(ch);
      for (let i = 0; i < newLen; i++) nw[i] = old[startS + i] || 0;
    }
    audioBuffer = newBuf;
    selStart = 0; selEnd = audioBuffer.duration;
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    $('#edit_selection').addClass('dpn');
    Notificacion('Recortado', 'success', 1500);
    setStatus('Recortado');
    renderTab();
  }, 50);
};

/* Trim: eliminar selección */
const trimDelete = () => {
  if (!audioBuffer) return;
  let s = Math.min(selStart, selEnd), e = Math.max(selStart, selEnd);
  if (e - s < 0.05) return Notificacion('Selecciona una región', 'warning', 1500);
  showProcessing('Eliminando selección...');
  setTimeout(() => {
    const sr = audioBuffer.sampleRate;
    const startS = Math.floor(s * sr), endS = Math.floor(e * sr);
    const newLen = audioBuffer.length - (endS - startS);
    if (newLen < 1) return (hideProcessing(), Notificacion('No puedes eliminar todo', 'error', 1500));
    const newBuf = actx.createBuffer(audioBuffer.numberOfChannels, newLen, sr);
    for (let ch = 0; ch < audioBuffer.numberOfChannels; ch++) {
      const old = audioBuffer.getChannelData(ch);
      const nw = newBuf.getChannelData(ch);
      let j = 0;
      for (let i = 0; i < old.length; i++) {
        if (i < startS || i >= endS) nw[j++] = old[i];
      }
    }
    audioBuffer = newBuf;
    selStart = 0; selEnd = audioBuffer.duration;
    rebuildFromBuffer();
    hideProcessing();
    drawStaticWave();
    $('#edit_selection').addClass('dpn');
    Notificacion('Selección eliminada', 'success', 1500);
    setStatus('Selección eliminada');
    renderTab();
  }, 50);
};

/* Deshacer: recargar original */
const undoAll = async () => {
  if (!files[idx]) return;
  const m = files[idx];
  await decodeFile(m);
  gainVal = 100; fadeInDur = 0; fadeOutDur = 0;
  eqBands.forEach(b => b.gain = 0);
  eqFilters.forEach(f => f.gain.value = 0);
  renderTab();
  Notificacion('Restaurado al original', 'success', 1500);
  setStatus('Restaurado');
};

/* Rebuild URL from AudioBuffer */
const rebuildFromBuffer = () => {
  if (!audioBuffer || !files[idx]) return;
  const wav = audioBufferToWav(audioBuffer);
  const blob = new Blob([wav], { type: 'audio/wav' });
  URL.revokeObjectURL(files[idx].url);
  files[idx].url = URL.createObjectURL(blob);
  files[idx].size = blob.size;
  files[idx].duration = audioBuffer.duration;
  files[idx].format = 'audio/wav';
  const a = $audio();
  const wasPlaying = !a.paused;
  const curTime = a.currentTime;
  a.src = files[idx].url;
  a.load();
  if (wasPlaying) { a.currentTime = Math.min(curTime, audioBuffer.duration); a.play().catch(() => {}); }
  updateStatusBar(files[idx]);
  renderGallery();
};

/* ==================== EXPORT ==================== */
const exportAudio = (selOnly = false) => {
  if (!audioBuffer) return;
  let buf = audioBuffer;

  if (selOnly) {
    let s = Math.min(selStart, selEnd), e = Math.max(selStart, selEnd);
    if (e - s < 0.05) return Notificacion('Selecciona una región', 'warning', 1500);
    const sr = buf.sampleRate;
    const ss = Math.floor(s * sr), se = Math.floor(e * sr), nl = se - ss;
    const nb = actx.createBuffer(buf.numberOfChannels, nl, sr);
    for (let ch = 0; ch < buf.numberOfChannels; ch++) {
      const od = buf.getChannelData(ch), nd = nb.getChannelData(ch);
      for (let i = 0; i < nl; i++) nd[i] = od[ss + i] || 0;
    }
    buf = nb;
  }

  showProcessing('Exportando...');
  setTimeout(() => {
    const fmt = $('#edit_export_format').val() || 'wav';
    const wav = audioBufferToWav(buf);
    const mime = fmt === 'wav' ? 'audio/wav' : fmt === 'mp3' ? 'audio/mpeg' : 'audio/webm';
    const blob = new Blob([wav], { type: mime });
    const url = URL.createObjectURL(blob);
    const name = (files[idx]?.name || 'audio').replace(/\.[^.]+$/, '') + `_edited.${fmt}`;
    const a = document.createElement('a');
    a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
    hideProcessing();
    Notificacion(`${name} exportado (${bytes(blob.size)})`, 'success', 2000);
    setStatus(`Exportado: ${name}`);
  }, 100);
};

/* ==================== WAV ENCODER ==================== */
const audioBufferToWav = (buffer) => {
  const numCh = buffer.numberOfChannels;
  const sr = buffer.sampleRate;
  const len = buffer.length;
  const bytesPerSample = 2;
  const blockAlign = numCh * bytesPerSample;
  const dataSize = len * blockAlign;
  const bufferSize = 44 + dataSize;
  const view = new DataView(new ArrayBuffer(bufferSize));

  const writeStr = (offset, str) => { for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i)); };

  writeStr(0, 'RIFF');
  view.setUint32(4, bufferSize - 8, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numCh, true);
  view.setUint32(24, sr, true);
  view.setUint32(28, sr * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);

  const channels = [];
  for (let ch = 0; ch < numCh; ch++) channels.push(buffer.getChannelData(ch));

  let offset = 44;
  for (let i = 0; i < len; i++) {
    for (let ch = 0; ch < numCh; ch++) {
      const sample = Math.max(-1, Math.min(1, channels[ch][i]));
      view.setInt16(offset, sample * 0x7FFF, true);
      offset += 2;
    }
  }
  return view.buffer;
};

/* ==================== STATUS BAR ==================== */
const updateStatusBar = m => {
  if (audioBuffer) {
    $('#edit_status_sr').text(`${audioBuffer.sampleRate}Hz`);
    $('#edit_status_ch').text(`${audioBuffer.numberOfChannels}ch`);
    $('#edit_status_bits').text('16-bit');
  } else {
    $('#edit_status_sr').text('--');
    $('#edit_status_ch').text('--');
    $('#edit_status_bits').text('--');
  }
};

/* ==================== PLAYBACK ACTIONS ==================== */
const togglePlay = () => { const a = $audio(); if (!a?.src) return; a.paused ? a.play() : a.pause(); };
const stopCurrent = () => { const a = $audio(); if (a) { a.pause(); a.currentTime = 0; } $('#edit_btn_play i').attr('class', 'fas fa-play'); setStatus('Detenido'); };
const toggleLoop = () => { looping = !looping; $('#edit_btn_loop').toggleClass('active', looping); Notificacion(`Loop ${looping ? 'ON' : 'OFF'}`, 'info', 1200); };
const changeSpeed = () => {
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  speed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
  $audio().playbackRate = speed;
  $('#edit_btn_speed').text(`${speed}x`);
  Notificacion(`Velocidad: ${speed}x`, 'info', 1200);
};
const changeVol = () => {
  const vols = [0, 25, 50, 70, 100];
  vol = vols[(vols.indexOf(vol) + 1) % vols.length];
  $audio().volume = vol / 100;
  $('#edit_vol_fill').css('width', `${vol}%`);
  $('#edit_btn_vol i').attr('class', `fas ${vol === 0 ? 'fa-volume-mute' : vol < 50 ? 'fa-volume-down' : 'fa-volume-up'}`);
  Notificacion(`Volumen: ${vol}%`, 'info', 1200);
};
const nextFile = () => loadFile(idx < files.length - 1 ? idx + 1 : 0);
const prevFile = () => loadFile(idx > 0 ? idx - 1 : files.length - 1);

/* ==================== STOP / CLEAN ==================== */
const stopAll = () => {
  const a = $audio();
  if (a) { a.pause(); a.currentTime = 0; }
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
};

const openFile = () => {
  const input = $('<input type="file" accept="audio/*" multiple style="display:none">');
  input.on('change', function () { if (this.files.length) addFiles(this.files); input.remove(); });
  $('body').append(input); input.click();
};

/* ==================== INIT ==================== */
export const init = () => {
  /* Drop zone */
  $('#edit_zone')
    .on('dblclick', openFile)
    .on('dragover', e => { e.preventDefault(); $('#edit_zone').addClass('dragover'); })
    .on('dragleave', () => $('#edit_zone').removeClass('dragover'))
    .on('drop', e => { e.preventDefault(); $('#edit_zone').removeClass('dragover'); const f = e.originalEvent.dataTransfer?.files; if (f?.length) addFiles(f); });

  $(document).on('paste.edit', handlePaste);

  /* Gallery buttons */
  $('.edit_btn_add').on('click', openFile);
  $('.edit_btn_clear').on('click', () => {
    if (!files.length) return;
    files.forEach(m => URL.revokeObjectURL(m.url));
    files = []; idx = 0; pasteN = 1; audioBuffer = null; stopAll();
    $('#edit_placeholder').removeClass('dpn');
    $('#edit_waveform_wrap').addClass('dpn');
    $('#edit_info').addClass('dpn');
    $('#edit_cursor, #edit_selection').addClass('dpn');
    renderGallery(); renderTab();
    Notificacion('Todo limpiado', 'success', 1500);
    setStatus('Listo');
  });

  /* Search */
  $('.edit_btn_search').on('click', toggleSearch);
  $('#edit_btn_close_search').on('click', closeSearch);
  $('#edit_search_input').on('input', function () { doSearch($(this).val()); });

  /* Tabs */
  $(document).on('click.edit', '.edit_tab', function () {
    currentTab = $(this).data('tab');
    $('.edit_tab').removeClass('active');
    $(this).addClass('active');
    renderTab();
  });

  /* Playback controls */
  $(document).on('click.edit', '#edit_btn_play', togglePlay);
  $(document).on('click.edit', '#edit_btn_prev', prevFile);
  $(document).on('click.edit', '#edit_btn_next', nextFile);
  $(document).on('click.edit', '#edit_btn_stop', stopCurrent);
  $(document).on('click.edit', '#edit_btn_loop', toggleLoop);
  $(document).on('click.edit', '#edit_btn_speed', changeSpeed);
  $(document).on('click.edit', '#edit_btn_vol', changeVol);

  /* Timeline click */
  $(document).on('click.edit', '#edit_timeline_click', function (e) {
    const a = $audio();
    if (a?.duration) a.currentTime = (e.offsetX / $(this).width()) * a.duration;
  });

  /* Volume bar click */
  $(document).on('click.edit', '#edit_vol_click', function (e) {
    vol = Math.round((e.offsetX / $(this).width()) * 100);
    $audio().volume = vol / 100;
    $('#edit_vol_fill').css('width', `${vol}%`);
    $('#edit_btn_vol i').attr('class', `fas ${vol === 0 ? 'fa-volume-mute' : vol < 50 ? 'fa-volume-down' : 'fa-volume-up'}`);
  });

  /* Waveform selection */
  $(document).on('mousedown.edit', '#edit_canvas', function (e) { startSelection(e); });
  $(document).on('mousemove.edit', function (e) { moveSelection(e); });
  $(document).on('mouseup.edit', function () { endSelection(); });

  /* Gallery items */
  $(document).on('click.edit', '.edit_file_item', function () { loadFile(parseInt($(this).data('i'))); });
  $(document).on('click.edit', '.edit_file_del', function (e) {
    e.stopPropagation();
    const i = parseInt($(this).data('i'));
    URL.revokeObjectURL(files[i].url);
    files.splice(i, 1);
    if (files.length) {
      if (i === idx) loadFile(Math.min(i, files.length - 1));
      else if (i < idx) idx--;
    } else {
      stopAll(); audioBuffer = null;
      $('#edit_placeholder').removeClass('dpn');
      $('#edit_waveform_wrap').addClass('dpn');
      $('#edit_info').addClass('dpn');
    }
    renderGallery();
  });

  /* === TOOL EVENTS (delegated) === */

  /* Volume tab */
  $(document).on('input.edit', '#edit_gain', function () { gainVal = parseInt($(this).val()); $('#edit_gain_val').text(`${gainVal}%`); });
  $(document).on('input.edit', '#edit_fadein', function () { fadeInDur = parseFloat($(this).val()); $('#edit_fadein_val').text(`${fadeInDur}s`); });
  $(document).on('input.edit', '#edit_fadeout', function () { fadeOutDur = parseFloat($(this).val()); $('#edit_fadeout_val').text(`${fadeOutDur}s`); });
  $(document).on('click.edit', '#edit_apply_vol', applyVolume);
  $(document).on('click.edit', '#edit_normalize', normalizeAudio);
  $(document).on('click.edit', '#edit_reset_vol', () => { gainVal = 100; fadeInDur = 0; fadeOutDur = 0; renderTab(); Notificacion('Reset', 'info', 1000); });

  /* EQ tab */
  $(document).on('input.edit', '.edit_eq_slider', function () {
    const i = parseInt($(this).data('band'));
    const g = parseFloat($(this).val());
    updateEQBand(i, g);
    $(`#edit_eq_v${i}`).text(`${g > 0 ? '+' : ''}${g}dB`);
  });
  $(document).on('click.edit', '#edit_eq_flat', () => { eqBands.forEach((b, i) => { b.gain = 0; updateEQBand(i, 0); }); renderTab(); Notificacion('EQ Flat', 'info', 1000); });
  $(document).on('click.edit', '#edit_eq_bass', () => {
    const preset = [8, 5, 2, 0, -1, -2];
    eqBands.forEach((b, i) => { b.gain = preset[i]; updateEQBand(i, preset[i]); });
    renderTab(); Notificacion('Bass Boost', 'info', 1000);
  });
  $(document).on('click.edit', '#edit_eq_vocal', () => {
    const preset = [-2, -1, 3, 5, 3, 0];
    eqBands.forEach((b, i) => { b.gain = preset[i]; updateEQBand(i, preset[i]); });
    renderTab(); Notificacion('Vocal Preset', 'info', 1000);
  });
  $(document).on('click.edit', '#edit_eq_treble', () => {
    const preset = [-2, -1, 0, 2, 5, 8];
    eqBands.forEach((b, i) => { b.gain = preset[i]; updateEQBand(i, preset[i]); });
    renderTab(); Notificacion('Treble Boost', 'info', 1000);
  });

  /* Effects tab */
  $(document).on('click.edit', '#edit_fx_reverse', reverseAudio);
  $(document).on('click.edit', '#edit_fx_speed_up', () => changePlaybackSpeed(1.5));
  $(document).on('click.edit', '#edit_fx_slow', () => changePlaybackSpeed(0.75));
  $(document).on('click.edit', '#edit_fx_mono', convertMono);
  $(document).on('click.edit', '#edit_fx_silence', silenceSelection);
  $(document).on('click.edit', '#edit_fx_undo', undoAll);

  /* Trim tab */
  $(document).on('input.edit', '#edit_trim_start', function () {
    selStart = parseFloat($(this).val());
    $('#edit_trim_s_val').text(fmtTimePrecise(selStart));
    updateSelection();
  });
  $(document).on('input.edit', '#edit_trim_end', function () {
    selEnd = parseFloat($(this).val());
    $('#edit_trim_e_val').text(fmtTimePrecise(selEnd));
    updateSelection();
  });
  $(document).on('click.edit', '#edit_trim_keep', trimKeep);
  $(document).on('click.edit', '#edit_trim_delete', trimDelete);
  $(document).on('click.edit', '#edit_trim_all', () => {
    if (!audioBuffer) return;
    selStart = 0; selEnd = audioBuffer.duration;
    updateSelection(); renderTab();
  });

  /* Export tab */
  $(document).on('click.edit', '#edit_export_btn', () => exportAudio(false));
  $(document).on('click.edit', '#edit_export_sel', () => exportAudio(true));

  /* Keyboard shortcuts */
  $(document).on('keydown.edit', e => {
    if (searching) { if (e.key === 'Escape') closeSearch(); return; }
    if (!files.length) return;
    if ([' ', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
    if (e.key === ' ') togglePlay();
    if (e.key === 'ArrowLeft') prevFile();
    if (e.key === 'ArrowRight') nextFile();
    if (e.key === 'Delete' && audioBuffer) trimDelete();
  });

  renderGallery();
  console.log('✅ Editor cargado');
};

