import{j as a}from"./vendor-gzd0YkcT.js";import{c as M,N as t}from"./main-BrqkJLbH.js";import"./main-cJeOPTY6.js";import"./firebase-BVkF6YOI.js";const P=()=>`
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
`,T=()=>{console.log(`✅ Convertir de ${M} cargado`);let u=null,h={},i=null,n="",w="medium",g="original",_=!1;const R={mp3:{codecs:["mpeg"],compression:.8,speed:"rápida",lossless:!1},wav:{codecs:["pcm"],compression:1.5,speed:"rápida",lossless:!0},ogg:{codecs:["vorbis","opus"],compression:.7,speed:"media",lossless:!1},m4a:{codecs:["aac"],compression:.75,speed:"rápida",lossless:!1},flac:{codecs:["flac"],compression:.9,speed:"lenta",lossless:!0},aac:{codecs:["aac"],compression:.72,speed:"rápida",lossless:!1},wma:{codecs:["wma"],compression:.78,speed:"media",lossless:!1},opus:{codecs:["opus"],compression:.65,speed:"media",lossless:!1}},S=(e,o)=>{const s=o.duration,l=e.size,c=l*8/s/1e3,r=e.name.split(".").pop().toLowerCase(),f={mp3:"MP3",wav:"PCM",ogg:"Vorbis",m4a:"AAC",flac:"FLAC",aac:"AAC",wma:"WMA",opus:"Opus"}[r]||"Desconocido";let d="BAJA";return c>256?d="MUY ALTA":c>192?d="ALTA":c>128?d="MEDIA":c>96?d="BAJA":d="MUY BAJA",{duration:s,size:l,bitrate:c,format:r,codec:f,quality:d,sampleRate:o.mozSampleRate||"Desconocido"}},$=(e,o,s,l)=>{const C=R[o],c={high:1,medium:.6,low:.4},r={original:1,48e3:1,44100:.92,22050:.5,16e3:.36},v=C.compression*c[s]*r[l];return e.size*v},b=()=>{if(!i||!n)return;const e=$(i,n,w,g),o=((1-e/i.size)*100).toFixed(1);a("#conv_previewOriginal").text(p(i.size)),a("#conv_previewEstimated").text(p(e)),a("#conv_previewReduction").text(`${o>0?"-":"+"}${Math.abs(o)}%`),a("#conv_previewLabel").text("Estimado:"),a("#conv_previewTitle").text("Vista Previa"),e>=i.size*.98?(a("#conv_previewEstimated").removeClass("success").addClass("warning"),a("#conv_previewReduction").closest(".preview_reduction").css("background","var(--warning)"),t("⚠️ No recomendado: El tamaño será similar o mayor","warning",3e3)):o>30?(a("#conv_previewEstimated").removeClass("warning").addClass("success"),a("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)"),t(`✅ Recomendado: Reducirás ${Math.abs(o)}% del tamaño`,"success",2500)):(a("#conv_previewEstimated").removeClass("warning").addClass("success"),a("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)")),a("#conv_conversionPreview").fadeIn()},z=e=>{const o=Math.floor(e/60),s=Math.floor(e%60);return`${o}:${s.toString().padStart(2,"0")}`},A=e=>{if(!e.type.startsWith("audio/")){t("Por favor selecciona un archivo de audio válido","error",3e3);return}u=e;const o=URL.createObjectURL(e),s=a("#conv_convertirAudio")[0];s.onloadedmetadata=s.onerror=null,s.src=o,s.onloadedmetadata=()=>{h={duration:s.duration,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},i=S(e,s),a("#conv_noAudioPlaceholder").hide(),a("#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft").show(),a("#conv_fileNameDisplay").text(e.name).attr("title",e.name),a("#conv_displayTitle").text(e.name),a("#conv_displayArtist").text("Archivo local"),a("#conv_audioDuration").text(z(s.duration)),a("#conv_audioSize").text(p(e.size)),a("#conv_audioFormat").text(h.format),a("#conv_audioBitrate").text(`${i.bitrate.toFixed(0)} kbps`),a("#conv_sampleRate").text(i.sampleRate==="Desconocido"?"Desconocido":`${(i.sampleRate/1e3).toFixed(1)} kHz`),a("#conv_audioQuality").text(i.quality);const l=k(i);n=l,a("#conv_formatSelect").val(l),a(`#conv_formatSelect option[value="${i.format}"]`).prop("disabled",!0).text(`${i.format.toUpperCase()} - Ya está en este formato`),b(),t(`✅ Audio analizado: ${i.codec} | ${i.bitrate.toFixed(0)} kbps | Calidad ${i.quality}`,"success",3e3)},s.onerror=()=>{u&&(t("Error al cargar el audio. Intenta con otro archivo.","error",3e3),y())}},k=e=>["wav","flac"].includes(e.format)?"mp3":e.format==="mp3"?"ogg":(e.format==="m4a","mp3"),y=()=>{const e=a("#conv_convertirAudio")[0];e&&(e.onloadedmetadata=e.onerror=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),a("#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft").hide(),a("#conv_noAudioPlaceholder").show(),a("#conv_audioInput").val(""),a("#conv_progressWrapper").hide(),a("#conv_formatSelect option").prop("disabled",!1).each(function(){const o=a(this).val();a(this).text(`${o.toUpperCase()} - ${a(this).data("desc")}`)}),u=null,h={},i=null,n="",w="medium",g="original",_=!1},F=async()=>{if(!u||!n){t("Selecciona un formato de salida","warning",2e3);return}if(_){t("Ya hay una conversión en progreso","warning",2e3);return}try{_=!0,a("#conv_btnConvert").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...'),a("#conv_progressWrapper").fadeIn(),m(0);const e=new FormData;e.append("audio",u),e.append("format",n),e.append("quality",w),e.append("sampleRate",g),m(10);const o=await fetch("http://localhost:3000/convert-audio-format",{method:"POST",body:e});if(!o.ok)throw new Error(`Error del servidor: ${o.statusText}`);m(50);const s=await o.json();if(!s.success)throw new Error(s.error||"Error desconocido");m(80);const l=`http://localhost:3000${s.downloadUrl}`,c=await(await fetch(l)).blob(),r=u.size,v=c.size,f=((1-v/r)*100).toFixed(1);m(95),a("#conv_previewTitle").text("Audio Convertido"),a("#conv_previewLabel").text("Convertido:"),a("#conv_previewEstimated").text(p(v)),a("#conv_previewReduction").text(`${f>0?"-":"+"}${Math.abs(f)}%`),v>r?(a("#conv_previewEstimated").removeClass("success").addClass("warning"),a("#conv_previewReduction").closest(".preview_reduction").css("background","var(--warning)")):(a("#conv_previewEstimated").removeClass("warning").addClass("success"),a("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)"));const d=document.createElement("a"),x=URL.createObjectURL(c);d.href=x,d.download=s.filename,d.click(),URL.revokeObjectURL(x),m(100),setTimeout(()=>{a("#conv_progressWrapper").fadeOut(),a("#conv_btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Audio'),v<r?t(`✅ Convertido a ${n.toUpperCase()}: ${Math.abs(f)}% de reducción (${p(r)} → ${p(v)})`,"success",4e3):t(`✅ Audio convertido a ${n.toUpperCase()}: ${p(v)} (Original: ${p(r)})`,"success",3e3)},1e3)}catch(e){console.error("❌ Error convirtiendo:",e),a("#conv_progressWrapper").fadeOut(),a("#conv_btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Audio'),t(`Error al convertir: ${e.message}`,"error",4e3)}finally{_=!1}},m=e=>{a("#conv_progressFillInline").css("width",`${e}%`),a("#conv_progressText").text(`${e}%`)},p=e=>e===0?"0 B":e<1024?`${e.toFixed(2)} B`:e<1024*1024?`${(e/1024).toFixed(2)} KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(2)} MB`:`${(e/(1024*1024*1024)).toFixed(2)} GB`;a("#conv_uploadZone").on("dblclick",()=>a("#conv_audioInput").click()).on("dragover",e=>{e.preventDefault(),a(e.currentTarget).addClass("dragover")}).on("dragleave",e=>a(e.currentTarget).removeClass("dragover")).on("drop",e=>{e.preventDefault(),a(e.currentTarget).removeClass("dragover");const o=e.originalEvent.dataTransfer.files;o.length&&A(o[0])}),a("#conv_audioInput").on("change",e=>{const o=e.target.files[0];o&&A(o)}),a(document).on("click","#conv_btnSelect",()=>!_&&a("#conv_audioInput").click()),a(document).on("click","#conv_btnDelete",()=>{if(_)return t("No puedes eliminar mientras se convierte","warning",2e3);confirm("¿Estás seguro de eliminar este audio?")&&(y(),t("Audio eliminado","success",2e3))}),a(document).on("change","#conv_formatSelect",function(){n=a(this).val(),i&&b()}),a(document).on("change","#conv_qualitySelect",function(){w=a(this).val(),i&&n&&b()}),a(document).on("change","#conv_sampleRateSelect",function(){g=a(this).val(),i&&n&&b()}),a(document).on("click","#conv_btnConvert",F)};export{T as init,P as render};
