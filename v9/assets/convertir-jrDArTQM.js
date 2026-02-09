import{j as e}from"./vendor-gzd0YkcT.js";import{c as F,N as t}from"./main-CBgI6W7o.js";import"./main-Dh61suKo.js";import"./firebase-BVkF6YOI.js";const P=()=>`
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
`,O=()=>{console.log(`✅ Convertir de ${F} cargado`);let l=null,h={},i=null,n="",w="medium",g="original",_=!1;const S={mp3:{codecs:["mpeg"],compression:.8,speed:"rápida",lossless:!1},wav:{codecs:["pcm"],compression:1.5,speed:"rápida",lossless:!0},ogg:{codecs:["vorbis","opus"],compression:.7,speed:"media",lossless:!1},m4a:{codecs:["aac"],compression:.75,speed:"rápida",lossless:!1},flac:{codecs:["flac"],compression:.9,speed:"lenta",lossless:!0},aac:{codecs:["aac"],compression:.72,speed:"rápida",lossless:!1},wma:{codecs:["wma"],compression:.78,speed:"media",lossless:!1},opus:{codecs:["opus"],compression:.65,speed:"media",lossless:!1}},x=(o,a)=>{const s=a.duration,v=o.size,c=v*8/s/1e3,r=o.name.split(".").pop().toLowerCase(),f={mp3:"MP3",wav:"PCM",ogg:"Vorbis",m4a:"AAC",flac:"FLAC",aac:"AAC",wma:"WMA",opus:"Opus"}[r]||"Desconocido";let d="BAJA";return c>256?d="MUY ALTA":c>192?d="ALTA":c>128?d="MEDIA":c>96?d="BAJA":d="MUY BAJA",{duration:s,size:v,bitrate:c,format:r,codec:f,quality:d,sampleRate:a.mozSampleRate||"Desconocido"}},$=(o,a,s,v)=>{const C=S[a],c={high:1,medium:.6,low:.4},r={original:1,48e3:1,44100:.92,22050:.5,16e3:.36},p=C.compression*c[s]*r[v];return o.size*p},b=()=>{if(!i||!n)return;const o=$(i,n,w,g),a=((1-o/i.size)*100).toFixed(1);e("#conv_previewOriginal").text(u(i.size)),e("#conv_previewEstimated").text(u(o)),e("#conv_previewReduction").text(`${a>0?"-":"+"}${Math.abs(a)}%`),e("#conv_previewLabel").text("Estimado:"),e("#conv_previewTitle").text("Vista Previa"),o>=i.size*.98?(e("#conv_previewEstimated").removeClass("success").addClass("warning"),e("#conv_previewReduction").closest(".preview_reduction").css("background","var(--warning)"),t("⚠️ No recomendado: El tamaño será similar o mayor","warning",3e3)):a>30?(e("#conv_previewEstimated").removeClass("warning").addClass("success"),e("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)"),t(`✅ Recomendado: Reducirás ${Math.abs(a)}% del tamaño`,"success",2500)):(e("#conv_previewEstimated").removeClass("warning").addClass("success"),e("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)")),e("#conv_conversionPreview").fadeIn()},z=o=>{const a=Math.floor(o/60),s=Math.floor(o%60);return`${a}:${s.toString().padStart(2,"0")}`},A=o=>{if(!o.type.startsWith("audio/")){t("Por favor selecciona un archivo de audio válido","error",3e3);return}l=o;const a=URL.createObjectURL(o),s=e("#conv_convertirAudio")[0];s.onloadedmetadata=s.onerror=null,s.src=a,s.onloadedmetadata=()=>{h={duration:s.duration,size:o.size,format:o.name.split(".").pop().toUpperCase(),name:o.name},i=x(o,s),e("#conv_noAudioPlaceholder").hide(),e("#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft").show(),e("#conv_fileNameDisplay").text(o.name).attr("title",o.name),e("#conv_displayTitle").text(o.name),e("#conv_displayArtist").text("Archivo local"),e("#conv_audioDuration").text(z(s.duration)),e("#conv_audioSize").text(u(o.size)),e("#conv_audioFormat").text(h.format),e("#conv_audioBitrate").text(`${i.bitrate.toFixed(0)} kbps`),e("#conv_sampleRate").text(i.sampleRate==="Desconocido"?"Desconocido":`${(i.sampleRate/1e3).toFixed(1)} kHz`),e("#conv_audioQuality").text(i.quality);const v=k(i);n=v,e("#conv_formatSelect").val(v),e(`#conv_formatSelect option[value="${i.format}"]`).prop("disabled",!0).text(`${i.format.toUpperCase()} - Ya está en este formato`),b(),t(`✅ Audio analizado: ${i.codec} | ${i.bitrate.toFixed(0)} kbps | Calidad ${i.quality}`,"success",3e3)},s.onerror=()=>{l&&(t("Error al cargar el audio. Intenta con otro archivo.","error",3e3),y())}},k=o=>["wav","flac"].includes(o.format)?"mp3":o.format==="mp3"?"ogg":(o.format==="m4a","mp3"),y=()=>{const o=e("#conv_convertirAudio")[0];o&&(o.onloadedmetadata=o.onerror=null,o.pause(),o.src&&URL.revokeObjectURL(o.src),o.src="",o.load()),e("#conv_audioPlayerContainer, #conv_conversionControls, #conv_conversionPreview, #conv_audioStatsGrid, #conv_fileInfoLeft").hide(),e("#conv_noAudioPlaceholder").show(),e("#conv_audioInput").val(""),e("#conv_progressWrapper").hide(),e("#conv_formatSelect option").prop("disabled",!1).each(function(){const a=e(this).val();e(this).text(`${a.toUpperCase()} - ${e(this).data("desc")}`)}),l=null,h={},i=null,n="",w="medium",g="original",_=!1},L=async()=>{if(!l||!n){t("Selecciona un formato de salida","warning",2e3);return}if(_){t("Ya hay una conversión en progreso","warning",2e3);return}try{_=!0,e("#conv_btnConvert").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Convirtiendo...'),e("#conv_progressWrapper").fadeIn(),m(0);const o=new FormData;o.append("audio",l),o.append("format",n),o.append("quality",w),o.append("sampleRate",g),m(10);const a=await fetch("http://localhost:3000/convert-audio-format",{method:"POST",body:o});if(!a.ok)throw new Error(`Error del servidor: ${a.statusText}`);m(50);const s=await a.json();if(!s.success)throw new Error(s.error||"Error desconocido");m(80);const v=`http://localhost:3000${s.downloadUrl}`,c=await(await fetch(v)).blob(),r=l.size,p=c.size,f=((1-p/r)*100).toFixed(1);m(95),e("#conv_previewTitle").text("Audio Convertido"),e("#conv_previewLabel").text("Convertido:"),e("#conv_previewEstimated").text(u(p)),e("#conv_previewReduction").text(`${f>0?"-":"+"}${Math.abs(f)}%`),p>r?(e("#conv_previewEstimated").removeClass("success").addClass("warning"),e("#conv_previewReduction").closest(".preview_reduction").css("background","var(--warning)")):(e("#conv_previewEstimated").removeClass("warning").addClass("success"),e("#conv_previewReduction").closest(".preview_reduction").css("background","var(--success)"));const d=document.createElement("a"),R=URL.createObjectURL(c);d.href=R,d.download=s.filename,d.click(),URL.revokeObjectURL(R),m(100),setTimeout(()=>{e("#conv_progressWrapper").fadeOut(),e("#conv_btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Audio'),p<r?t(`✅ Convertido a ${n.toUpperCase()}: ${Math.abs(f)}% de reducción (${u(r)} → ${u(p)})`,"success",4e3):t(`✅ Audio convertido a ${n.toUpperCase()}: ${u(p)} (Original: ${u(r)})`,"success",3e3)},1e3)}catch(o){console.error("❌ Error convirtiendo:",o),e("#conv_progressWrapper").fadeOut(),e("#conv_btnConvert").prop("disabled",!1).html('<i class="fas fa-sync-alt"></i> Convertir Audio'),t(`Error al convertir: ${o.message}`,"error",4e3)}finally{_=!1}},m=o=>{e("#conv_progressFillInline").css("width",`${o}%`),e("#conv_progressText").text(`${o}%`)},u=o=>o===0?"0 B":o<1024?`${o.toFixed(2)} B`:o<1024*1024?`${(o/1024).toFixed(2)} KB`:o<1024*1024*1024?`${(o/(1024*1024)).toFixed(2)} MB`:`${(o/(1024*1024*1024)).toFixed(2)} GB`;e("#conv_uploadZone").on("dblclick",()=>e("#conv_audioInput").click()).on("dragover",o=>{o.preventDefault(),e(o.currentTarget).addClass("dragover")}).on("dragleave",o=>e(o.currentTarget).removeClass("dragover")).on("drop",o=>{o.preventDefault(),e(o.currentTarget).removeClass("dragover");const a=o.originalEvent.dataTransfer.files;a.length&&A(a[0])}),e("#conv_audioInput").on("change",o=>{const a=o.target.files[0];a&&A(a)}),e(document).on("click","#conv_btnSelect",()=>!_&&e("#conv_audioInput").click()),e(document).on("click","#conv_btnDelete",()=>{if(_)return t("No puedes eliminar mientras se convierte","warning",2e3);confirm("¿Estás seguro de eliminar este audio?")&&(y(),t("Audio eliminado","success",2e3))}),e(document).on("change","#conv_formatSelect",function(){n=e(this).val(),i&&b()}),e(document).on("change","#conv_qualitySelect",function(){w=e(this).val(),i&&n&&b()}),e(document).on("change","#conv_sampleRateSelect",function(){g=e(this).val(),i&&n&&b()}),e(document).on("click","#conv_btnConvert",L)},T=()=>{console.log("🧹 Convertir limpiado"),e("#conv_uploadZone, #conv_audioInput, #conv_btnSelect, #conv_btnDelete, #conv_btnConvert, #conv_formatSelect, #conv_qualitySelect, #conv_sampleRateSelect").off();const l=e("#conv_convertirAudio")[0];l?.src&&URL.revokeObjectURL(l.src)};export{T as cleanup,O as init,P as render};
