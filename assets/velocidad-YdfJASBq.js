import{h as b,N as c}from"./main-DfBTo_Yi.js";import"./main-BcrffMmT.js";import"./vendor-gzd0YkcT.js";import"./firebase-BVkF6YOI.js";const C=()=>`
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
`,M=()=>{console.log("✅ Velocidad cargado");const o={audio:null,metadata:{},processing:!1,actx:null,analyser:null,dataArr:null,srcNode:null,rafId:null},a=e=>document.querySelector(e),_=e=>document.querySelectorAll(e),n=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`,x=e=>e?e<1024?`${e.toFixed(2)} B`:e<1048576?`${(e/1024).toFixed(2)} KB`:`${(e/1048576).toFixed(2)} MB`:"0 B",L=e=>{const s=a("#veloc_canvas");if(!s)return;const t=s.getContext("2d");s.width=s.offsetWidth,s.height=s.offsetHeight,o.actx||(o.actx=new(window.AudioContext||window.webkitAudioContext)),o.actx.state==="suspended"&&o.actx.resume(),o.srcNode||(o.srcNode=o.actx.createMediaElementSource(e),o.analyser=o.actx.createAnalyser(),o.analyser.fftSize=256,o.srcNode.connect(o.analyser),o.analyser.connect(o.actx.destination),o.dataArr=new Uint8Array(o.analyser.frequencyBinCount)),o.rafId&&cancelAnimationFrame(o.rafId);const i=()=>{if(o.rafId=requestAnimationFrame(i),!o.analyser||!o.dataArr)return;o.analyser.getByteFrequencyData(o.dataArr);const l=getComputedStyle(document.documentElement);t.fillStyle=l.getPropertyValue("--bg3"),t.fillRect(0,0,s.width,s.height);const d=s.width/o.dataArr.length*2.5;let w=0;for(let u=0;u<o.dataArr.length;u++){const f=o.dataArr[u]/255*s.height,m=t.createLinearGradient(0,s.height,0,s.height-f);m.addColorStop(0,l.getPropertyValue("--mco")),m.addColorStop(1,l.getPropertyValue("--bg2")),t.fillStyle=m,t.fillRect(w,s.height-f,d,f),w+=d+1}};i()},p=()=>{if(!o.metadata.duration)return;const e=parseFloat(a("#veloc_speed_input").value),s=o.metadata.duration/e;a("#veloc_preview_original").textContent=n(o.metadata.duration),a("#veloc_preview_new").textContent=n(s),a("#veloc_current_speed").textContent=`${e.toFixed(2)}x`,a("#veloc_preview").style.display="block"},r=e=>{a("#veloc_speed_input").value=e.toFixed(2);const s=a("#veloc_audio");s?.src&&(s.playbackRate=e),o.metadata.duration&&p()},y=()=>{const e=a("#veloc_audio");e?.src&&(e.paused?(e.play(),a("#veloc_play_btn_center").innerHTML='<i class="fas fa-pause"></i>'):(e.pause(),a("#veloc_play_btn_center").innerHTML='<i class="fas fa-play"></i>'))},g=e=>{if(!e?.type.startsWith("audio/"))return c("Archivo de audio inválido","error",3e3);o.audio=e;const s=URL.createObjectURL(e),t=a("#veloc_audio");t.onloadedmetadata=t.onerror=null,t.src=s,t.onloadedmetadata=()=>{o.metadata={duration:t.duration,size:e.size,format:e.name.split(".").pop().toUpperCase(),name:e.name},a("#veloc_no_audio").style.display="none",["#veloc_player_container","#veloc_controls","#veloc_file_info","#veloc_stats_grid","#veloc_preview"].forEach(i=>a(i).style.display=i==="#veloc_stats_grid"?"grid":"flex"),a("#veloc_file_name").textContent=e.name,a("#veloc_file_name").title=e.name,a("#veloc_overlay_name").textContent=e.name,a("#veloc_duration").textContent=n(t.duration),a("#veloc_size").textContent=x(e.size),a("#veloc_format").textContent=o.metadata.format,a("#veloc_current_speed").textContent="1.0x",p(),L(t),t.ontimeupdate=()=>{const i=n(t.currentTime),l=n(t.duration);a("#veloc_overlay_stats").textContent=`${i} / ${l}`},t.onplay=()=>a("#veloc_play_btn_center").innerHTML='<i class="fas fa-pause"></i>',t.onpause=()=>a("#veloc_play_btn_center").innerHTML='<i class="fas fa-play"></i>',t.play().then(()=>{a("#veloc_play_btn_center").innerHTML='<i class="fas fa-pause"></i>',c(`▶️ Reproduciendo: ${n(t.duration)}`,"success",2e3)}).catch(()=>c(`✅ Audio cargado: ${n(t.duration)}`,"success",2e3))},t.onerror=()=>{o.audio&&(c("Error al cargar el audio","error",3e3),h())}},h=()=>{const e=a("#veloc_audio");e&&(e.onloadedmetadata=e.onerror=e.ontimeupdate=e.onplay=e.onpause=null,e.pause(),e.src&&URL.revokeObjectURL(e.src),e.src="",e.load()),o.rafId&&(cancelAnimationFrame(o.rafId),o.rafId=null),["#veloc_player_container","#veloc_controls","#veloc_file_info","#veloc_stats_grid","#veloc_preview"].forEach(s=>a(s).style.display="none"),a("#veloc_no_audio").style.display="flex",a("#veloc_audio_input").value="",a("#veloc_progress_wrapper").style.display="none",r(1),o.audio=null,o.metadata={},o.processing=!1},v=e=>{a("#veloc_progress_fill").style.width=`${e}%`,a("#veloc_progress_text").textContent=`${e}%`},E=async()=>{if(!o.audio)return c("No hay audio para procesar","error",2e3);if(o.processing)return c("Procesamiento en progreso","warning",2e3);const e=parseFloat(a("#veloc_speed_input").value),s=a("#veloc_pitch_checkbox").checked,t=a("#veloc_format_select").value;try{o.processing=!0;const i=a("#veloc_btn_process");i.disabled=!0,i.innerHTML='<i class="fas fa-spinner fa-spin"></i> Procesando...',a("#veloc_progress_wrapper").style.display="flex",v(10),await new Promise(d=>setTimeout(d,1e3)),v(50);const l=a("#veloc_audio");l.playbackRate=e,l.mozPreservesPitch!==void 0?l.mozPreservesPitch=s:l.preservesPitch!==void 0&&(l.preservesPitch=s),v(80),await new Promise(d=>setTimeout(d,500)),v(100),setTimeout(()=>{a("#veloc_progress_wrapper").style.display="none",i.disabled=!1,i.innerHTML='<i class="fas fa-magic"></i> Procesar Audio',c(`✅ Audio procesado: ${e.toFixed(2)}x | ${t.toUpperCase()}`,"success",3e3),o.processing=!1},1e3)}catch(i){console.error("❌ Error:",i),a("#veloc_progress_wrapper").style.display="none",a("#veloc_btn_process").disabled=!1,a("#veloc_btn_process").innerHTML='<i class="fas fa-magic"></i> Procesar Audio',c(`Error: ${i.message}`,"error",4e3),o.processing=!1}};a("#veloc_label_speed").addEventListener("mouseenter",function(){b(this,"0.25x = Muy lento | 1.0x = Normal | 3.0x = Muy rápido")}),a("#veloc_label_speed").addEventListener("mouseleave",()=>_(".wiTip").forEach(e=>e.remove())),a("#veloc_label_pitch").addEventListener("mouseenter",function(){b(this,"Mantiene el tono original al cambiar la velocidad")}),a("#veloc_label_pitch").addEventListener("mouseleave",()=>_(".wiTip").forEach(e=>e.remove())),a("#veloc_label_format").addEventListener("mouseenter",function(){b(this,"Selecciona el formato final de tu audio")}),a("#veloc_label_format").addEventListener("mouseleave",()=>_(".wiTip").forEach(e=>e.remove())),a("#veloc_upload_zone").addEventListener("dblclick",()=>a("#veloc_audio_input").click()),a("#veloc_upload_zone").addEventListener("dragover",e=>{e.preventDefault(),e.currentTarget.classList.add("dragover")}),a("#veloc_upload_zone").addEventListener("dragleave",e=>e.currentTarget.classList.remove("dragover")),a("#veloc_upload_zone").addEventListener("drop",e=>{e.preventDefault(),e.currentTarget.classList.remove("dragover"),e.dataTransfer.files.length&&g(e.dataTransfer.files[0])}),a("#veloc_audio_input").addEventListener("change",e=>{e.target.files[0]&&g(e.target.files[0])}),a("#veloc_btn_select").addEventListener("click",()=>!o.processing&&a("#veloc_audio_input").click()),a("#veloc_btn_delete").addEventListener("click",()=>{if(o.processing)return c("No puedes eliminar mientras se procesa","warning",2e3);confirm("¿Eliminar este audio?")&&(h(),c("Audio eliminado","success",2e3))}),a("#veloc_btn_reset").addEventListener("click",()=>r(1)),a("#veloc_btn_slow").addEventListener("click",()=>r(.5)),a("#veloc_btn_normal").addEventListener("click",()=>r(1)),a("#veloc_btn_fast").addEventListener("click",()=>r(1.5)),a("#veloc_btn_faster").addEventListener("click",()=>r(2)),a("#veloc_speed_input").addEventListener("input",function(){let e=parseFloat(this.value);(isNaN(e)||e<.25)&&(e=.25),e>3&&(e=3),this.value=e.toFixed(2),o.metadata.duration&&p();const s=a("#veloc_audio");s?.src&&(s.playbackRate=e)}),a("#veloc_visualizer").addEventListener("click",y),a("#veloc_play_btn_center").addEventListener("click",e=>{e.stopPropagation(),y()}),a("#veloc_btn_process").addEventListener("click",E)};export{M as init,C as render};
