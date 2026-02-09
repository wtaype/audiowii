import './remix.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

export const render = () => `
  <div class="wi_remix mwb">
    <div class="remix_layout">
      <!-- DECK A -->
      <div class="remix_deck remix_deck_a">
        <div class="remix_deck_header">
          <h3><i class="fas fa-music"></i> PISTA A</h3>
          <div class="remix_deck_actions">
            <button class="remix_btn_load" id="remi_btn_a"><i class="fas fa-folder-open"></i> Cargar</button>
            <input type="file" id="remi_file_a" accept="audio/*" hidden>
          </div>
        </div>

        <div class="remix_player_zone">
          <div class="remix_no_audio" id="remi_placeholder_a">
            <i class="fas fa-music"></i>
            <p>Arrastra un audio o haz clic en Cargar</p>
          </div>
          <div class="remix_audio_loaded dpn" id="remi_loaded_a">
            <div class="remix_track_info">
              <span class="remix_track_name" id="remi_name_a">Sin audio</span>
              <span class="remix_track_time" id="remi_time_a">00:00 / 00:00</span>
            </div>
            <div class="remix_waveform" id="remi_wave_a">
              <canvas id="remi_canvas_a"></canvas>
              <div class="remix_progress_line" id="remi_progress_a"></div>
            </div>
            <audio id="remi_audio_a" loop></audio>
          </div>
        </div>

        <div class="remix_controls">
          <div class="remix_control_group">
            <label><i class="fas fa-volume-up"></i> Volumen A</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_vol_a" min="0" max="100" value="80">
              <span class="remix_slider_val" id="remi_vol_a_val">80%</span>
            </div>
          </div>
          <div class="remix_control_group">
            <label><i class="fas fa-tachometer-alt"></i> Velocidad A</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_speed_a" min="0.5" max="2" value="1" step="0.1">
              <span class="remix_slider_val" id="remi_speed_a_val">1.0x</span>
            </div>
          </div>
          <div class="remix_control_group">
            <label><i class="fas fa-sliders-h"></i> Tono A</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_pitch_a" min="-12" max="12" value="0" step="1">
              <span class="remix_slider_val" id="remi_pitch_a_val">0</span>
            </div>
          </div>
        </div>

        <div class="remix_eq_section">
          <h4><i class="fas fa-equalizer"></i> Ecualizador A</h4>
          <div class="remix_eq_bands">
            <div class="remix_eq_band">
              <label>Graves</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_a_low" data-deck="a" data-band="low" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_a_low_val">0</span>
            </div>
            <div class="remix_eq_band">
              <label>Medios</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_a_mid" data-deck="a" data-band="mid" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_a_mid_val">0</span>
            </div>
            <div class="remix_eq_band">
              <label>Agudos</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_a_high" data-deck="a" data-band="high" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_a_high_val">0</span>
            </div>
          </div>
        </div>
      </div>

      <!-- MEZCLADOR CENTRAL -->
      <div class="remix_mixer_center">
        <div class="remix_mixer_header">
          <h3><i class="fas fa-sliders-h"></i> MEZCLADOR</h3>
        </div>

        <div class="remix_visualizer">
          <canvas id="remi_visualizer"></canvas>
        </div>

        <div class="remix_crossfader_zone">
          <div class="remix_crossfader_label">
            <span>A</span>
            <span>CROSSFADER</span>
            <span>B</span>
          </div>
          <div class="remix_crossfader_track">
            <input type="range" id="remi_crossfader" min="0" max="100" value="50">
            <div class="remix_crossfader_indicator" id="remi_cf_indicator">50</div>
          </div>
        </div>

        <div class="remix_master_controls">
          <div class="remix_master_vol">
            <label><i class="fas fa-volume-up"></i> Volumen Maestro</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_master" min="0" max="100" value="70">
              <span class="remix_slider_val" id="remi_master_val">70%</span>
            </div>
          </div>
        </div>

        <div class="remix_effects_zone">
          <h4><i class="fas fa-magic"></i> Efectos</h4>
          <div class="remix_effects_grid">
            <button class="remix_fx_btn" id="remi_fx_echo" data-fx="echo">
              <i class="fas fa-wave-square"></i>
              <span>Echo</span>
            </button>
            <button class="remix_fx_btn" id="remi_fx_reverb" data-fx="reverb">
              <i class="fas fa-church"></i>
              <span>Reverb</span>
            </button>
            <button class="remix_fx_btn" id="remi_fx_filter" data-fx="filter">
              <i class="fas fa-filter"></i>
              <span>Filtro</span>
            </button>
            <button class="remix_fx_btn" id="remi_fx_distortion" data-fx="distortion">
              <i class="fas fa-drum"></i>
              <span>Distorsión</span>
            </button>
          </div>
          <div class="remix_fx_amount dpn" id="remi_fx_amount_box">
            <label id="remi_fx_name">Efecto</label>
            <input type="range" id="remi_fx_amount" min="0" max="100" value="50">
            <span id="remi_fx_amount_val">50%</span>
          </div>
        </div>

        <div class="remix_transport">
          <button class="remix_transport_btn" id="remi_play_all" title="Reproducir Todo">
            <i class="fas fa-play"></i>
          </button>
          <button class="remix_transport_btn" id="remi_pause_all" title="Pausar Todo">
            <i class="fas fa-pause"></i>
          </button>
          <button class="remix_transport_btn" id="remi_stop_all" title="Detener Todo">
            <i class="fas fa-stop"></i>
          </button>
        </div>
      </div>

      <!-- DECK B -->
      <div class="remix_deck remix_deck_b">
        <div class="remix_deck_header">
          <h3><i class="fas fa-music"></i> PISTA B</h3>
          <div class="remix_deck_actions">
            <button class="remix_btn_load" id="remi_btn_b"><i class="fas fa-folder-open"></i> Cargar</button>
            <input type="file" id="remi_file_b" accept="audio/*" hidden>
          </div>
        </div>

        <div class="remix_player_zone">
          <div class="remix_no_audio" id="remi_placeholder_b">
            <i class="fas fa-music"></i>
            <p>Arrastra un audio o haz clic en Cargar</p>
          </div>
          <div class="remix_audio_loaded dpn" id="remi_loaded_b">
            <div class="remix_track_info">
              <span class="remix_track_name" id="remi_name_b">Sin audio</span>
              <span class="remix_track_time" id="remi_time_b">00:00 / 00:00</span>
            </div>
            <div class="remix_waveform" id="remi_wave_b">
              <canvas id="remi_canvas_b"></canvas>
              <div class="remix_progress_line" id="remi_progress_b"></div>
            </div>
            <audio id="remi_audio_b" loop></audio>
          </div>
        </div>

        <div class="remix_controls">
          <div class="remix_control_group">
            <label><i class="fas fa-volume-up"></i> Volumen B</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_vol_b" min="0" max="100" value="80">
              <span class="remix_slider_val" id="remi_vol_b_val">80%</span>
            </div>
          </div>
          <div class="remix_control_group">
            <label><i class="fas fa-tachometer-alt"></i> Velocidad B</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_speed_b" min="0.5" max="2" value="1" step="0.1">
              <span class="remix_slider_val" id="remi_speed_b_val">1.0x</span>
            </div>
          </div>
          <div class="remix_control_group">
            <label><i class="fas fa-sliders-h"></i> Tono B</label>
            <div class="remix_slider_box">
              <input type="range" class="remix_slider" id="remi_pitch_b" min="-12" max="12" value="0" step="1">
              <span class="remix_slider_val" id="remi_pitch_b_val">0</span>
            </div>
          </div>
        </div>

        <div class="remix_eq_section">
          <h4><i class="fas fa-equalizer"></i> Ecualizador B</h4>
          <div class="remix_eq_bands">
            <div class="remix_eq_band">
              <label>Graves</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_b_low" data-deck="b" data-band="low" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_b_low_val">0</span>
            </div>
            <div class="remix_eq_band">
              <label>Medios</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_b_mid" data-deck="b" data-band="mid" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_b_mid_val">0</span>
            </div>
            <div class="remix_eq_band">
              <label>Agudos</label>
              <input type="range" class="remix_eq_slider" id="remi_eq_b_high" data-deck="b" data-band="high" min="-20" max="20" value="0" step="1" orient="vertical">
              <span id="remi_eq_b_high_val">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

/* ==================== ESTADO ==================== */
let actx = null, masterGain = null, analyserNode = null;
let decks = {
  a: { audio: null, source: null, gainNode: null, eqLow: null, eqMid: null, eqHigh: null, loaded: false },
  b: { audio: null, source: null, gainNode: null, eqLow: null, eqMid: null, eqHigh: null, loaded: false }
};
let currentFx = null, fxNode = null;
let vizId = null;

const fmtTime = (s = 0) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/* ==================== AUDIO CONTEXT ==================== */
const initContext = () => {
  if (!actx) {
    actx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = actx.createGain();
    masterGain.gain.value = 0.7;

    analyserNode = actx.createAnalyser();
    analyserNode.fftSize = 256;

    masterGain.connect(analyserNode);
    analyserNode.connect(actx.destination);

    startVisualizer();
  }
  if (actx.state === 'suspended') actx.resume();
};

/* ==================== CARGAR AUDIO ==================== */
const loadAudio = (deck, file) => {
  if (!file || !file.type.startsWith('audio/')) return Notificacion('Formato de audio no válido', 'error', 2000);

  initContext();
  const d = decks[deck];
  const audioEl = $(`#remi_audio_${deck}`)[0];

  // Limpiar anterior
  if (d.source) {
    try { d.source.disconnect(); } catch(e) {}
  }

  const url = URL.createObjectURL(file);
  audioEl.src = url;
  audioEl.load();

  audioEl.onloadedmetadata = () => {
    // Crear nodos Web Audio
    d.source = actx.createMediaElementSource(audioEl);
    d.gainNode = actx.createGain();
    d.gainNode.gain.value = 0.8;

    // EQ de 3 bandas
    d.eqLow = actx.createBiquadFilter();
    d.eqLow.type = 'lowshelf';
    d.eqLow.frequency.value = 250;
    d.eqLow.gain.value = 0;

    d.eqMid = actx.createBiquadFilter();
    d.eqMid.type = 'peaking';
    d.eqMid.frequency.value = 1500;
    d.eqMid.Q.value = 1;
    d.eqMid.gain.value = 0;

    d.eqHigh = actx.createBiquadFilter();
    d.eqHigh.type = 'highshelf';
    d.eqHigh.frequency.value = 4000;
    d.eqHigh.gain.value = 0;

    // Cadena: source -> eqLow -> eqMid -> eqHigh -> gainNode -> masterGain
    d.source.connect(d.eqLow);
    d.eqLow.connect(d.eqMid);
    d.eqMid.connect(d.eqHigh);
    d.eqHigh.connect(d.gainNode);
    d.gainNode.connect(masterGain);

    d.audio = audioEl;
    d.loaded = true;

    // UI
    $(`#remi_placeholder_${deck}`).hide();
    $(`#remi_loaded_${deck}`).removeClass('dpn');
    $(`#remi_name_${deck}`).text(file.name);

    drawWaveform(deck);
    setupTimeUpdate(deck);

    // AUTOPLAY
    audioEl.play().catch(() => {});

    Notificacion(`Pista ${deck.toUpperCase()} cargada: ${file.name}`, 'success', 2000);
  };
};

