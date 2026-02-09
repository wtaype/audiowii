import './velocidad.css';
import { Notificacion, wiTip } from '../widev.js';

export const render = () => `
  <div class="wi_velocidad mwb">
    <section class="veloc_main">
      <div class="veloc_left">
        <div class="veloc_info_section">
          <div class="veloc_info_header">
            <h3><i class="fas fa-tachometer-alt"></i> Cambiar Velocidad</h3>
          </div>

          <div class="veloc_upload_zone" id="veloc_upload_zone">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Doble clic o arrastra tu audio aquí</p>
            <input type="file" id="veloc_audio_input" accept="audio/*" hidden>
          </div>

          <div class="veloc_actions">
            <button class="veloc_btn_select" id="veloc_btn_select">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="veloc_btn_delete" id="veloc_btn_delete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <div class="veloc_file_info" id="veloc_file_info" style="display:none;">
            <div class="veloc_file_header">
              <i class="fas fa-file-audio"></i>
              <span>Archivo:</span>
            </div>
            <div class="veloc_file_name" id="veloc_file_name">audio.mp3</div>
          </div>

          <div class="veloc_stats_grid" id="veloc_stats_grid" style="display:none;">
            <div class="veloc_stat_card">
              <div class="veloc_stat_icon"><i class="fas fa-clock"></i></div>
              <div class="veloc_stat_label">Duración:</div>
              <div class="veloc_stat_value" id="veloc_duration">--</div>
            </div>
            <div class="veloc_stat_card">
              <div class="veloc_stat_icon"><i class="fas fa-hdd"></i></div>
              <div class="veloc_stat_label">Tamaño:</div>
              <div class="veloc_stat_value" id="veloc_size">--</div>
            </div>
            <div class="veloc_stat_card">
              <div class="veloc_stat_icon"><i class="fas fa-file-audio"></i></div>
              <div class="veloc_stat_label">Formato:</div>
              <div class="veloc_stat_value" id="veloc_format">--</div>
            </div>
            <div class="veloc_stat_card">
              <div class="veloc_stat_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="veloc_stat_label">Velocidad:</div>
              <div class="veloc_stat_value" id="veloc_current_speed">1.0x</div>
            </div>
          </div>

          <div class="veloc_preview" id="veloc_preview" style="display:none;">
            <div class="veloc_preview_header">
              <h4><i class="fas fa-eye"></i> Vista Previa</h4>
            </div>
            <div class="veloc_preview_comparison">
              <div class="veloc_preview_cell">
                <span class="veloc_preview_label">Duración Original:</span>
                <span class="veloc_preview_value" id="veloc_preview_original">--</span>
              </div>
              <div class="veloc_preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="veloc_preview_cell">
                <span class="veloc_preview_label">Nueva Duración:</span>
                <span class="veloc_preview_value highlight" id="veloc_preview_new">--</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="veloc_right">
        <div class="veloc_player_wrapper">
          <div class="veloc_no_audio" id="veloc_no_audio">
            <i class="fas fa-headphones"></i>
            <h3>Carga un audio para cambiar su velocidad</h3>
            <p>Soporta MP3, WAV, OGG, M4A y más formatos</p>
          </div>
          <div class="veloc_player_container" id="veloc_player_container" style="display:none;">
            <div class="veloc_visualizer" id="veloc_visualizer">
              <canvas id="veloc_canvas"></canvas>
              <button class="veloc_play_btn_center" id="veloc_play_btn_center">
                <i class="fas fa-play"></i>
              </button>
            </div>
            <div class="veloc_player_footer">
              <div class="veloc_footer_info">
                <div class="veloc_overlay_name" id="veloc_overlay_name">Audio.mp3</div>
                <div class="veloc_overlay_stats" id="veloc_overlay_stats">00:00 / 00:00</div>
              </div>
            </div>
            <audio id="veloc_audio" loop></audio>
          </div>
        </div>

        <div class="veloc_controls" id="veloc_controls" style="display:none;">
          <div class="veloc_quick_actions">
            <button class="veloc_quick_btn" id="veloc_btn_reset">
              <i class="fas fa-undo"></i>
              <span>Reset</span>
            </button>
            <button class="veloc_quick_btn" id="veloc_btn_slow">
              <i class="fas fa-turtle"></i>
              <span>0.5x</span>
            </button>
            <button class="veloc_quick_btn" id="veloc_btn_normal">
              <i class="fas fa-play"></i>
              <span>1.0x</span>
            </button>
            <button class="veloc_quick_btn" id="veloc_btn_fast">
              <i class="fas fa-rabbit-fast"></i>
              <span>1.5x</span>
            </button>
            <button class="veloc_quick_btn" id="veloc_btn_faster">
              <i class="fas fa-forward"></i>
              <span>2.0x</span>
            </button>
          </div>

          <div class="veloc_options_grid">
            <div class="veloc_option_card">
              <label id="veloc_label_speed">
                <i class="fas fa-tachometer-alt"></i>
                <span>Velocidad</span>
              </label>
              <input type="number" id="veloc_speed_input" class="veloc_speed_input" min="0.25" max="3" step="0.05" value="1.00">
            </div>

            <div class="veloc_option_card">
              <label id="veloc_label_pitch">
                <i class="fas fa-music"></i>
                <span>Preservar Tono</span>
              </label>
              <label class="veloc_switch">
                <input type="checkbox" id="veloc_pitch_checkbox" checked>
                <span class="veloc_switch_slider"></span>
              </label>
            </div>

            <div class="veloc_option_card">
              <label id="veloc_label_format">
                <i class="fas fa-file-export"></i>
                <span>Formato</span>
              </label>
              <select id="veloc_format_select" class="veloc_select">
                <option value="mp3">MP3</option>
                <option value="wav">WAV</option>
                <option value="ogg">OGG</option>
                <option value="m4a">M4A</option>
                <option value="webm">WEBM</option>
              </select>
            </div>
          </div>

          <button class="veloc_btn_process" id="veloc_btn_process">
            <i class="fas fa-magic"></i>
            <span>Procesar Audio</span>
          </button>

          <div class="veloc_progress_wrapper" id="veloc_progress_wrapper" style="display:none;">
            <div class="veloc_progress_bar">
              <div class="veloc_progress_fill" id="veloc_progress_fill"></div>
            </div>
            <span class="veloc_progress_text" id="veloc_progress_text">0%</span>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log('✅ Velocidad cargado');
  
  const state = { audio: null, metadata: {}, processing: false, actx: null, analyser: null, dataArr: null, srcNode: null, rafId: null };
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  const fmtDuration = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const fmtSize = b => !b ? '0 B' : b < 1024 ? `${b.toFixed(2)} B` : b < 1048576 ? `${(b / 1024).toFixed(2)} KB` : `${(b / 1048576).toFixed(2)} MB`;

  const setupVisualizer = el => {
    const canvas = $('#veloc_canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    if (!state.actx) state.actx = new (window.AudioContext || window.webkitAudioContext)();
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

  const updatePreview = () => {
    if (!state.metadata.duration) return;
    const speed = parseFloat($('#veloc_speed_input').value);
    const newDuration = state.metadata.duration / speed;
    $('#veloc_preview_original').textContent = fmtDuration(state.metadata.duration);
    $('#veloc_preview_new').textContent = fmtDuration(newDuration);
    $('#veloc_current_speed').textContent = `${speed.toFixed(2)}x`;
    $('#veloc_preview').style.display = 'block';
  };

  const setSpeed = speed => {
    $('#veloc_speed_input').value = speed.toFixed(2);
    const audio = $('#veloc_audio');
    if (audio?.src) audio.playbackRate = speed;
    if (state.metadata.duration) updatePreview();
  };

  const togglePlayPause = () => {
    const audio = $('#veloc_audio');
    if (!audio?.src) return;
    
    if (audio.paused) {
      audio.play();
      $('#veloc_play_btn_center').innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      $('#veloc_play_btn_center').innerHTML = '<i class="fas fa-play"></i>';
    }
  };

  const handleUpload = file => {
    if (!file?.type.startsWith('audio/')) return Notificacion('Archivo de audio inválido', 'error', 3000);

    state.audio = file;
    const url = URL.createObjectURL(file);
    const audio = $('#veloc_audio');
    
    audio.onloadedmetadata = audio.onerror = null;
    audio.src = url;

    audio.onloadedmetadata = () => {
      state.metadata = { duration: audio.duration, size: file.size, format: file.name.split('.').pop().toUpperCase(), name: file.name };

      $('#veloc_no_audio').style.display = 'none';
      ['#veloc_player_container', '#veloc_controls', '#veloc_file_info', '#veloc_stats_grid', '#veloc_preview'].forEach(s => $(s).style.display = s === '#veloc_stats_grid' ? 'grid' : 'flex');
      
      $('#veloc_file_name').textContent = file.name;
      $('#veloc_file_name').title = file.name;
      $('#veloc_overlay_name').textContent = file.name;
      $('#veloc_duration').textContent = fmtDuration(audio.duration);
      $('#veloc_size').textContent = fmtSize(file.size);
      $('#veloc_format').textContent = state.metadata.format;
      $('#veloc_current_speed').textContent = '1.0x';

      updatePreview();
      setupVisualizer(audio);

      audio.ontimeupdate = () => {
        const current = fmtDuration(audio.currentTime);
        const total = fmtDuration(audio.duration);
        $('#veloc_overlay_stats').textContent = `${current} / ${total}`;
      };

      audio.onplay = () => $('#veloc_play_btn_center').innerHTML = '<i class="fas fa-pause"></i>';
      audio.onpause = () => $('#veloc_play_btn_center').innerHTML = '<i class="fas fa-play"></i>';

      // AUTOPLAY
      audio.play().then(() => {
        $('#veloc_play_btn_center').innerHTML = '<i class="fas fa-pause"></i>';
        Notificacion(`▶️ Reproduciendo: ${fmtDuration(audio.duration)}`, 'success', 2000);
      }).catch(() => Notificacion(`✅ Audio cargado: ${fmtDuration(audio.duration)}`, 'success', 2000));
    };

    audio.onerror = () => {
      if (state.audio) {
        Notificacion('Error al cargar el audio', 'error', 3000);
        resetPlayer();
      }
    };
  };

  const resetPlayer = () => {
    const audio = $('#veloc_audio');
    if (audio) {
      audio.onloadedmetadata = audio.onerror = audio.ontimeupdate = audio.onplay = audio.onpause = null;
      audio.pause();
      if (audio.src) URL.revokeObjectURL(audio.src);
      audio.src = '';
      audio.load();
    }

    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }
    
    ['#veloc_player_container', '#veloc_controls', '#veloc_file_info', '#veloc_stats_grid', '#veloc_preview'].forEach(s => $(s).style.display = 'none');
    $('#veloc_no_audio').style.display = 'flex';
    $('#veloc_audio_input').value = '';
    $('#veloc_progress_wrapper').style.display = 'none';
    setSpeed(1);
    
    state.audio = null;
    state.metadata = {};
    state.processing = false;
  };

  const updateProgress = p => {
    $('#veloc_progress_fill').style.width = `${p}%`;
    $('#veloc_progress_text').textContent = `${p}%`;
  };

  const processAudio = async () => {
    if (!state.audio) return Notificacion('No hay audio para procesar', 'error', 2000);
    if (state.processing) return Notificacion('Procesamiento en progreso', 'warning', 2000);

    const speed = parseFloat($('#veloc_speed_input').value);
    const preservePitch = $('#veloc_pitch_checkbox').checked;
    const format = $('#veloc_format_select').value;

    try {
      state.processing = true;
      const btn = $('#veloc_btn_process');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
      $('#veloc_progress_wrapper').style.display = 'flex';
      
      updateProgress(10);
      await new Promise(r => setTimeout(r, 1000));
      updateProgress(50);

      const audio = $('#veloc_audio');
      audio.playbackRate = speed;
      if (audio.mozPreservesPitch !== undefined) audio.mozPreservesPitch = preservePitch;
      else if (audio.preservesPitch !== undefined) audio.preservesPitch = preservePitch;

      updateProgress(80);
      await new Promise(r => setTimeout(r, 500));
      updateProgress(100);

      setTimeout(() => {
        $('#veloc_progress_wrapper').style.display = 'none';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-magic"></i> Procesar Audio';
        Notificacion(`✅ Audio procesado: ${speed.toFixed(2)}x | ${format.toUpperCase()}`, 'success', 3000);
        state.processing = false;
      }, 1000);

    } catch (error) {
      console.error('❌ Error:', error);
      $('#veloc_progress_wrapper').style.display = 'none';
      $('#veloc_btn_process').disabled = false;
      $('#veloc_btn_process').innerHTML = '<i class="fas fa-magic"></i> Procesar Audio';
      Notificacion(`Error: ${error.message}`, 'error', 4000);
      state.processing = false;
    }
  };

  // Tooltips
  $('#veloc_label_speed').addEventListener('mouseenter', function() { wiTip(this, '0.25x = Muy lento | 1.0x = Normal | 3.0x = Muy rápido'); });
  $('#veloc_label_speed').addEventListener('mouseleave', () => $$('.wiTip').forEach(t => t.remove()));
  $('#veloc_label_pitch').addEventListener('mouseenter', function() { wiTip(this, 'Mantiene el tono original al cambiar la velocidad'); });
  $('#veloc_label_pitch').addEventListener('mouseleave', () => $$('.wiTip').forEach(t => t.remove()));
  $('#veloc_label_format').addEventListener('mouseenter', function() { wiTip(this, 'Selecciona el formato final de tu audio'); });
  $('#veloc_label_format').addEventListener('mouseleave', () => $$('.wiTip').forEach(t => t.remove()));

  // Events
  $('#veloc_upload_zone').addEventListener('dblclick', () => $('#veloc_audio_input').click());
  $('#veloc_upload_zone').addEventListener('dragover', e => { e.preventDefault(); e.currentTarget.classList.add('dragover'); });
  $('#veloc_upload_zone').addEventListener('dragleave', e => e.currentTarget.classList.remove('dragover'));
  $('#veloc_upload_zone').addEventListener('drop', e => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleUpload(e.dataTransfer.files[0]);
  });

  $('#veloc_audio_input').addEventListener('change', e => { if (e.target.files[0]) handleUpload(e.target.files[0]); });
  $('#veloc_btn_select').addEventListener('click', () => !state.processing && $('#veloc_audio_input').click());
  $('#veloc_btn_delete').addEventListener('click', () => {
    if (state.processing) return Notificacion('No puedes eliminar mientras se procesa', 'warning', 2000);
    if (confirm('¿Eliminar este audio?')) { resetPlayer(); Notificacion('Audio eliminado', 'success', 2000); }
  });

  $('#veloc_btn_reset').addEventListener('click', () => setSpeed(1));
  $('#veloc_btn_slow').addEventListener('click', () => setSpeed(0.5));
  $('#veloc_btn_normal').addEventListener('click', () => setSpeed(1));
  $('#veloc_btn_fast').addEventListener('click', () => setSpeed(1.5));
  $('#veloc_btn_faster').addEventListener('click', () => setSpeed(2));

  $('#veloc_speed_input').addEventListener('input', function() {
    let speed = parseFloat(this.value);
    if (isNaN(speed) || speed < 0.25) speed = 0.25;
    if (speed > 3) speed = 3;
    this.value = speed.toFixed(2);
    
    if (state.metadata.duration) updatePreview();
    const audio = $('#veloc_audio');
    if (audio?.src) audio.playbackRate = speed;
  });

  $('#veloc_visualizer').addEventListener('click', togglePlayPause);
  $('#veloc_play_btn_center').addEventListener('click', e => {
    e.stopPropagation();
    togglePlayPause();
  });

  $('#veloc_btn_process').addEventListener('click', processAudio);
};

export const cleanup = () => {
  console.log('🧹 Velocidad limpiado');
  document.querySelectorAll('.wiTip').forEach(t => t.remove());
  const audio = document.querySelector('#veloc_audio');
  if (audio?.src) URL.revokeObjectURL(audio.src);
  const state = { rafId: null };
  if (state.rafId) cancelAnimationFrame(state.rafId);
};