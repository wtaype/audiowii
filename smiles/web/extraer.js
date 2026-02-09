import './extraer.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

export const render = () => `
  <div class="wi_extraer mwb">
    <div class="extraer_layout">
      <!-- COLUMNA IZQUIERDA: CARGAR Y PREVISUALIZAR -->
      <div class="extraer_left">
        <div class="extraer_upload_section">
          <div class="extraer_section_header">
            <h3><i class="fas fa-video"></i> Cargar Video</h3>
          </div>

          <div class="extraer_dropzone" id="extr_dropzone">
            <i class="fas fa-cloud-upload-alt"></i>
            <h4>Arrastra tu video aquí</h4>
            <p>o haz doble clic para seleccionar</p>
            <input type="file" id="extr_file_input" accept="video/*" hidden>
          </div>

          <div class="extraer_actions">
            <button class="extraer_btn extr_btn_primary" id="extr_btn_select">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar Video</span>
            </button>
            <button class="extraer_btn extr_btn_danger" id="extr_btn_clear">
              <i class="fas fa-trash-alt"></i>
              <span>Limpiar</span>
            </button>
          </div>
        </div>

        <div class="extraer_preview_section dpn" id="extr_preview_section">
          <div class="extraer_section_header">
            <h3><i class="fas fa-eye"></i> Previsualización</h3>
          </div>

          <div class="extraer_video_box">
            <video id="extr_video" controls playsinline></video>
          </div>

          <div class="extraer_video_info" id="extr_video_info">
            <div class="extraer_info_row">
              <span class="extraer_info_label"><i class="fas fa-file-video"></i> Nombre:</span>
              <span class="extraer_info_value" id="extr_video_name">video.mp4</span>
            </div>
            <div class="extraer_info_row">
              <span class="extraer_info_label"><i class="fas fa-clock"></i> Duración:</span>
              <span class="extraer_info_value" id="extr_video_duration">00:00</span>
            </div>
            <div class="extraer_info_row">
              <span class="extraer_info_label"><i class="fas fa-desktop"></i> Resolución:</span>
              <span class="extraer_info_value" id="extr_video_resolution">--</span>
            </div>
            <div class="extraer_info_row">
              <span class="extraer_info_label"><i class="fas fa-hdd"></i> Tamaño:</span>
              <span class="extraer_info_value" id="extr_video_size">--</span>
            </div>
          </div>
        </div>
      </div>

      <!-- COLUMNA DERECHA: OPCIONES Y EXTRAER -->
      <div class="extraer_right">
        <div class="extraer_options_section">
          <div class="extraer_section_header">
            <h3><i class="fas fa-cog"></i> Opciones de Extracción</h3>
          </div>

          <div class="extraer_option_group">
            <label><i class="fas fa-file-audio"></i> Formato de Audio</label>
            <select id="extr_format" class="extraer_select">
              <option value="mp3" selected>MP3 - Universal</option>
              <option value="wav">WAV - Sin pérdida</option>
              <option value="ogg">OGG - Libre</option>
              <option value="m4a">M4A - Apple</option>
              <option value="aac">AAC - Alta calidad</option>
              <option value="flac">FLAC - HD</option>
            </select>
          </div>

          <div class="extraer_option_group">
            <label><i class="fas fa-star"></i> Calidad de Audio</label>
            <select id="extr_quality" class="extraer_select">
              <option value="high">Alta (320 kbps)</option>
              <option value="medium" selected>Media (192 kbps)</option>
              <option value="low">Baja (128 kbps)</option>
            </select>
          </div>

          <div class="extraer_option_group">
            <label><i class="fas fa-signal"></i> Sample Rate</label>
            <select id="extr_sample_rate" class="extraer_select">
              <option value="original" selected>Original</option>
              <option value="48000">48 kHz (Profesional)</option>
              <option value="44100">44.1 kHz (CD Quality)</option>
              <option value="22050">22.05 kHz (Voz)</option>
              <option value="16000">16 kHz (Comprimido)</option>
            </select>
          </div>

          <div class="extraer_option_group">
            <label><i class="fas fa-volume-up"></i> Volumen</label>
            <div class="extraer_slider_box">
              <input type="range" class="extraer_slider" id="extr_volume" min="0" max="200" value="100" step="1">
              <span class="extraer_slider_val" id="extr_volume_val">100%</span>
            </div>
          </div>

          <div class="extraer_option_group">
            <label><i class="fas fa-cut"></i> Recortar Audio</label>
            <div class="extraer_time_inputs">
              <div class="extraer_time_input">
                <label>Inicio (seg)</label>
                <input type="number" id="extr_start_time" value="0" min="0" step="0.1">
              </div>
              <div class="extraer_time_input">
                <label>Fin (seg)</label>
                <input type="number" id="extr_end_time" value="0" min="0" step="0.1">
              </div>
            </div>
          </div>
        </div>

        <div class="extraer_extract_section">
          <div class="extraer_section_header">
            <h3><i class="fas fa-magic"></i> Extracción</h3>
          </div>

          <div class="extraer_preview_info" id="extr_preview_info">
            <div class="extraer_preview_row">
              <span>Formato final:</span>
              <span class="extraer_preview_value" id="extr_preview_format">MP3</span>
            </div>
            <div class="extraer_preview_row">
              <span>Calidad:</span>
              <span class="extraer_preview_value" id="extr_preview_quality">Media (192 kbps)</span>
            </div>
            <div class="extraer_preview_row">
              <span>Tamaño estimado:</span>
              <span class="extraer_preview_value extraer_preview_highlight" id="extr_preview_size">~ 0 MB</span>
            </div>
          </div>

          <button class="extraer_btn_extract" id="extr_btn_extract" disabled>
            <i class="fas fa-download"></i>
            <span>Extraer Audio</span>
          </button>

          <div class="extraer_progress dpn" id="extr_progress">
            <div class="extraer_progress_label">
              <span id="extr_progress_text">Procesando...</span>
              <span id="extr_progress_percent">0%</span>
            </div>
            <div class="extraer_progress_bar">
              <div class="extraer_progress_fill" id="extr_progress_fill"></div>
            </div>
          </div>
        </div>

        <div class="extraer_result_section dpn" id="extr_result_section">
          <div class="extraer_section_header">
            <h3><i class="fas fa-check-circle"></i> Audio Extraído</h3>
          </div>

          <div class="extraer_result_box">
            <div class="extraer_result_icon">
              <i class="fas fa-music"></i>
            </div>
            <div class="extraer_result_info">
              <div class="extraer_result_name" id="extr_result_name">audio.mp3</div>
              <div class="extraer_result_details">
                <span id="extr_result_size">0 MB</span>
                <span>•</span>
                <span id="extr_result_duration">00:00</span>
              </div>
            </div>
            <button class="extraer_btn_download" id="extr_btn_download">
              <i class="fas fa-download"></i>
              Descargar
            </button>
          </div>

          <div class="extraer_result_player">
            <audio id="extr_result_audio" controls></audio>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

/* ==================== ESTADO ==================== */
let currentVideo = null;
let videoMetadata = {
  name: '',
  duration: 0,
  size: 0,
  width: 0,
  height: 0
};
let extractedAudioUrl = null;
let extractedBlob = null;

const fmtTime = (s = 0) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const fmtSize = (bytes) => {
  if (!bytes) return '0 B';
  if (bytes < 1024) return `${bytes.toFixed(2)} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