/* ==================== WAVEFORM ==================== */
const drawWaveform = (deck) => {
  const canvas = $(`#remi_canvas_${deck}`)[0];
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth * 2;
  canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);

  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  const color = deck === 'a' ? '#00d4ff' : '#ff00aa';

  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, w, h);

  const gradient = ctx.createLinearGradient(0, 0, w, 0);
  gradient.addColorStop(0, color + '44');
  gradient.addColorStop(0.5, color);
  gradient.addColorStop(1, color + '44');

  ctx.fillStyle = gradient;
  const mid = h / 2;
  for (let x = 0; x < w; x++) {
    const amp = Math.random() * 0.7 + 0.3;
    const barHeight = amp * mid * 0.8;
    ctx.fillRect(x, mid - barHeight / 2, 1, barHeight);
  }
};

/* ==================== TIME UPDATE ==================== */
const setupTimeUpdate = (deck) => {
  const audio = $(`#remi_audio_${deck}`)[0];
  audio.ontimeupdate = () => {
    const cur = audio.currentTime, dur = audio.duration || 1;
    $(`#remi_time_${deck}`).text(`${fmtTime(cur)} / ${fmtTime(dur)}`);
    $(`#remi_progress_${deck}`).css('left', `${(cur / dur) * 100}%`);
  };
};

