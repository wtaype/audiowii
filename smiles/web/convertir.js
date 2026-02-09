import './convertir.css';
import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion, Mensaje } from '../widev.js';

export const render = () => `
  <div class="wi_convertir_container mwb">
    <section class="wi_convertir_main">
      <!-- LEFT COLUMN (29%) -->
      <div class="wi_convertir_left">
        <div class="audio_info_section">
          <div class="audio_info_header">
            <h3><i class="fas fa-exchange-alt"></i> Convertir Audio</h3>
          </div>

          <div class="upload_zone_compact" id="conv_uploadZone">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Doble clic para seleccionar audio</p>
            <input type="file" id="conv_audioInput" accept="audio/*" hidden>
          </div>

          <div class="audio_actions">
            <button class="btn_select" id="conv_btnSelect">
              <i class="fas fa-folder-open"></i>
              <span>Seleccionar</span>
            </button>
            <button class="btn_delete" id="conv_btnDelete">
              <i class="fas fa-trash-alt"></i>
              <span>Eliminar</span>
            </button>
          </div>

          <div class="file_info_left" id="conv_fileInfoLeft" style="display:none;">
            <div class="file_info_header">
              <i class="fas fa-file-audio"></i>
              <span>Nombre:</span>
            </div>
            <div class="file_name_display" id="conv_fileNameDisplay" title="">audio.mp3</div>
          </div>

          <div class="audio_stats_grid" id="conv_audioStatsGrid" style="display:none;">
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-clock"></i></div>
              <div class="stat_card_label">Duración:</div>
              <div class="stat_card_value" id="conv_audioDuration">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-tachometer-alt"></i></div>
              <div class="stat_card_label">Bitrate:</div>
              <div class="stat_card_value" id="conv_audioBitrate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-hdd"></i></div>
              <div class="stat_card_label">Tamaño:</div>
              <div class="stat_card_value" id="conv_audioSize">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-file-audio"></i></div>
              <div class="stat_card_label">Formato:</div>
              <div class="stat_card_value" id="conv_audioFormat">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-signal"></i></div>
              <div class="stat_card_label">Sample Rate:</div>
              <div class="stat_card_value" id="conv_sampleRate">--</div>
            </div>
            <div class="stat_card">
              <div class="stat_card_icon"><i class="fas fa-star"></i></div>
              <div class="stat_card_label">Calidad:</div>
              <div class="stat_card_value" id="conv_audioQuality">--</div>
            </div>
          </div>

          <div class="conversion_preview" id="conv_conversionPreview" style="display:none;">
            <div class="preview_header">
              <h4><i class="fas fa-eye"></i> <span id="conv_previewTitle">Vista Previa</span></h4>
            </div>
            <div class="preview_comparison">
              <div class="preview_cell">
                <span class="preview_label">Original:</span>
                <span class="preview_value" id="conv_previewOriginal">--</span>
              </div>
              <div class="preview_arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="preview_cell">
                <span class="preview_label" id="conv_previewLabel">Estimado:</span>
                <span class="preview_value success" id="conv_previewEstimated">--</span>
              </div>
              <div class="preview_reduction">
                <i class="fas fa-chart-pie"></i>
                <span id="conv_previewReduction">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN (70%) -->
      <div class="wi_convertir_right">
        <div class="audio_player_wrapper">
          <div class="no_audio_placeholder" id="conv_noAudioPlaceholder">
            <i class="fas fa-music"></i>
            <h3>Carga un audio para convertir</h3>
            <p>Soporta MP3, WAV, OGG, M4A, FLAC, AAC y más formatos</p>
          </div>
          <div class="audio_player_container" id="conv_audioPlayerContainer" style="display:none;">
            <div class="audio_visualizer">
              <i class="fas fa-music"></i>
              <div class="audio_info_display">
                <h3 id="conv_displayTitle">Título del Audio</h3>
                <p id="conv_displayArtist">Artista Desconocido</p>
              </div>
            </div>
            <audio id="conv_convertirAudio" controls autoplay loop></audio>
          </div>
        </div>

        <div class="conversion_controls" id="conv_conversionControls" style="display:none;">
          <div class="controls_row">
            <div class="control_group">
              <label><i class="fas fa-exchange-alt"></i> Convertir a:</label>
              <select id="conv_formatSelect">
                <option value="mp3" data-desc="Universal">MP3 - Universal</option>
                <option value="wav" data-desc="Sin pérdida">WAV - Sin pérdida</option>
                <option value="ogg" data-desc="Libre">OGG - Libre</option>
                <option value="m4a" data-desc="Apple">M4A - Apple</option>
                <option value="flac" data-desc="HD">FLAC - HD</option>
                <option value="aac" data-desc="Alta calidad">AAC - Alta calidad</option>
                <option value="wma" data-desc="Windows">WMA - Windows</option>
                <option value="opus" data-desc="Moderno">OPUS - Moderno</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-star"></i> Calidad:</label>
              <select id="conv_qualitySelect">
                <option value="high">Alta (320 kbps)</option>
                <option value="medium" selected>Media (192 kbps)</option>
                <option value="low">Baja (128 kbps)</option>
              </select>
            </div>

            <div class="control_group">
              <label><i class="fas fa-signal"></i> Sample Rate:</label>
              <select id="conv_sampleRateSelect">
                <option value="original">Original</option>
                <option value="48000">48 kHz (Profesional)</option>
                <option value="44100">44.1 kHz (CD Quality)</option>
                <option value="22050">22.05 kHz (Voz)</option>
                <option value="16000">16 kHz (Comprimido)</option>
              </select>
            </div>
          </div>

          <div class="controls_row conversion_action">
            <button class="btn_convert" id="conv_btnConvert">
              <i class="fas fa-sync-alt"></i>
              <span>Convertir Audio</span>
            </button>
            <div class="progress_wrapper" id="conv_progressWrapper" style="display:none;">
              <div class="progress_bar_inline">
                <div class="progress_fill_inline" id="conv_progressFillInline"></div>
              </div>
              <span class="progress_text" id="conv_progressText">0%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Convertir de ${app} cargado`);

  let currentAudio = null, audioMetadata = {}, audioAnalysis = null, selectedFormat = '', selectedQuality = 'medium', selectedSampleRate = 'original', isConverting = false;

  const formatCompatibility = {
    mp3: { codecs: ['mpeg'], compression: 0.8, speed: 'rápida', lossless: false },
    wav: { codecs: ['pcm'], compression: 1.5, speed: 'rápida', lossless: true },
    ogg: { codecs: ['vorbis', 'opus'], compression: 0.7, speed: 'media', lossless: false },
    m4a: { codecs: ['aac'], compression: 0.75, speed: 'rápida', lossless: false },
    flac: { codecs: ['flac'], compression: 0.9, speed: 'lenta', lossless: true },
    aac: { codecs: ['aac'], compression: 0.72, speed: 'rápida', lossless: false },
    wma: { codecs: ['wma'], compression: 0.78, speed: 'media', lossless: false },
    opus: { codecs: ['opus'], compression: 0.65, speed: 'media', lossless: false }
  };

  const analyzeAudio = (file, audioElement) => {
    const duration = audioElement.duration;
    const size = file.size;
    const bitrate = (size * 8) / duration;
    const bitrateKbps = bitrate / 1000;
    const format = file.name.split('.').pop().toLowerCase();

    const codecMap = {
      mp3: 'MP3', wav: 'PCM', ogg: 'Vorbis', m4a: 'AAC',
      flac: 'FLAC', aac: 'AAC', wma: 'WMA', opus: 'Opus'
    };
    const codec = codecMap[format] || 'Desconocido';

    let quality = 'BAJA';
    if (bitrateKbps > 256) quality = 'MUY ALTA';
    else if (bitrateKbps > 192) quality = 'ALTA';
    else if (bitrateKbps > 128) quality = 'MEDIA';
    else if (bitrateKbps > 96) quality = 'BAJA';
    else quality = 'MUY BAJA';

    return {
      duration, size, bitrate: bitrateKbps, format, codec, quality,
      sampleRate: audioElement.mozSampleRate || 'Desconocido'
    };
  };

  const estimateOutputSize = (analysis, format, quality, sampleRate) => {
    const formatData = formatCompatibility[format];
    const qualityFactors = { high: 1.0, medium: 0.6, low: 0.4 };
    const sampleRateFactors = { original: 1, 48000: 1.0, 44100: 0.92, 22050: 0.5, 16000: 0.36 };

    const baseFactor = formatData.compression * qualityFactors[quality] * sampleRateFactors[sampleRate];
    return analysis.size * baseFactor;
  };

  const updateConversionPreview = () => {
    if (!audioAnalysis || !selectedFormat) return;

    const estimatedSize = estimateOutputSize(audioAnalysis, selectedFormat, selectedQuality, selectedSampleRate);
    const reduction = ((1 - estimatedSize / audioAnalysis.size) * 100).toFixed(1);

    $('#conv_previewOriginal').text(formatFileSize(audioAnalysis.size));
    $('#conv_previewEstimated').text(formatFileSize(estimatedSize));
    $('#conv_previewReduction').text(`${reduction > 0 ? '-' : '+'}${Math.abs(reduction)}%`);
    $('#conv_previewLabel').text('Estimado:');
    $('#conv_previewTitle').text('Vista Previa');

    // Update visual styling based on reduction
    if (estimatedSize >= audioAnalysis.size * 0.98) {
      $('#conv_previewEstimated').removeClass('success').addClass('warning');
      $('#conv_previewReduction').closest('.preview_reduction').css('background', 'var(--warning)');
      Notificacion('⚠️ No recomendado: El tamaño será similar o mayor', 'warning', 3000);
    } else if (reduction > 30) {
      $('#conv_previewEstimated').removeClass('warning').addClass('success');
      $('#conv_previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
      Notificacion(`✅ Recomendado: Reducirás ${Math.abs(reduction)}% del tamaño`, 'success', 2500);
    } else {
      $('#conv_previewEstimated').removeClass('warning').addClass('success');
      $('#conv_previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
    }

    $('#conv_conversionPreview').fadeIn();
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAudioUpload = (file) => {
    if (!file.type.startsWith('audio/')) {
      Notificacion('Por favor selecciona un archivo de audio válido', 'error', 3000);
      return;
    }

    currentAudio = file;
    const url = URL.createObjectURL(file);
    const audio = $('#conv_convertirAudio')[0];

    audio.onloadedmetadata = audio.onerror = null;
    audio.src = url;

    audio.onloadedmetadata = () => {
      audioMetadata = {
        duration: audio.duration,
        size: file.size,
        format: file.name.split('.').pop().toUpperCase(),
        name: file.name
      };

      audioAnalysis = analyzeAudio(file, audio);

      $('#conv_noAudioPlaceholder').hide();
      $('#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft').show();

      // Update file name in LEFT
      $('#conv_fileNameDisplay').text(file.name).attr('title', file.name);
      $('#conv_displayTitle').text(file.name);
      $('#conv_displayArtist').text('Archivo local');

      // Update stats in LEFT with icons
      $('#conv_audioDuration').text(formatDuration(audio.duration));
      $('#conv_audioSize').text(formatFileSize(file.size));
      $('#conv_audioFormat').text(audioMetadata.format);
      $('#conv_audioBitrate').text(`${audioAnalysis.bitrate.toFixed(0)} kbps`);
      $('#conv_sampleRate').text(audioAnalysis.sampleRate === 'Desconocido' ? 'Desconocido' : `${(audioAnalysis.sampleRate / 1000).toFixed(1)} kHz`);
      $('#conv_audioQuality').text(audioAnalysis.quality);

      // Auto-select recommended format
      const recommendedFormat = getRecommendedFormat(audioAnalysis);
      selectedFormat = recommendedFormat;
      $('#conv_formatSelect').val(recommendedFormat);

      // Disable same format
      $(`#conv_formatSelect option[value="${audioAnalysis.format}"]`).prop('disabled', true).text(`${audioAnalysis.format.toUpperCase()} - Ya está en este formato`);

      updateConversionPreview();

      Notificacion(`✅ Audio analizado: ${audioAnalysis.codec} | ${audioAnalysis.bitrate.toFixed(0)} kbps | Calidad ${audioAnalysis.quality}`, 'success', 3000);
    };

    audio.onerror = () => {
      if (currentAudio) {
        Notificacion('Error al cargar el audio. Intenta con otro archivo.', 'error', 3000);
        resetConverter();
      }
    };
  };

  const getRecommendedFormat = (analysis) => {
    if (['wav', 'flac'].includes(analysis.format)) return 'mp3';
    if (analysis.format === 'mp3') return 'ogg';
    if (analysis.format === 'm4a') return 'mp3';
    return 'mp3';
  };

  const resetConverter = () => {
    const audio = $('#conv_convertirAudio')[0];
    if (audio) {
      audio.onloadedmetadata = audio.onerror = null;
      audio.pause();
      if (audio.src) URL.revokeObjectURL(audio.src);
      audio.src = '';
      audio.load();
    }

    $('#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft').hide();
    $('#conv_noAudioPlaceholder').show();
    $('#conv_audioInput').val('');
    $('#conv_progressWrapper').hide();
    $('#conv_formatSelect option').prop('disabled', false).each(function() {
      const format = $(this).val();
      $(this).text(`${format.toUpperCase()} - ${$(this).data('desc')}`);
    });

    currentAudio = null;
    audioMetadata = {};
    audioAnalysis = null;
    selectedFormat = '';
    selectedQuality = 'medium';
    selectedSampleRate = 'original';
    isConverting = false;
  };

  const convertAudio = async () => {
    if (!currentAudio || !selectedFormat) {
      Notificacion('Selecciona un formato de salida', 'warning', 2000);
      return;
    }

    if (isConverting) {
      Notificacion('Ya hay una conversión en progreso', 'warning', 2000);
      return;
    }

    try {
      isConverting = true;
      $('#conv_btnConvert').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...');
      $('#conv_progressWrapper').fadeIn();
      updateProgress(0);

      const formData = new FormData();
      formData.append('audio', currentAudio);
      formData.append('format', selectedFormat);
      formData.append('quality', selectedQuality);
      formData.append('sampleRate', selectedSampleRate);

      updateProgress(10);

      const response = await fetch('http://localhost:3000/convert-audio-format', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error(`Error del servidor: ${response.statusText}`);

      updateProgress(50);

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Error desconocido');

      updateProgress(80);

      const downloadUrl = `http://localhost:3000${result.downloadUrl}`;
      const downloadResponse = await fetch(downloadUrl);
      const blob = await downloadResponse.blob();

      const originalSize = currentAudio.size;
      const convertedSize = blob.size;
      const reduction = ((1 - convertedSize / originalSize) * 100).toFixed(1);

      updateProgress(95);

      // Update preview with REAL data + Change title
      $('#conv_previewTitle').text('Audio Convertido');
      $('#conv_previewLabel').text('Convertido:');
      $('#conv_previewEstimated').text(formatFileSize(convertedSize));
      $('#conv_previewReduction').text(`${reduction > 0 ? '-' : '+'}${Math.abs(reduction)}%`);

      if (convertedSize > originalSize) {
        $('#conv_previewEstimated').removeClass('success').addClass('warning');
        $('#conv_previewReduction').closest('.preview_reduction').css('background', 'var(--warning)');
      } else {
        $('#conv_previewEstimated').removeClass('warning').addClass('success');
        $('#conv_previewReduction').closest('.preview_reduction').css('background', 'var(--success)');
      }

      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);

      updateProgress(100);

      setTimeout(() => {
        $('#conv_progressWrapper').fadeOut();
        $('#conv_btnConvert').prop('disabled', false).html('<i class="fas fa-sync-alt"></i> Convertir Audio');

        if (convertedSize < originalSize) {
          Notificacion(`✅ Convertido a ${selectedFormat.toUpperCase()}: ${Math.abs(reduction)}% de reducción (${formatFileSize(originalSize)} → ${formatFileSize(convertedSize)})`, 'success', 4000);
        } else {
          Notificacion(`✅ Audio convertido a ${selectedFormat.toUpperCase()}: ${formatFileSize(convertedSize)} (Original: ${formatFileSize(originalSize)})`, 'success', 3000);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error convirtiendo:', error);
      $('#conv_progressWrapper').fadeOut();
      $('#conv_btnConvert').prop('disabled', false).html('<i class="fas fa-sync-alt"></i> Convertir Audio');
      Notificacion(`Error al convertir: ${error.message}`, 'error', 4000);
    } finally {
      isConverting = false;
    }
  };

  const updateProgress = (percent) => {
    $('#conv_progressFillInline').css('width', `${percent}%`);
    $('#conv_progressText').text(`${percent}%`);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    if (bytes < 1024) return `${bytes.toFixed(2)} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  // Event Listeners
  $('#conv_uploadZone').on('dblclick', () => $('#conv_audioInput').click())
    .on('dragover', (e) => { e.preventDefault(); $(e.currentTarget).addClass('dragover'); })
    .on('dragleave', (e) => $(e.currentTarget).removeClass('dragover'))
    .on('drop', (e) => {
      e.preventDefault();
      $(e.currentTarget).removeClass('dragover');
      const files = e.originalEvent.dataTransfer.files;
      if (files.length) handleAudioUpload(files[0]);
    });

  $('#conv_audioInput').on('change', (e) => {
    const file = e.target.files[0];
    if (file) handleAudioUpload(file);
  });

  $(document).on('click', '#conv_btnSelect', () => !isConverting && $('#conv_audioInput').click());

  $(document).on('click', '#conv_btnDelete', () => {
    if (isConverting) return Notificacion('No puedes eliminar mientras se convierte', 'warning', 2000);
    if (confirm('¿Estás seguro de eliminar este audio?')) {
      resetConverter();
      Notificacion('Audio eliminado', 'success', 2000);
    }
  });

  $(document).on('change', '#conv_formatSelect', function() {
    selectedFormat = $(this).val();
    if (audioAnalysis) updateConversionPreview();
  });

  $(document).on('change', '#conv_qualitySelect', function() {
    selectedQuality = $(this).val();
    if (audioAnalysis && selectedFormat) updateConversionPreview();
  });

  $(document).on('change', '#conv_sampleRateSelect', function() {
    selectedSampleRate = $(this).val();
    if (audioAnalysis && selectedFormat) updateConversionPreview();
  });

  $(document).on('click', '#conv_btnConvert', convertAudio);
};