/* ==================== CARGAR VIDEO ==================== */
const loadVideo = (file) => {
  if (!file || !file.type.startsWith('video/')) {
    return Notificacion('Por favor selecciona un archivo de video válido', 'error', 2500);
  }

  currentVideo = file;
  const video = $('#extr_video')[0];
  const url = URL.createObjectURL(file);

  video.src = url;
  video.load();

  video.onloadedmetadata = () => {
    videoMetadata = {
      name: file.name,
      duration: video.duration,
      size: file.size,
      width: video.videoWidth,
      height: video.videoHeight
    };

    // Mostrar info
    $('#extr_video_name').text(file.name);
    $('#extr_video_duration').text(fmtTime(video.duration));
    $('#extr_video_resolution').text(`${video.videoWidth}x${video.videoHeight}`);
    $('#extr_video_size').text(fmtSize(file.size));

    // Actualizar tiempo de fin
    $('#extr_end_time').val(video.duration.toFixed(1));

    // Mostrar secciones
    $('#extr_preview_section').removeClass('dpn');
    $('#extr_btn_extract').prop('disabled', false);

    updatePreview();
    Notificacion(`Video cargado: ${file.name}`, 'success', 2000);
  };

  video.onerror = () => {
    Notificacion('Error al cargar el video. Intenta con otro archivo.', 'error', 2500);
    clearVideo();
  };
};