/* ==================== CONTROLES ==================== */
const updateVolume = (deck, val) => {
  const d = decks[deck];
  if (d.gainNode) d.gainNode.gain.value = val / 100;
  $(`#remi_vol_${deck}_val`).text(`${val}%`);
};

const updateSpeed = (deck, val) => {
  const d = decks[deck];
  if (d.audio) d.audio.playbackRate = val;
  $(`#remi_speed_${deck}_val`).text(`${val}x`);
};

const updatePitch = (deck, val) => {
  const d = decks[deck];
  if (d.audio) {
    const rate = Math.pow(2, val / 12);
    d.audio.playbackRate = rate;
    $(`#remi_speed_${deck}`).val(rate);
    $(`#remi_speed_${deck}_val`).text(`${rate.toFixed(1)}x`);
  }
  $(`#remi_pitch_${deck}_val`).text(val > 0 ? `+${val}` : val);
};

const updateEQ = (deck, band, val) => {
  const d = decks[deck];
  const node = band === 'low' ? d.eqLow : band === 'mid' ? d.eqMid : d.eqHigh;
  if (node) node.gain.value = parseFloat(val);
  $(`#remi_eq_${deck}_${band}_val`).text(val > 0 ? `+${val}` : val);
};

/* ==================== CROSSFADER ==================== */
const updateCrossfader = (val) => {
  const pos = val / 100;
  const gainA = Math.cos(pos * Math.PI / 2);
  const gainB = Math.sin(pos * Math.PI / 2);

  if (decks.a.gainNode) {
    const baseA = $('#remi_vol_a').val() / 100;
    decks.a.gainNode.gain.value = baseA * gainA;
  }
  if (decks.b.gainNode) {
    const baseB = $('#remi_vol_b').val() / 100;
    decks.b.gainNode.gain.value = baseB * gainB;
  }

  $('#remi_cf_indicator').text(val);
};

