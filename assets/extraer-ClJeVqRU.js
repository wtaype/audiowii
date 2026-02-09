import{j as e}from"./vendor-gzd0YkcT.js";import{c as z,N as s}from"./main-D3QGFjtL.js";import"./main-eKRdv0Zv.js";import"./firebase-BVkF6YOI.js";const M=()=>`
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
`;let _=null,x={duration:0},o=null,n=null;const w=(a=0)=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(Math.floor(a%60)).padStart(2,"0")}`,f=a=>a?a<1024?`${a.toFixed(2)} B`:a<1024*1024?`${(a/1024).toFixed(2)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`:"0 B",g=a=>{if(!a||!a.type.startsWith("video/"))return s("Por favor selecciona un archivo de video válido","error",2500);_=a;const t=e("#extr_video")[0],i=URL.createObjectURL(a);t.src=i,t.load(),t.onloadedmetadata=()=>{x={name:a.name,duration:t.duration,size:a.size,width:t.videoWidth,height:t.videoHeight},e("#extr_video_name").text(a.name),e("#extr_video_duration").text(w(t.duration)),e("#extr_video_resolution").text(`${t.videoWidth}x${t.videoHeight}`),e("#extr_video_size").text(f(a.size)),e("#extr_end_time").val(t.duration.toFixed(1)),e("#extr_preview_section").removeClass("dpn"),e("#extr_btn_extract").prop("disabled",!1),u(),s(`Video cargado: ${a.name}`,"success",2e3)},t.onerror=()=>{s("Error al cargar el video. Intenta con otro archivo.","error",2500),m()}},m=()=>{const a=e("#extr_video")[0];a.src&&(URL.revokeObjectURL(a.src),a.src=""),_=null,x={name:"",duration:0,size:0,width:0,height:0},e("#extr_preview_section").addClass("dpn"),e("#extr_result_section").addClass("dpn"),e("#extr_btn_extract").prop("disabled",!0),e("#extr_start_time").val(0),e("#extr_end_time").val(0),o&&(URL.revokeObjectURL(o),o=null),n=null},u=()=>{const a=e("#extr_format").val(),t=e("#extr_quality").val(),i=x.duration||0,d={high:320,medium:192,low:128}[t]*1e3/8*i,r={mp3:"MP3",wav:"WAV",ogg:"OGG",m4a:"M4A",aac:"AAC",flac:"FLAC"},c={high:"Alta (320 kbps)",medium:"Media (192 kbps)",low:"Baja (128 kbps)"};e("#extr_preview_format").text(r[a]),e("#extr_preview_quality").text(c[t]),e("#extr_preview_size").text(`~ ${f(d)}`)},k=async()=>{if(!_)return s("No hay video cargado","warning",2e3);const a=e("#extr_format").val(),t=e("#extr_quality").val(),i=e("#extr_sample_rate").val(),b=e("#extr_volume").val(),p=parseFloat(e("#extr_start_time").val())||0,d=parseFloat(e("#extr_end_time").val())||x.duration;if(p>=d)return s("El tiempo de inicio debe ser menor al tiempo de fin","error",2500);try{e("#extr_btn_extract").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> Procesando...'),e("#extr_progress").removeClass("dpn"),l("Iniciando extracción...",0);const r=new FormData;r.append("video",_),r.append("format",a),r.append("quality",t),r.append("sampleRate",i),r.append("volume",b),r.append("startTime",p),r.append("endTime",d),l("Enviando al servidor...",10);const c=await fetch("http://localhost:3000/extract-audio",{method:"POST",body:r});if(!c.ok)throw new Error(`Error del servidor: ${c.statusText}`);l("Procesando video...",50);const v=await c.json();if(!v.success)throw new Error(v.error||"Error desconocido");l("Descargando audio...",80);const A=`http://localhost:3000${v.downloadUrl}`;n=await(await fetch(A)).blob(),l("Finalizando...",95),o&&URL.revokeObjectURL(o),o=URL.createObjectURL(n);const R=e("#extr_result_audio")[0];R.src=o;const h=v.filename||`audio_${Date.now()}.${a}`;e("#extr_result_name").text(h),e("#extr_result_size").text(f(n.size)),e("#extr_result_duration").text(w(d-p)),l("Completado",100),setTimeout(()=>{e("#extr_progress").addClass("dpn"),e("#extr_result_section").removeClass("dpn"),e("#extr_btn_extract").prop("disabled",!1).html('<i class="fas fa-download"></i> Extraer Audio'),s(`✅ Audio extraído exitosamente: ${h}`,"success",3e3)},500)}catch(r){console.error("Error extrayendo audio:",r),e("#extr_progress").addClass("dpn"),e("#extr_btn_extract").prop("disabled",!1).html('<i class="fas fa-download"></i> Extraer Audio'),s(`Error al extraer audio: ${r.message}`,"error",3500)}},l=(a,t)=>{e("#extr_progress_text").text(a),e("#extr_progress_percent").text(`${t}%`),e("#extr_progress_fill").css("width",`${t}%`)},y=()=>{if(!n)return s("No hay audio para descargar","warning",2e3);const a=e("#extr_format").val(),t=`${_.name.replace(/\.[^.]+$/,"")}_audio.${a}`,i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=t,i.click(),URL.revokeObjectURL(i.href),s(`Descargando: ${t}`,"success",2e3)},O=()=>{console.log(`✅ Extraer de ${z} cargado`),e("#extr_btn_select").on("click",()=>e("#extr_file_input").click()),e("#extr_file_input").on("change",function(){this.files[0]&&g(this.files[0])}),e("#extr_btn_clear").on("click",m),e("#extr_dropzone").on("dblclick",()=>e("#extr_file_input").click()).on("dragover",a=>{a.preventDefault(),e("#extr_dropzone").addClass("dragover")}).on("dragleave",()=>{e("#extr_dropzone").removeClass("dragover")}).on("drop",a=>{a.preventDefault(),e("#extr_dropzone").removeClass("dragover");const t=a.originalEvent.dataTransfer.files[0];t&&g(t)}),e("#extr_format").on("change",u),e("#extr_quality").on("change",u),e("#extr_volume").on("input",function(){e("#extr_volume_val").text(`${e(this).val()}%`)}),e("#extr_btn_extract").on("click",k),e("#extr_btn_download").on("click",y)},q=()=>{console.log("🧹 Extraer limpiado"),m(),e("#extr_btn_select, #extr_file_input, #extr_btn_clear, #extr_dropzone, #extr_format, #extr_quality, #extr_volume, #extr_btn_extract, #extr_btn_download").off()};export{q as cleanup,O as init,M as render};
