import{j as e}from"./vendor-gzd0YkcT.js";import{N as u}from"./main-CBgI6W7o.js";import"./main-Dh61suKo.js";import"./firebase-BVkF6YOI.js";const Kt=()=>`
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
`;let c=[],m=0,q=1,x=70,Q=!1,F="",H=!1,Z="volume",v=null,R=null,L=null,C=null,U=null,Y=null,s=null,p=0,f=0,tt=!1,D=[{freq:60,gain:0,label:"60"},{freq:170,gain:0,label:"170"},{freq:350,gain:0,label:"350"},{freq:1e3,gain:0,label:"1K"},{freq:3500,gain:0,label:"3.5K"},{freq:1e4,gain:0,label:"10K"}],T=[],V=100,P=0,j=0;const vt=["audio/mp3","audio/mpeg","audio/wav","audio/m4a","audio/ogg","audio/aac","audio/flac","audio/webm"],ht=t=>t.type.startsWith("audio/")||vt.includes(t.type),et=t=>t?`${(t/1024**Math.floor(Math.log(t)/Math.log(1024))).toFixed(1)} ${["B","KB","MB"][Math.floor(Math.log(t)/Math.log(1024))]}`:"0 B",z=(t=0)=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`,I=(t=0)=>`${z(t)}.${String(Math.floor(t%1*10))}`,A=()=>e("#edit_audio")[0],w=t=>e("#edit_status_msg").text(t),bt=()=>{H=!H,H?(e("#edit_header").addClass("dpn"),e("#edit_search_bar").removeClass("dpn"),setTimeout(()=>e("#edit_search_input").focus(),100)):J()},J=()=>{H=!1,e("#edit_search_bar").addClass("dpn"),e("#edit_header").removeClass("dpn"),e("#edit_search_input").val(""),F="",E()},gt=t=>{F=t.toLowerCase().trim(),E();const i=_t();e("#edit_search_results").text(`${i.length} de ${c.length}`)},_t=()=>F?c.filter(t=>t.name.toLowerCase().includes(F)):c,it=t=>{let i=0;Array.from(t).forEach(a=>{if(!ht(a))return u(`${a.name} no es audio`,"error",2e3);const n=URL.createObjectURL(a),o={id:Date.now()+Math.random(),name:a.name,format:a.type,size:a.size,url:n,file:a,duration:0},d=document.createElement("audio");d.onloadedmetadata=()=>{o.duration=d.duration,E(),URL.revokeObjectURL(d.src)},d.src=n,c.push(o),i++}),i&&(u(`${i} audio(s) agregado(s)`,"success",1500),E(),c.length===i&&X(0))};let ut=1;const wt=t=>{const i=t.originalEvent?.clipboardData?.items;if(!i)return;let a=!1;e.each(i,(n,o)=>{if(o.type.startsWith("audio/")){const d=o.getAsFile();return d?(it([new File([d],`Audio_${ut++}.mp3`,{type:d.type})]),a=!0,e("#edit_zone").addClass("paste_flash"),setTimeout(()=>e("#edit_zone").removeClass("paste_flash"),300),!1):!0}}),!a&&i.length&&u("No se detectó audio en portapapeles","warning",2e3)},E=()=>{const t=e("#edit_gallery"),i=_t();if(e("#edit_count").text(c.length),!c.length)return t.html('<div class="edit_gallery_empty"><i class="fas fa-folder-open"></i><p>Sin archivos</p></div>');if(!i.length&&F)return t.html('<div class="edit_gallery_empty"><i class="fas fa-search"></i><p>Sin resultados</p></div>');t.html(i.map(a=>{const n=c.indexOf(a);let o=a.name;return F&&(o=a.name.replace(new RegExp(`(${F})`,"gi"),"<mark>$1</mark>")),`
      <div class="edit_file_item ${n===m?"active":""}" data-i="${n}">
        <div class="edit_file_icon"><i class="fas fa-music"></i></div>
        <div class="edit_file_info">
          <span class="edit_file_name">${o}</span>
          <span class="edit_file_meta">${et(a.size)} • ${a.format.split("/")[1]?.toUpperCase()||"AUDIO"}</span>
        </div>
        <span class="edit_file_dur">${z(a.duration)}</span>
        <button class="edit_file_del" data-i="${n}"><i class="fas fa-times"></i></button>
      </div>`}).join(""))},X=async t=>{if(t<0||t>=c.length)return;m=t;const i=c[t],a=A();e("#edit_placeholder").addClass("dpn"),e("#edit_waveform_wrap").removeClass("dpn"),e("#edit_info").removeClass("dpn"),G(),a.src=i.url,a.load(),a.volume=x/100,a.playbackRate=q,e("#edit_name, #edit_wave_name").text(i.name),e("#edit_details").text(`${et(i.size)} • ${z(i.duration)} • ${i.format.split("/")[1]?.toUpperCase()||"AUDIO"}`),kt(a),St(),await ft(i),a.ontimeupdate=()=>{const n=a.currentTime,o=a.duration||1;e("#edit_time_current").text(z(n)),e("#edit_timeline_fill").css("width",`${n/o*100}%`),e("#edit_time_total").text(z(o)),e("#edit_wave_time").text(`${z(n)} / ${z(o)}`),xt(n,o)},a.onplay=()=>{e("#edit_btn_play i").attr("class","fas fa-pause"),w("Reproduciendo...")},a.onpause=()=>{e("#edit_btn_play i").attr("class","fas fa-play"),w("Pausado")},a.onended=()=>Q?(a.currentTime=0,a.play()):w("Finalizado"),E(),Mt(),$(),at(),w("Audio cargado")},ft=async t=>{try{M("Decodificando audio..."),v||(v=new(window.AudioContext||window.webkitAudioContext));const a=await(await fetch(t.url)).arrayBuffer();s=await v.decodeAudioData(a),k(),B(),p=0,f=s.duration,w(`Decodificado: ${s.numberOfChannels}ch, ${s.sampleRate}Hz`)}catch(i){k(),s=null,u("Error al decodificar audio","error",2e3),console.error(i)}},B=()=>{if(!s||(C=e("#edit_canvas")[0],!C))return;U=C.getContext("2d"),C.width=C.offsetWidth*2,C.height=C.offsetHeight*2,U.scale(2,2);const t=C.offsetWidth,i=C.offsetHeight,a=s.getChannelData(0),n=Math.ceil(a.length/t),o=getComputedStyle(document.documentElement);U.fillStyle=o.getPropertyValue("--bg3").trim(),U.fillRect(0,0,t,i);const d=i/2;for(let r=0;r<t;r++){let l=1,_=-1;for(let b=0;b<n;b++){const S=a[r*n+b]||0;S<l&&(l=S),S>_&&(_=S)}const h=(1+l)*d,g=(1+_)*d,y=U.createLinearGradient(0,h,0,g);y.addColorStop(0,o.getPropertyValue("--info").trim()),y.addColorStop(1,o.getPropertyValue("--mco").trim()),U.fillStyle=y,U.fillRect(r,h,1,g-h||1)}},xt=(t,i)=>{const a=t/i*100;e("#edit_cursor").removeClass("dpn").css("left",`${a}%`)},yt=t=>{if(!s)return;tt=!0;const i=C.getBoundingClientRect();p=(t.clientX-i.left)/i.width*s.duration,f=p,K()},Ct=t=>{if(!tt||!s)return;const i=C.getBoundingClientRect();f=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width))*s.duration,K()},$t=()=>{tt=!1,p>f&&([p,f]=[f,p]),Math.abs(f-p)<.05&&(p=0,f=s?.duration||0,e("#edit_selection").addClass("dpn")),Z==="trim"&&$()},K=()=>{if(!s)return;const t=s.duration;let i=p,a=f;i>a&&([i,a]=[a,i]);const n=i/t*100,o=(a-i)/t*100;e("#edit_selection").removeClass("dpn").css({left:`${n}%`,width:`${o}%`}),e("#edit_sel_label").text(`${I(i)} - ${I(a)}`)},kt=t=>{C=e("#edit_canvas")[0],C&&(v||(v=new(window.AudioContext||window.webkitAudioContext)),v.state==="suspended"&&v.resume(),L||(L=v.createMediaElementSource(t),R=v.createAnalyser(),R.fftSize=256,L.connect(R),R.connect(v.destination),new Uint8Array(R.frequencyBinCount)))},St=t=>{if(v&&(pt(),T=D.map(i=>{const a=v.createBiquadFilter();return a.type=i.freq<=60?"lowshelf":i.freq>=1e4?"highshelf":"peaking",a.frequency.value=i.freq,a.gain.value=i.gain,a.Q.value=1.4,a}),L&&R)){L.disconnect();let i=L;T.forEach(a=>{i.connect(a),i=a}),i.connect(R),R.connect(v.destination)}},pt=()=>{T.forEach(t=>{try{t.disconnect()}catch{}}),T=[]},W=(t,i)=>{D[t].gain=i,T[t]&&(T[t].gain.value=i)},M=(t="Procesando...",i=0)=>{e("#edit_processing").removeClass("dpn"),e("#edit_proc_text").text(t),e("#edit_proc_fill").css("width",`${i}%`)},k=()=>{e("#edit_processing").addClass("dpn")},Mt=()=>{e("#edit_playback").html(`
    <button class="edit_btn_ctrl" id="edit_btn_prev"><i class="fas fa-step-backward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_play"><i class="fas fa-play"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_next"><i class="fas fa-step-forward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_stop"><i class="fas fa-stop"></i></button>
    <button class="edit_btn_ctrl ${Q?"active":""}" id="edit_btn_loop"><i class="fas fa-redo"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_speed">${q}x</button>
    <div class="edit_vol_control">
      <button class="edit_btn_ctrl" id="edit_btn_vol"><i class="fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}"></i></button>
      <div class="edit_vol_container" id="edit_vol_click"><div class="edit_vol_bg"><div class="edit_vol_fill" id="edit_vol_fill"></div></div></div>
    </div>
  `),setTimeout(()=>e("#edit_vol_fill").css("width",`${x}%`),10)},$=()=>{const t=e("#edit_panel_content");if(!c.length||!s)return t.html('<div class="edit_panel_empty"><i class="fas fa-sliders-h"></i><p>Carga un audio para usar las herramientas</p></div>');switch(Z){case"volume":return Rt(t);case"eq":return Et(t);case"effects":return At(t);case"trim":return Bt(t);case"export":return Dt(t)}},Rt=t=>{t.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-volume-up"></i> Ajuste de Volumen</div>
      <div class="edit_tool_row">
        <label>Ganancia</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_gain" min="0" max="300" value="${V}" step="1">
          <span class="edit_slider_val" id="edit_gain_val">${V}%</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade In</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadein" min="0" max="10" value="${P}" step="0.1">
          <span class="edit_slider_val" id="edit_fadein_val">${P}s</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade Out</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadeout" min="0" max="10" value="${j}" step="0.1">
          <span class="edit_slider_val" id="edit_fadeout_val">${j}s</span>
        </div>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn primary" id="edit_apply_vol"><i class="fas fa-check"></i> Aplicar Volumen</button>
        <button class="edit_action_btn" id="edit_normalize"><i class="fas fa-balance-scale"></i> Normalizar</button>
        <button class="edit_action_btn danger" id="edit_reset_vol"><i class="fas fa-undo"></i> Reset</button>
      </div>
    </div>
  `)},Et=t=>{t.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-sliders-h"></i> Ecualizador de 6 Bandas</div>
      <div class="edit_eq_container">
        ${D.map((i,a)=>`
          <div class="edit_eq_band">
            <span class="edit_eq_val" id="edit_eq_v${a}">${i.gain>0?"+":""}${i.gain}dB</span>
            <input type="range" class="edit_eq_slider" data-band="${a}" min="-12" max="12" value="${i.gain}" step="0.5">
            <label>${i.label}</label>
          </div>
        `).join("")}
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn" id="edit_eq_flat"><i class="fas fa-minus"></i> Flat</button>
        <button class="edit_action_btn" id="edit_eq_bass"><i class="fas fa-drum"></i> Bass Boost</button>
        <button class="edit_action_btn" id="edit_eq_vocal"><i class="fas fa-microphone"></i> Vocal</button>
        <button class="edit_action_btn" id="edit_eq_treble"><i class="fas fa-bell"></i> Treble</button>
      </div>
    </div>
  `)},At=t=>{t.html(`
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
  `)},Bt=t=>{const i=s?.duration||0;let a=Math.min(p,f),n=Math.max(p,f);t.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-cut"></i> Cortar / Recortar</div>
      <div class="edit_tool_row">
        <label>Inicio</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_trim_start" min="0" max="${i}" value="${a}" step="0.01">
          <span class="edit_slider_val" id="edit_trim_s_val">${I(a)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fin</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_trim_end" min="0" max="${i}" value="${n}" step="0.01">
          <span class="edit_slider_val" id="edit_trim_e_val">${I(n)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Duración selección</label>
        <span class="edit_slider_val">${I(n-a)}</span>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn primary" id="edit_trim_keep"><i class="fas fa-crop-alt"></i> Mantener Selección</button>
        <button class="edit_action_btn danger" id="edit_trim_delete"><i class="fas fa-trash"></i> Eliminar Selección</button>
        <button class="edit_action_btn" id="edit_trim_all"><i class="fas fa-expand"></i> Seleccionar Todo</button>
      </div>
    </div>
  `)},Dt=t=>{t.html(`
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
  `)},Tt=()=>{s&&(M("Aplicando volumen..."),setTimeout(()=>{const t=V/100;for(let i=0;i<s.numberOfChannels;i++){const a=s.getChannelData(i),n=s.sampleRate,o=Math.floor(P*n),d=Math.floor(j*n);for(let r=0;r<a.length;r++){let l=t;r<o&&(l*=r/o),r>a.length-d&&(l*=(a.length-r)/d),a[r]*=l}}O(),k(),B(),u("Volumen aplicado","success",1500),w("Volumen aplicado")},50))},Ot=()=>{s&&(M("Normalizando..."),setTimeout(()=>{let t=0;for(let i=0;i<s.numberOfChannels;i++){const a=s.getChannelData(i);for(let n=0;n<a.length;n++){const o=Math.abs(a[n]);o>t&&(t=o)}}if(t>0&&t!==1){const i=1/t;for(let a=0;a<s.numberOfChannels;a++){const n=s.getChannelData(a);for(let o=0;o<n.length;o++)n[o]*=i}}O(),k(),B(),u("Audio normalizado","success",1500),w("Normalizado")},50))},Ut=()=>{s&&(M("Invirtiendo..."),setTimeout(()=>{for(let t=0;t<s.numberOfChannels;t++)s.getChannelData(t).reverse();O(),k(),B(),u("Audio invertido","success",1500),w("Reversa aplicada")},50))},st=t=>{s&&(M(`Cambiando velocidad a ${t}x...`),setTimeout(()=>{const i=Math.floor(s.length/t),a=v.createBuffer(s.numberOfChannels,i,s.sampleRate);for(let n=0;n<s.numberOfChannels;n++){const o=s.getChannelData(n),d=a.getChannelData(n);for(let r=0;r<i;r++){const l=r*t,_=Math.floor(l),h=Math.min(_+1,o.length-1),g=l-_;d[r]=o[_]*(1-g)+o[h]*g}}s=a,O(),k(),B(),f=s.duration,u(`Velocidad cambiada a ${t}x`,"success",1500),w(`Speed: ${t}x`)},50))},qt=()=>{if(!s||s.numberOfChannels===1)return u("Ya es mono","info",1500);M("Convirtiendo a mono..."),setTimeout(()=>{const t=v.createBuffer(1,s.length,s.sampleRate),i=t.getChannelData(0),a=[];for(let n=0;n<s.numberOfChannels;n++)a.push(s.getChannelData(n));for(let n=0;n<s.length;n++){let o=0;a.forEach(d=>o+=d[n]),i[n]=o/a.length}s=t,O(),k(),B(),at(c[m]),u("Convertido a mono","success",1500),w("Mono")},50)},zt=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.01)return u("Selecciona una región primero","warning",1500);M("Silenciando selección..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),o=Math.floor(i*a);for(let d=0;d<s.numberOfChannels;d++){const r=s.getChannelData(d);for(let l=n;l<o&&l<r.length;l++)r[l]=0}O(),k(),B(),u("Selección silenciada","success",1500),w("Selección silenciada")},50)},Ft=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.05)return u("Selecciona una región","warning",1500);M("Recortando..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),d=Math.floor(i*a)-n,r=v.createBuffer(s.numberOfChannels,d,a);for(let l=0;l<s.numberOfChannels;l++){const _=s.getChannelData(l),h=r.getChannelData(l);for(let g=0;g<d;g++)h[g]=_[n+g]||0}s=r,p=0,f=s.duration,O(),k(),B(),e("#edit_selection").addClass("dpn"),u("Recortado","success",1500),w("Recortado"),$()},50)},nt=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.05)return u("Selecciona una región","warning",1500);M("Eliminando selección..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),o=Math.floor(i*a),d=s.length-(o-n);if(d<1)return k(),u("No puedes eliminar todo","error",1500);const r=v.createBuffer(s.numberOfChannels,d,a);for(let l=0;l<s.numberOfChannels;l++){const _=s.getChannelData(l),h=r.getChannelData(l);let g=0;for(let y=0;y<_.length;y++)(y<n||y>=o)&&(h[g++]=_[y])}s=r,p=0,f=s.duration,O(),k(),B(),e("#edit_selection").addClass("dpn"),u("Selección eliminada","success",1500),w("Selección eliminada"),$()},50)},Lt=async()=>{if(!c[m])return;const t=c[m];await ft(t),V=100,P=0,j=0,D.forEach(i=>i.gain=0),T.forEach(i=>i.gain.value=0),$(),u("Restaurado al original","success",1500),w("Restaurado")},O=()=>{if(!s||!c[m])return;const t=mt(s),i=new Blob([t],{type:"audio/wav"});URL.revokeObjectURL(c[m].url),c[m].url=URL.createObjectURL(i),c[m].size=i.size,c[m].duration=s.duration,c[m].format="audio/wav";const a=A(),n=!a.paused,o=a.currentTime;a.src=c[m].url,a.load(),n&&(a.currentTime=Math.min(o,s.duration),a.play().catch(()=>{})),at(c[m]),E()},ot=(t=!1)=>{if(!s)return;let i=s;if(t){let a=Math.min(p,f),n=Math.max(p,f);if(n-a<.05)return u("Selecciona una región","warning",1500);const o=i.sampleRate,d=Math.floor(a*o),r=Math.floor(n*o),l=r-d,_=v.createBuffer(i.numberOfChannels,l,o);for(let h=0;h<i.numberOfChannels;h++){const g=i.getChannelData(h),y=_.getChannelData(h);for(let b=0;b<l;b++)y[b]=g[d+b]||0}i=_}M("Exportando..."),setTimeout(()=>{const a=e("#edit_export_format").val()||"wav",n=mt(i),o=a==="wav"?"audio/wav":a==="mp3"?"audio/mpeg":"audio/webm",d=new Blob([n],{type:o}),r=URL.createObjectURL(d),l=(c[m]?.name||"audio").replace(/\.[^.]+$/,"")+`_edited.${a}`,_=document.createElement("a");_.href=r,_.download=l,_.click(),URL.revokeObjectURL(r),k(),u(`${l} exportado (${et(d.size)})`,"success",2e3),w(`Exportado: ${l}`)},100)},mt=t=>{const i=t.numberOfChannels,a=t.sampleRate,n=t.length,d=i*2,r=n*d,l=44+r,_=new DataView(new ArrayBuffer(l)),h=(b,S)=>{for(let N=0;N<S.length;N++)_.setUint8(b+N,S.charCodeAt(N))};h(0,"RIFF"),_.setUint32(4,l-8,!0),h(8,"WAVE"),h(12,"fmt "),_.setUint32(16,16,!0),_.setUint16(20,1,!0),_.setUint16(22,i,!0),_.setUint32(24,a,!0),_.setUint32(28,a*d,!0),_.setUint16(32,d,!0),_.setUint16(34,16,!0),h(36,"data"),_.setUint32(40,r,!0);const g=[];for(let b=0;b<i;b++)g.push(t.getChannelData(b));let y=44;for(let b=0;b<n;b++)for(let S=0;S<i;S++){const N=Math.max(-1,Math.min(1,g[S][b]));_.setInt16(y,N*32767,!0),y+=2}return _.buffer},at=t=>{s?(e("#edit_status_sr").text(`${s.sampleRate}Hz`),e("#edit_status_ch").text(`${s.numberOfChannels}ch`),e("#edit_status_bits").text("16-bit")):(e("#edit_status_sr").text("--"),e("#edit_status_ch").text("--"),e("#edit_status_bits").text("--"))},dt=()=>{const t=A();t?.src&&(t.paused?t.play():t.pause())},Vt=()=>{const t=A();t&&(t.pause(),t.currentTime=0),e("#edit_btn_play i").attr("class","fas fa-play"),w("Detenido")},Pt=()=>{Q=!Q,e("#edit_btn_loop").toggleClass("active",Q),u(`Loop ${Q?"ON":"OFF"}`,"info",1200)},jt=()=>{const t=[.5,.75,1,1.25,1.5,2];q=t[(t.indexOf(q)+1)%t.length],A().playbackRate=q,e("#edit_btn_speed").text(`${q}x`),u(`Velocidad: ${q}x`,"info",1200)},It=()=>{const t=[0,25,50,70,100];x=t[(t.indexOf(x)+1)%t.length],A().volume=x/100,e("#edit_vol_fill").css("width",`${x}%`),e("#edit_btn_vol i").attr("class",`fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}`),u(`Volumen: ${x}%`,"info",1200)},lt=()=>X(m<c.length-1?m+1:0),ct=()=>X(m>0?m-1:c.length-1),G=()=>{const t=A();t&&(t.pause(),t.currentTime=0),Y&&cancelAnimationFrame(Y),Y=null},rt=()=>{const t=e('<input type="file" accept="audio/*" multiple style="display:none">');t.on("change",function(){this.files.length&&it(this.files),t.remove()}),e("body").append(t),t.click()},Xt=()=>{e("#edit_zone").on("dblclick",rt).on("dragover",t=>{t.preventDefault(),e("#edit_zone").addClass("dragover")}).on("dragleave",()=>e("#edit_zone").removeClass("dragover")).on("drop",t=>{t.preventDefault(),e("#edit_zone").removeClass("dragover");const i=t.originalEvent.dataTransfer?.files;i?.length&&it(i)}),e(document).on("paste.edit",wt),e(".edit_btn_add").on("click",rt),e(".edit_btn_clear").on("click",()=>{c.length&&(c.forEach(t=>URL.revokeObjectURL(t.url)),c=[],m=0,ut=1,s=null,G(),e("#edit_placeholder").removeClass("dpn"),e("#edit_waveform_wrap").addClass("dpn"),e("#edit_info").addClass("dpn"),e("#edit_cursor, #edit_selection").addClass("dpn"),E(),$(),u("Todo limpiado","success",1500),w("Listo"))}),e(".edit_btn_search").on("click",bt),e("#edit_btn_close_search").on("click",J),e("#edit_search_input").on("input",function(){gt(e(this).val())}),e(document).on("click.edit",".edit_tab",function(){Z=e(this).data("tab"),e(".edit_tab").removeClass("active"),e(this).addClass("active"),$()}),e(document).on("click.edit","#edit_btn_play",dt),e(document).on("click.edit","#edit_btn_prev",ct),e(document).on("click.edit","#edit_btn_next",lt),e(document).on("click.edit","#edit_btn_stop",Vt),e(document).on("click.edit","#edit_btn_loop",Pt),e(document).on("click.edit","#edit_btn_speed",jt),e(document).on("click.edit","#edit_btn_vol",It),e(document).on("click.edit","#edit_timeline_click",function(t){const i=A();i?.duration&&(i.currentTime=t.offsetX/e(this).width()*i.duration)}),e(document).on("click.edit","#edit_vol_click",function(t){x=Math.round(t.offsetX/e(this).width()*100),A().volume=x/100,e("#edit_vol_fill").css("width",`${x}%`),e("#edit_btn_vol i").attr("class",`fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}`)}),e(document).on("mousedown.edit","#edit_canvas",function(t){yt(t)}),e(document).on("mousemove.edit",function(t){Ct(t)}),e(document).on("mouseup.edit",function(){$t()}),e(document).on("click.edit",".edit_file_item",function(){X(parseInt(e(this).data("i")))}),e(document).on("click.edit",".edit_file_del",function(t){t.stopPropagation();const i=parseInt(e(this).data("i"));URL.revokeObjectURL(c[i].url),c.splice(i,1),c.length?i===m?X(Math.min(i,c.length-1)):i<m&&m--:(G(),s=null,e("#edit_placeholder").removeClass("dpn"),e("#edit_waveform_wrap").addClass("dpn"),e("#edit_info").addClass("dpn")),E()}),e(document).on("input.edit","#edit_gain",function(){V=parseInt(e(this).val()),e("#edit_gain_val").text(`${V}%`)}),e(document).on("input.edit","#edit_fadein",function(){P=parseFloat(e(this).val()),e("#edit_fadein_val").text(`${P}s`)}),e(document).on("input.edit","#edit_fadeout",function(){j=parseFloat(e(this).val()),e("#edit_fadeout_val").text(`${j}s`)}),e(document).on("click.edit","#edit_apply_vol",Tt),e(document).on("click.edit","#edit_normalize",Ot),e(document).on("click.edit","#edit_reset_vol",()=>{V=100,P=0,j=0,$(),u("Reset","info",1e3)}),e(document).on("input.edit",".edit_eq_slider",function(){const t=parseInt(e(this).data("band")),i=parseFloat(e(this).val());W(t,i),e(`#edit_eq_v${t}`).text(`${i>0?"+":""}${i}dB`)}),e(document).on("click.edit","#edit_eq_flat",()=>{D.forEach((t,i)=>{t.gain=0,W(i,0)}),$(),u("EQ Flat","info",1e3)}),e(document).on("click.edit","#edit_eq_bass",()=>{const t=[8,5,2,0,-1,-2];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Bass Boost","info",1e3)}),e(document).on("click.edit","#edit_eq_vocal",()=>{const t=[-2,-1,3,5,3,0];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Vocal Preset","info",1e3)}),e(document).on("click.edit","#edit_eq_treble",()=>{const t=[-2,-1,0,2,5,8];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Treble Boost","info",1e3)}),e(document).on("click.edit","#edit_fx_reverse",Ut),e(document).on("click.edit","#edit_fx_speed_up",()=>st(1.5)),e(document).on("click.edit","#edit_fx_slow",()=>st(.75)),e(document).on("click.edit","#edit_fx_mono",qt),e(document).on("click.edit","#edit_fx_silence",zt),e(document).on("click.edit","#edit_fx_undo",Lt),e(document).on("input.edit","#edit_trim_start",function(){p=parseFloat(e(this).val()),e("#edit_trim_s_val").text(I(p)),K()}),e(document).on("input.edit","#edit_trim_end",function(){f=parseFloat(e(this).val()),e("#edit_trim_e_val").text(I(f)),K()}),e(document).on("click.edit","#edit_trim_keep",Ft),e(document).on("click.edit","#edit_trim_delete",nt),e(document).on("click.edit","#edit_trim_all",()=>{s&&(p=0,f=s.duration,K(),$())}),e(document).on("click.edit","#edit_export_btn",()=>ot(!1)),e(document).on("click.edit","#edit_export_sel",()=>ot(!0)),e(document).on("keydown.edit",t=>{if(H){t.key==="Escape"&&J();return}c.length&&([" ","ArrowLeft","ArrowRight"].includes(t.key)&&t.preventDefault(),t.key===" "&&dt(),t.key==="ArrowLeft"&&ct(),t.key==="ArrowRight"&&lt(),t.key==="Delete"&&s&&nt())}),E(),console.log("✅ Editor cargado")},Gt=()=>{G(),pt(),c.forEach(t=>URL.revokeObjectURL(t.url)),c=[],s=null,v&&(v.close(),v=null,L=null,R=null),T=[],e("#edit_zone, .edit_btn_add, .edit_btn_clear, .edit_btn_search, #edit_btn_close_search, #edit_search_input").off(),e(document).off(".edit"),console.log("🧹 Editor limpiado")};export{Gt as cleanup,Xt as init,Kt as render};