/* ==================== MASTER ==================== */
const updateMaster = (val) => {
  if (masterGain) masterGain.gain.value = val / 100;
  $('#remi_master_val').text(`${val}%`);
};

/* ==================== VISUALIZER ==================== */
const startVisualizer = () => {
  const canvas = $('#remi_visualizer')[0];
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const draw = () => {
    const w = canvas.width, h = canvas.height;
    ctx.fillStyle = '#0f0f1e';
    ctx.fillRect(0, 0, w, h);

    if (analyserNode) {
      const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
      analyserNode.getByteFrequencyData(dataArray);

      const barWidth = (w / dataArray.length) * 2.5;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = (dataArray[i] / 255) * h;
        const gradient = ctx.createLinearGradient(0, h - barHeight, 0, h);
        gradient.addColorStop(0, '#00d4ff');
        gradient.addColorStop(0.5, '#ff00aa');
        gradient.addColorStop(1, '#ffaa00');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, h - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    }

    vizId = requestAnimationFrame(draw);
  };

  draw();
};

/* ==================== EFECTOS ==================== */
const toggleEffect = (fx) => {
  if (currentFx === fx) {
    currentFx = null;
    if (fxNode) {
      try { fxNode.disconnect(); } catch(e) {}
      fxNode = null;
    }
    $('#remi_fx_amount_box').addClass('dpn');
    $(`.remix_fx_btn`).removeClass('active');
    Notificacion(`Efecto ${fx} desactivado`, 'info', 1500);
    reconnectDecks();
  } else {
    currentFx = fx;
    applyEffect(fx);
    $('#remi_fx_amount_box').removeClass('dpn');
    $('#remi_fx_name').text(fx.toUpperCase());
    $(`.remix_fx_btn`).removeClass('active');
    $(`#remi_fx_${fx}`).addClass('active');
    Notificacion(`Efecto ${fx} activado`, 'success', 1500);
  }
};

const applyEffect = (fx) => {
  if (fxNode) {
    try { fxNode.disconnect(); } catch(e) {}
  }

  switch(fx) {
    case 'echo':
      const delay = actx.createDelay();
      delay.delayTime.value = 0.3;
      const feedback = actx.createGain();
      feedback.gain.value = 0.5;
      delay.connect(feedback);
      feedback.connect(delay);
      fxNode = delay;
      break;
    case 'reverb':
      const convolver = actx.createConvolver();
      // Simulación de reverb simple
      fxNode = actx.createGain();
      fxNode.gain.value = 0.5;
      break;
    case 'filter':
      const filter = actx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 2000;
      fxNode = filter;
      break;
    case 'distortion':
      const distortion = actx.createWaveShaper();
      const curve = new Float32Array(256);
      for (let i = 0; i < 256; i++) {
        curve[i] = Math.tanh(i / 128 - 1);
      }
      distortion.curve = curve;
      fxNode = distortion;
      break;
  }

  reconnectDecks();
};