/* ==================== LIMPIAR ==================== */
const clearVideo = () => {
  const video = $('#extr_video')[0];
  if (video.src) {
    URL.revokeObjectURL(video.src);
    video.src = '';
  }

  currentVideo = null;
  videoMetadata = { name: '', duration: 0, size: 0, width: 0, height: 0 };

  $('#extr_preview_section').addClass('dpn');
  $('#extr_result_section').addClass('dpn');
  $('#extr_btn_extract').prop('disabled', true);
  $('#extr_start_time').val(0);
  $('#extr_end_time').val(0);

  if (extractedAudioUrl) {
    URL.revokeObjectURL(extractedAudioUrl);
    extractedAudioUrl = null;
  }
  extractedBlob = null;
};

/* ==================== ACTUALIZAR PREVIEW ==================== */
const updatePreview = () => {
  const format = $('#extr_format').val();
  const quality = $('#extr_quality').val();
  const duration = videoMetadata.duration || 0;

  // Calcular tamaño estimado
  const qualityBitrates = { high: 320, medium: 192, low: 128 };
  const bitrate = qualityBitrates[quality];
  const estimatedSize = (bitrate * 1000 / 8) * duration; // bytes

  const formatNames = {
    mp3: 'MP3',
    wav: 'WAV',
    ogg: 'OGG',
    m4a: 'M4A',
    aac: 'AAC',
    flac: 'FLAC'
  };

  const qualityNames = {
    high: 'Alta (320 kbps)',
    medium: 'Media (192 kbps)',
    low: 'Baja (128 kbps)'
  };

  $('#extr_preview_format').text(formatNames[format]);
  $('#extr_preview_quality').text(qualityNames[quality]);
  $('#extr_preview_size').text(`~ ${fmtSize(estimatedSize)}`);
};