const reconnectDecks = () => {
  ['a', 'b'].forEach(deck => {
    const d = decks[deck];
    if (d.gainNode) {
      try { d.gainNode.disconnect(); } catch(e) {}
      if (fxNode) {
        d.gainNode.connect(fxNode);
        fxNode.connect(masterGain);
      } else {
        d.gainNode.connect(masterGain);
      }
    }
  });
};

/* ==================== TRANSPORT ==================== */
const playAll = () => {
  ['a', 'b'].forEach(deck => {
    const d = decks[deck];
    if (d.loaded && d.audio) d.audio.play().catch(() => {});
  });
};

const pauseAll = () => {
  ['a', 'b'].forEach(deck => {
    const d = decks[deck];
    if (d.loaded && d.audio) d.audio.pause();
  });
};

const stopAll = () => {
  ['a', 'b'].forEach(deck => {
    const d = decks[deck];
    if (d.loaded && d.audio) {
      d.audio.pause();
      d.audio.currentTime = 0;
    }
  });
};

/* ==================== EVENTOS ==================== */
export const init = () => {
  console.log(`✅ Remix de ${app} cargado`);

  initContext();

  // Cargar archivos
  $('#remi_btn_a').on('click', () => $('#remi_file_a').click());
  $('#remi_file_a').on('change', function() { if (this.files[0]) loadAudio('a', this.files[0]); });
  $('#remi_btn_b').on('click', () => $('#remi_file_b').click());
  $('#remi_file_b').on('change', function() { if (this.files[0]) loadAudio('b', this.files[0]); });

  // Drag & Drop
  ['a', 'b'].forEach(deck => {
    $(`#remi_placeholder_${deck}, #remi_wave_${deck}`)
      .on('dragover', e => { e.preventDefault(); e.stopPropagation(); })
      .on('drop', e => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.originalEvent.dataTransfer.files[0];
        if (file) loadAudio(deck, file);
      });
  });

  // Controles Deck A
  $('#remi_vol_a').on('input', function() { updateVolume('a', $(this).val()); });
  $('#remi_speed_a').on('input', function() { updateSpeed('a', $(this).val()); });
  $('#remi_pitch_a').on('input', function() { updatePitch('a', $(this).val()); });

  // Controles Deck B
  $('#remi_vol_b').on('input', function() { updateVolume('b', $(this).val()); });
  $('#remi_speed_b').on('input', function() { updateSpeed('b', $(this).val()); });
  $('#remi_pitch_b').on('input', function() { updatePitch('b', $(this).val()); });

  // EQ
  $('.remix_eq_slider').on('input', function() {
    const deck = $(this).data('deck');
    const band = $(this).data('band');
    updateEQ(deck, band, $(this).val());
  });

  // Crossfader
  $('#remi_crossfader').on('input', function() { updateCrossfader($(this).val()); });

  // Master
  $('#remi_master').on('input', function() { updateMaster($(this).val()); });

  // Efectos
  $('.remix_fx_btn').on('click', function() { toggleEffect($(this).data('fx')); });

  // Transport
  $('#remi_play_all').on('click', playAll);
  $('#remi_pause_all').on('click', pauseAll);
  $('#remi_stop_all').on('click', stopAll);

  // Teclado
  $(document).on('keydown.remix', e => {
    if (e.key === ' ') { e.preventDefault(); playAll(); }
    if (e.key === 'p') pauseAll();
    if (e.key === 's') stopAll();
  });
};

export const cleanup = () => {
  console.log('🧹 Remix limpiado');
  if (vizId) cancelAnimationFrame(vizId);
  stopAll();
  ['a', 'b'].forEach(deck => {
    const d = decks[deck];
    if (d.source) try { d.source.disconnect(); } catch(e) {}
    if (d.audio) { d.audio.pause(); d.audio.src = ''; }
  });
  if (actx) { actx.close(); actx = null; }
  $(document).off('.remix');
  $('#remi_btn_a, #remi_btn_b, #remi_file_a, #remi_file_b, #remi_vol_a, #remi_vol_b, #remi_speed_a, #remi_speed_b, #remi_pitch_a, #remi_pitch_b, #remi_crossfader, #remi_master, .remix_fx_btn, #remi_play_all, #remi_pause_all, #remi_stop_all').off();
};