/* ==================== EXTRAER AUDIO ==================== */
const extractAudio = async () => {
  if (!currentVideo) {
    return Notificacion('No hay video cargado', 'warning', 2000);
  }

  const format = $('#extr_format').val();
  const quality = $('#extr_quality').val();
  const sampleRate = $('#extr_sample_rate').val();
  const volume = $('#extr_volume').val();
  const startTime = parseFloat($('#extr_start_time').val()) || 0;
  const endTime = parseFloat($('#extr_end_time').val()) || videoMetadata.duration;

  if (startTime >= endTime) {
    return Notificacion('El tiempo de inicio debe ser menor al tiempo de fin', 'error', 2500);
  }

  try {
    $('#extr_btn_extract').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Procesando...');
    $('#extr_progress').removeClass('dpn');
    updateProgress('Iniciando extracción...', 0);

    // Crear FormData
    const formData = new FormData();
    formData.append('video', currentVideo);
    formData.append('format', format);
    formData.append('quality', quality);
    formData.append('sampleRate', sampleRate);
    formData.append('volume', volume);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);

    updateProgress('Enviando al servidor...', 10);

    const response = await fetch('http://localhost:3000/extract-audio', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.statusText}`);
    }

    updateProgress('Procesando video...', 50);

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || 'Error desconocido');
    }

    updateProgress('Descargando audio...', 80);

    // Descargar el audio extraído
    const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
    const audioResponse = await fetch(downloadUrl);
    extractedBlob = await audioResponse.blob();

    updateProgress('Finalizando...', 95);

    // Crear URL para reproducción
    if (extractedAudioUrl) URL.revokeObjectURL(extractedAudioUrl);
    extractedAudioUrl = URL.createObjectURL(extractedBlob);

    // Mostrar resultado
    const resultAudio = $('#extr_result_audio')[0];
    resultAudio.src = extractedAudioUrl;

    const fileName = result.filename || `audio_${Date.now()}.${format}`;
    $('#extr_result_name').text(fileName);
    $('#extr_result_size').text(fmtSize(extractedBlob.size));
    $('#extr_result_duration').text(fmtTime(endTime - startTime));

    updateProgress('Completado', 100);

    setTimeout(() => {
      $('#extr_progress').addClass('dpn');
      $('#extr_result_section').removeClass('dpn');
      $('#extr_btn_extract').prop('disabled', false).html('<i class="fas fa-download"></i> Extraer Audio');

      Notificacion(`✅ Audio extraído exitosamente: ${fileName}`, 'success', 3000);
    }, 500);

  } catch (error) {
    console.error('Error extrayendo audio:', error);
    $('#extr_progress').addClass('dpn');
    $('#extr_btn_extract').prop('disabled', false).html('<i class="fas fa-download"></i> Extraer Audio');
    Notificacion(`Error al extraer audio: ${error.message}`, 'error', 3500);
  }
};

/* ==================== ACTUALIZAR PROGRESO ==================== */
const updateProgress = (text, percent) => {
  $('#extr_progress_text').text(text);
  $('#extr_progress_percent').text(`${percent}%`);
  $('#extr_progress_fill').css('width', `${percent}%`);
};

/* ==================== DESCARGAR AUDIO ==================== */
const downloadAudio = () => {
  if (!extractedBlob) {
    return Notificacion('No hay audio para descargar', 'warning', 2000);
  }

  const format = $('#extr_format').val();
  const fileName = `${currentVideo.name.replace(/\.[^.]+$/, '')}_audio.${format}`;

  const a = document.createElement('a');
  a.href = URL.createObjectURL(extractedBlob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);

  Notificacion(`Descargando: ${fileName}`, 'success', 2000);
};

/* ==================== EVENTOS ==================== */
export const init = () => {
  console.log(`✅ Extraer de ${app} cargado`);

  // Botones
  $('#extr_btn_select').on('click', () => $('#extr_file_input').click());
  $('#extr_file_input').on('change', function() {
    if (this.files[0]) loadVideo(this.files[0]);
  });
  $('#extr_btn_clear').on('click', clearVideo);

  // Drag & Drop
  $('#extr_dropzone')
    .on('dblclick', () => $('#extr_file_input').click())
    .on('dragover', (e) => {
      e.preventDefault();
      $('#extr_dropzone').addClass('dragover');
    })
    .on('dragleave', () => {
      $('#extr_dropzone').removeClass('dragover');
    })
    .on('drop', (e) => {
      e.preventDefault();
      $('#extr_dropzone').removeClass('dragover');
      const file = e.originalEvent.dataTransfer.files[0];
      if (file) loadVideo(file);
    });

  // Opciones
  $('#extr_format').on('change', updatePreview);
  $('#extr_quality').on('change', updatePreview);
  $('#extr_volume').on('input', function() {
    $('#extr_volume_val').text(`${$(this).val()}%`);
  });

  // Extraer
  $('#extr_btn_extract').on('click', extractAudio);
  $('#extr_btn_download').on('click', downloadAudio);
};

export const cleanup = () => {
  console.log('🧹 Extraer limpiado');
  clearVideo();
  $('#extr_btn_select, #extr_file_input, #extr_btn_clear, #extr_dropzone, #extr_format, #extr_quality, #extr_volume, #extr_btn_extract, #extr_btn_download').off();
};
