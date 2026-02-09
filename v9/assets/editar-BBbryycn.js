import{j as e}from"./vendor-gzd0YkcT.js";import{N as u}from"./main-BrqkJLbH.js";import"./main-cJeOPTY6.js";import"./firebase-BVkF6YOI.js";const Kt=()=>`
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
`;let r=[],m=0,U=1,x=70,N=!1,F="",H=!1,Z="volume",b=null,B=null,Q=null,C=null,O=null,G=null,s=null,p=0,f=0,tt=!1,D=[{freq:60,gain:0,label:"60"},{freq:170,gain:0,label:"170"},{freq:350,gain:0,label:"350"},{freq:1e3,gain:0,label:"1K"},{freq:3500,gain:0,label:"3.5K"},{freq:1e4,gain:0,label:"10K"}],j=[],z=100,L=0,V=0;const mt=["audio/mp3","audio/mpeg","audio/wav","audio/m4a","audio/ogg","audio/aac","audio/flac","audio/webm"],vt=t=>t.type.startsWith("audio/")||mt.includes(t.type),et=t=>t?`${(t/1024**Math.floor(Math.log(t)/Math.log(1024))).toFixed(1)} ${["B","KB","MB"][Math.floor(Math.log(t)/Math.log(1024))]}`:"0 B",q=(t=0)=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`,P=(t=0)=>`${q(t)}.${String(Math.floor(t%1*10))}`,A=()=>e("#edit_audio")[0],w=t=>e("#edit_status_msg").text(t),ht=()=>{H=!H,H?(e("#edit_header").addClass("dpn"),e("#edit_search_bar").removeClass("dpn"),setTimeout(()=>e("#edit_search_input").focus(),100)):Y()},Y=()=>{H=!1,e("#edit_search_bar").addClass("dpn"),e("#edit_header").removeClass("dpn"),e("#edit_search_input").val(""),F="",R()},bt=t=>{F=t.toLowerCase().trim(),R();const i=_t();e("#edit_search_results").text(`${i.length} de ${r.length}`)},_t=()=>F?r.filter(t=>t.name.toLowerCase().includes(F)):r,it=t=>{let i=0;Array.from(t).forEach(a=>{if(!vt(a))return u(`${a.name} no es audio`,"error",2e3);const n=URL.createObjectURL(a),o={id:Date.now()+Math.random(),name:a.name,format:a.type,size:a.size,url:n,file:a,duration:0},d=document.createElement("audio");d.onloadedmetadata=()=>{o.duration=d.duration,R(),URL.revokeObjectURL(d.src)},d.src=n,r.push(o),i++}),i&&(u(`${i} audio(s) agregado(s)`,"success",1500),R(),r.length===i&&X(0))};let ut=1;const gt=t=>{const i=t.originalEvent?.clipboardData?.items;if(!i)return;let a=!1;e.each(i,(n,o)=>{if(o.type.startsWith("audio/")){const d=o.getAsFile();return d?(it([new File([d],`Audio_${ut++}.mp3`,{type:d.type})]),a=!0,e("#edit_zone").addClass("paste_flash"),setTimeout(()=>e("#edit_zone").removeClass("paste_flash"),300),!1):!0}}),!a&&i.length&&u("No se detectó audio en portapapeles","warning",2e3)},R=()=>{const t=e("#edit_gallery"),i=_t();if(e("#edit_count").text(r.length),!r.length)return t.html('<div class="edit_gallery_empty"><i class="fas fa-folder-open"></i><p>Sin archivos</p></div>');if(!i.length&&F)return t.html('<div class="edit_gallery_empty"><i class="fas fa-search"></i><p>Sin resultados</p></div>');t.html(i.map(a=>{const n=r.indexOf(a);let o=a.name;return F&&(o=a.name.replace(new RegExp(`(${F})`,"gi"),"<mark>$1</mark>")),`
      <div class="edit_file_item ${n===m?"active":""}" data-i="${n}">
        <div class="edit_file_icon"><i class="fas fa-music"></i></div>
        <div class="edit_file_info">
          <span class="edit_file_name">${o}</span>
          <span class="edit_file_meta">${et(a.size)} • ${a.format.split("/")[1]?.toUpperCase()||"AUDIO"}</span>
        </div>
        <span class="edit_file_dur">${q(a.duration)}</span>
        <button class="edit_file_del" data-i="${n}"><i class="fas fa-times"></i></button>
      </div>`}).join(""))},X=async t=>{if(t<0||t>=r.length)return;m=t;const i=r[t],a=A();e("#edit_placeholder").addClass("dpn"),e("#edit_waveform_wrap").removeClass("dpn"),e("#edit_info").removeClass("dpn"),J(),a.src=i.url,a.load(),a.volume=x/100,a.playbackRate=U,e("#edit_name, #edit_wave_name").text(i.name),e("#edit_details").text(`${et(i.size)} • ${q(i.duration)} • ${i.format.split("/")[1]?.toUpperCase()||"AUDIO"}`),$t(a),kt(),await ft(i),a.ontimeupdate=()=>{const n=a.currentTime,o=a.duration||1;e("#edit_time_current").text(q(n)),e("#edit_timeline_fill").css("width",`${n/o*100}%`),e("#edit_time_total").text(q(o)),e("#edit_wave_time").text(`${q(n)} / ${q(o)}`),wt(n,o)},a.onplay=()=>{e("#edit_btn_play i").attr("class","fas fa-pause"),w("Reproduciendo...")},a.onpause=()=>{e("#edit_btn_play i").attr("class","fas fa-play"),w("Pausado")},a.onended=()=>N?(a.currentTime=0,a.play()):w("Finalizado"),R(),Mt(),$(),at(),w("Audio cargado")},ft=async t=>{try{M("Decodificando audio..."),b||(b=new(window.AudioContext||window.webkitAudioContext));const a=await(await fetch(t.url)).arrayBuffer();s=await b.decodeAudioData(a),k(),E(),p=0,f=s.duration,w(`Decodificado: ${s.numberOfChannels}ch, ${s.sampleRate}Hz`)}catch(i){k(),s=null,u("Error al decodificar audio","error",2e3),console.error(i)}},E=()=>{if(!s||(C=e("#edit_canvas")[0],!C))return;O=C.getContext("2d"),C.width=C.offsetWidth*2,C.height=C.offsetHeight*2,O.scale(2,2);const t=C.offsetWidth,i=C.offsetHeight,a=s.getChannelData(0),n=Math.ceil(a.length/t),o=getComputedStyle(document.documentElement);O.fillStyle=o.getPropertyValue("--bg3").trim(),O.fillRect(0,0,t,i);const d=i/2;for(let c=0;c<t;c++){let l=1,_=-1;for(let h=0;h<n;h++){const S=a[c*n+h]||0;S<l&&(l=S),S>_&&(_=S)}const v=(1+l)*d,g=(1+_)*d,y=O.createLinearGradient(0,v,0,g);y.addColorStop(0,o.getPropertyValue("--info").trim()),y.addColorStop(1,o.getPropertyValue("--mco").trim()),O.fillStyle=y,O.fillRect(c,v,1,g-v||1)}},wt=(t,i)=>{const a=t/i*100;e("#edit_cursor").removeClass("dpn").css("left",`${a}%`)},xt=t=>{if(!s)return;tt=!0;const i=C.getBoundingClientRect();p=(t.clientX-i.left)/i.width*s.duration,f=p,K()},yt=t=>{if(!tt||!s)return;const i=C.getBoundingClientRect();f=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width))*s.duration,K()},Ct=()=>{tt=!1,p>f&&([p,f]=[f,p]),Math.abs(f-p)<.05&&(p=0,f=s?.duration||0,e("#edit_selection").addClass("dpn")),Z==="trim"&&$()},K=()=>{if(!s)return;const t=s.duration;let i=p,a=f;i>a&&([i,a]=[a,i]);const n=i/t*100,o=(a-i)/t*100;e("#edit_selection").removeClass("dpn").css({left:`${n}%`,width:`${o}%`}),e("#edit_sel_label").text(`${P(i)} - ${P(a)}`)},$t=t=>{C=e("#edit_canvas")[0],C&&(b||(b=new(window.AudioContext||window.webkitAudioContext)),b.state==="suspended"&&b.resume(),Q||(Q=b.createMediaElementSource(t),B=b.createAnalyser(),B.fftSize=256,Q.connect(B),B.connect(b.destination),new Uint8Array(B.frequencyBinCount)))},kt=t=>{if(b&&(St(),j=D.map(i=>{const a=b.createBiquadFilter();return a.type=i.freq<=60?"lowshelf":i.freq>=1e4?"highshelf":"peaking",a.frequency.value=i.freq,a.gain.value=i.gain,a.Q.value=1.4,a}),Q&&B)){Q.disconnect();let i=Q;j.forEach(a=>{i.connect(a),i=a}),i.connect(B),B.connect(b.destination)}},St=()=>{j.forEach(t=>{try{t.disconnect()}catch{}}),j=[]},W=(t,i)=>{D[t].gain=i,j[t]&&(j[t].gain.value=i)},M=(t="Procesando...",i=0)=>{e("#edit_processing").removeClass("dpn"),e("#edit_proc_text").text(t),e("#edit_proc_fill").css("width",`${i}%`)},k=()=>{e("#edit_processing").addClass("dpn")},Mt=()=>{e("#edit_playback").html(`
    <button class="edit_btn_ctrl" id="edit_btn_prev"><i class="fas fa-step-backward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_play"><i class="fas fa-play"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_next"><i class="fas fa-step-forward"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_stop"><i class="fas fa-stop"></i></button>
    <button class="edit_btn_ctrl ${N?"active":""}" id="edit_btn_loop"><i class="fas fa-redo"></i></button>
    <button class="edit_btn_ctrl" id="edit_btn_speed">${U}x</button>
    <div class="edit_vol_control">
      <button class="edit_btn_ctrl" id="edit_btn_vol"><i class="fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}"></i></button>
      <div class="edit_vol_container" id="edit_vol_click"><div class="edit_vol_bg"><div class="edit_vol_fill" id="edit_vol_fill"></div></div></div>
    </div>
  `),setTimeout(()=>e("#edit_vol_fill").css("width",`${x}%`),10)},$=()=>{const t=e("#edit_panel_content");if(!r.length||!s)return t.html('<div class="edit_panel_empty"><i class="fas fa-sliders-h"></i><p>Carga un audio para usar las herramientas</p></div>');switch(Z){case"volume":return Rt(t);case"eq":return At(t);case"effects":return Et(t);case"trim":return Bt(t);case"export":return Dt(t)}},Rt=t=>{t.html(`
    <div class="edit_tool">
      <div class="edit_tool_title"><i class="fas fa-volume-up"></i> Ajuste de Volumen</div>
      <div class="edit_tool_row">
        <label>Ganancia</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_gain" min="0" max="300" value="${z}" step="1">
          <span class="edit_slider_val" id="edit_gain_val">${z}%</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade In</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadein" min="0" max="10" value="${L}" step="0.1">
          <span class="edit_slider_val" id="edit_fadein_val">${L}s</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fade Out</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_fadeout" min="0" max="10" value="${V}" step="0.1">
          <span class="edit_slider_val" id="edit_fadeout_val">${V}s</span>
        </div>
      </div>
      <div class="edit_actions">
        <button class="edit_action_btn primary" id="edit_apply_vol"><i class="fas fa-check"></i> Aplicar Volumen</button>
        <button class="edit_action_btn" id="edit_normalize"><i class="fas fa-balance-scale"></i> Normalizar</button>
        <button class="edit_action_btn danger" id="edit_reset_vol"><i class="fas fa-undo"></i> Reset</button>
      </div>
    </div>
  `)},At=t=>{t.html(`
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
  `)},Et=t=>{t.html(`
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
          <span class="edit_slider_val" id="edit_trim_s_val">${P(a)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Fin</label>
        <div class="edit_slider_group">
          <input type="range" class="edit_slider" id="edit_trim_end" min="0" max="${i}" value="${n}" step="0.01">
          <span class="edit_slider_val" id="edit_trim_e_val">${P(n)}</span>
        </div>
      </div>
      <div class="edit_tool_row">
        <label>Duración selección</label>
        <span class="edit_slider_val">${P(n-a)}</span>
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
  `)},Tt=()=>{s&&(M("Aplicando volumen..."),setTimeout(()=>{const t=z/100;for(let i=0;i<s.numberOfChannels;i++){const a=s.getChannelData(i),n=s.sampleRate,o=Math.floor(L*n),d=Math.floor(V*n);for(let c=0;c<a.length;c++){let l=t;c<o&&(l*=c/o),c>a.length-d&&(l*=(a.length-c)/d),a[c]*=l}}T(),k(),E(),u("Volumen aplicado","success",1500),w("Volumen aplicado")},50))},Ot=()=>{s&&(M("Normalizando..."),setTimeout(()=>{let t=0;for(let i=0;i<s.numberOfChannels;i++){const a=s.getChannelData(i);for(let n=0;n<a.length;n++){const o=Math.abs(a[n]);o>t&&(t=o)}}if(t>0&&t!==1){const i=1/t;for(let a=0;a<s.numberOfChannels;a++){const n=s.getChannelData(a);for(let o=0;o<n.length;o++)n[o]*=i}}T(),k(),E(),u("Audio normalizado","success",1500),w("Normalizado")},50))},Ut=()=>{s&&(M("Invirtiendo..."),setTimeout(()=>{for(let t=0;t<s.numberOfChannels;t++)s.getChannelData(t).reverse();T(),k(),E(),u("Audio invertido","success",1500),w("Reversa aplicada")},50))},st=t=>{s&&(M(`Cambiando velocidad a ${t}x...`),setTimeout(()=>{const i=Math.floor(s.length/t),a=b.createBuffer(s.numberOfChannels,i,s.sampleRate);for(let n=0;n<s.numberOfChannels;n++){const o=s.getChannelData(n),d=a.getChannelData(n);for(let c=0;c<i;c++){const l=c*t,_=Math.floor(l),v=Math.min(_+1,o.length-1),g=l-_;d[c]=o[_]*(1-g)+o[v]*g}}s=a,T(),k(),E(),f=s.duration,u(`Velocidad cambiada a ${t}x`,"success",1500),w(`Speed: ${t}x`)},50))},qt=()=>{if(!s||s.numberOfChannels===1)return u("Ya es mono","info",1500);M("Convirtiendo a mono..."),setTimeout(()=>{const t=b.createBuffer(1,s.length,s.sampleRate),i=t.getChannelData(0),a=[];for(let n=0;n<s.numberOfChannels;n++)a.push(s.getChannelData(n));for(let n=0;n<s.length;n++){let o=0;a.forEach(d=>o+=d[n]),i[n]=o/a.length}s=t,T(),k(),E(),at(r[m]),u("Convertido a mono","success",1500),w("Mono")},50)},Ft=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.01)return u("Selecciona una región primero","warning",1500);M("Silenciando selección..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),o=Math.floor(i*a);for(let d=0;d<s.numberOfChannels;d++){const c=s.getChannelData(d);for(let l=n;l<o&&l<c.length;l++)c[l]=0}T(),k(),E(),u("Selección silenciada","success",1500),w("Selección silenciada")},50)},zt=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.05)return u("Selecciona una región","warning",1500);M("Recortando..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),d=Math.floor(i*a)-n,c=b.createBuffer(s.numberOfChannels,d,a);for(let l=0;l<s.numberOfChannels;l++){const _=s.getChannelData(l),v=c.getChannelData(l);for(let g=0;g<d;g++)v[g]=_[n+g]||0}s=c,p=0,f=s.duration,T(),k(),E(),e("#edit_selection").addClass("dpn"),u("Recortado","success",1500),w("Recortado"),$()},50)},nt=()=>{if(!s)return;let t=Math.min(p,f),i=Math.max(p,f);if(i-t<.05)return u("Selecciona una región","warning",1500);M("Eliminando selección..."),setTimeout(()=>{const a=s.sampleRate,n=Math.floor(t*a),o=Math.floor(i*a),d=s.length-(o-n);if(d<1)return k(),u("No puedes eliminar todo","error",1500);const c=b.createBuffer(s.numberOfChannels,d,a);for(let l=0;l<s.numberOfChannels;l++){const _=s.getChannelData(l),v=c.getChannelData(l);let g=0;for(let y=0;y<_.length;y++)(y<n||y>=o)&&(v[g++]=_[y])}s=c,p=0,f=s.duration,T(),k(),E(),e("#edit_selection").addClass("dpn"),u("Selección eliminada","success",1500),w("Selección eliminada"),$()},50)},Lt=async()=>{if(!r[m])return;const t=r[m];await ft(t),z=100,L=0,V=0,D.forEach(i=>i.gain=0),j.forEach(i=>i.gain.value=0),$(),u("Restaurado al original","success",1500),w("Restaurado")},T=()=>{if(!s||!r[m])return;const t=pt(s),i=new Blob([t],{type:"audio/wav"});URL.revokeObjectURL(r[m].url),r[m].url=URL.createObjectURL(i),r[m].size=i.size,r[m].duration=s.duration,r[m].format="audio/wav";const a=A(),n=!a.paused,o=a.currentTime;a.src=r[m].url,a.load(),n&&(a.currentTime=Math.min(o,s.duration),a.play().catch(()=>{})),at(r[m]),R()},ot=(t=!1)=>{if(!s)return;let i=s;if(t){let a=Math.min(p,f),n=Math.max(p,f);if(n-a<.05)return u("Selecciona una región","warning",1500);const o=i.sampleRate,d=Math.floor(a*o),c=Math.floor(n*o),l=c-d,_=b.createBuffer(i.numberOfChannels,l,o);for(let v=0;v<i.numberOfChannels;v++){const g=i.getChannelData(v),y=_.getChannelData(v);for(let h=0;h<l;h++)y[h]=g[d+h]||0}i=_}M("Exportando..."),setTimeout(()=>{const a=e("#edit_export_format").val()||"wav",n=pt(i),o=a==="wav"?"audio/wav":a==="mp3"?"audio/mpeg":"audio/webm",d=new Blob([n],{type:o}),c=URL.createObjectURL(d),l=(r[m]?.name||"audio").replace(/\.[^.]+$/,"")+`_edited.${a}`,_=document.createElement("a");_.href=c,_.download=l,_.click(),URL.revokeObjectURL(c),k(),u(`${l} exportado (${et(d.size)})`,"success",2e3),w(`Exportado: ${l}`)},100)},pt=t=>{const i=t.numberOfChannels,a=t.sampleRate,n=t.length,d=i*2,c=n*d,l=44+c,_=new DataView(new ArrayBuffer(l)),v=(h,S)=>{for(let I=0;I<S.length;I++)_.setUint8(h+I,S.charCodeAt(I))};v(0,"RIFF"),_.setUint32(4,l-8,!0),v(8,"WAVE"),v(12,"fmt "),_.setUint32(16,16,!0),_.setUint16(20,1,!0),_.setUint16(22,i,!0),_.setUint32(24,a,!0),_.setUint32(28,a*d,!0),_.setUint16(32,d,!0),_.setUint16(34,16,!0),v(36,"data"),_.setUint32(40,c,!0);const g=[];for(let h=0;h<i;h++)g.push(t.getChannelData(h));let y=44;for(let h=0;h<n;h++)for(let S=0;S<i;S++){const I=Math.max(-1,Math.min(1,g[S][h]));_.setInt16(y,I*32767,!0),y+=2}return _.buffer},at=t=>{s?(e("#edit_status_sr").text(`${s.sampleRate}Hz`),e("#edit_status_ch").text(`${s.numberOfChannels}ch`),e("#edit_status_bits").text("16-bit")):(e("#edit_status_sr").text("--"),e("#edit_status_ch").text("--"),e("#edit_status_bits").text("--"))},dt=()=>{const t=A();t?.src&&(t.paused?t.play():t.pause())},Vt=()=>{const t=A();t&&(t.pause(),t.currentTime=0),e("#edit_btn_play i").attr("class","fas fa-play"),w("Detenido")},Pt=()=>{N=!N,e("#edit_btn_loop").toggleClass("active",N),u(`Loop ${N?"ON":"OFF"}`,"info",1200)},jt=()=>{const t=[.5,.75,1,1.25,1.5,2];U=t[(t.indexOf(U)+1)%t.length],A().playbackRate=U,e("#edit_btn_speed").text(`${U}x`),u(`Velocidad: ${U}x`,"info",1200)},It=()=>{const t=[0,25,50,70,100];x=t[(t.indexOf(x)+1)%t.length],A().volume=x/100,e("#edit_vol_fill").css("width",`${x}%`),e("#edit_btn_vol i").attr("class",`fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}`),u(`Volumen: ${x}%`,"info",1200)},lt=()=>X(m<r.length-1?m+1:0),ct=()=>X(m>0?m-1:r.length-1),J=()=>{const t=A();t&&(t.pause(),t.currentTime=0),G&&cancelAnimationFrame(G),G=null},rt=()=>{const t=e('<input type="file" accept="audio/*" multiple style="display:none">');t.on("change",function(){this.files.length&&it(this.files),t.remove()}),e("body").append(t),t.click()},Xt=()=>{e("#edit_zone").on("dblclick",rt).on("dragover",t=>{t.preventDefault(),e("#edit_zone").addClass("dragover")}).on("dragleave",()=>e("#edit_zone").removeClass("dragover")).on("drop",t=>{t.preventDefault(),e("#edit_zone").removeClass("dragover");const i=t.originalEvent.dataTransfer?.files;i?.length&&it(i)}),e(document).on("paste.edit",gt),e(".edit_btn_add").on("click",rt),e(".edit_btn_clear").on("click",()=>{r.length&&(r.forEach(t=>URL.revokeObjectURL(t.url)),r=[],m=0,ut=1,s=null,J(),e("#edit_placeholder").removeClass("dpn"),e("#edit_waveform_wrap").addClass("dpn"),e("#edit_info").addClass("dpn"),e("#edit_cursor, #edit_selection").addClass("dpn"),R(),$(),u("Todo limpiado","success",1500),w("Listo"))}),e(".edit_btn_search").on("click",ht),e("#edit_btn_close_search").on("click",Y),e("#edit_search_input").on("input",function(){bt(e(this).val())}),e(document).on("click.edit",".edit_tab",function(){Z=e(this).data("tab"),e(".edit_tab").removeClass("active"),e(this).addClass("active"),$()}),e(document).on("click.edit","#edit_btn_play",dt),e(document).on("click.edit","#edit_btn_prev",ct),e(document).on("click.edit","#edit_btn_next",lt),e(document).on("click.edit","#edit_btn_stop",Vt),e(document).on("click.edit","#edit_btn_loop",Pt),e(document).on("click.edit","#edit_btn_speed",jt),e(document).on("click.edit","#edit_btn_vol",It),e(document).on("click.edit","#edit_timeline_click",function(t){const i=A();i?.duration&&(i.currentTime=t.offsetX/e(this).width()*i.duration)}),e(document).on("click.edit","#edit_vol_click",function(t){x=Math.round(t.offsetX/e(this).width()*100),A().volume=x/100,e("#edit_vol_fill").css("width",`${x}%`),e("#edit_btn_vol i").attr("class",`fas ${x===0?"fa-volume-mute":x<50?"fa-volume-down":"fa-volume-up"}`)}),e(document).on("mousedown.edit","#edit_canvas",function(t){xt(t)}),e(document).on("mousemove.edit",function(t){yt(t)}),e(document).on("mouseup.edit",function(){Ct()}),e(document).on("click.edit",".edit_file_item",function(){X(parseInt(e(this).data("i")))}),e(document).on("click.edit",".edit_file_del",function(t){t.stopPropagation();const i=parseInt(e(this).data("i"));URL.revokeObjectURL(r[i].url),r.splice(i,1),r.length?i===m?X(Math.min(i,r.length-1)):i<m&&m--:(J(),s=null,e("#edit_placeholder").removeClass("dpn"),e("#edit_waveform_wrap").addClass("dpn"),e("#edit_info").addClass("dpn")),R()}),e(document).on("input.edit","#edit_gain",function(){z=parseInt(e(this).val()),e("#edit_gain_val").text(`${z}%`)}),e(document).on("input.edit","#edit_fadein",function(){L=parseFloat(e(this).val()),e("#edit_fadein_val").text(`${L}s`)}),e(document).on("input.edit","#edit_fadeout",function(){V=parseFloat(e(this).val()),e("#edit_fadeout_val").text(`${V}s`)}),e(document).on("click.edit","#edit_apply_vol",Tt),e(document).on("click.edit","#edit_normalize",Ot),e(document).on("click.edit","#edit_reset_vol",()=>{z=100,L=0,V=0,$(),u("Reset","info",1e3)}),e(document).on("input.edit",".edit_eq_slider",function(){const t=parseInt(e(this).data("band")),i=parseFloat(e(this).val());W(t,i),e(`#edit_eq_v${t}`).text(`${i>0?"+":""}${i}dB`)}),e(document).on("click.edit","#edit_eq_flat",()=>{D.forEach((t,i)=>{t.gain=0,W(i,0)}),$(),u("EQ Flat","info",1e3)}),e(document).on("click.edit","#edit_eq_bass",()=>{const t=[8,5,2,0,-1,-2];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Bass Boost","info",1e3)}),e(document).on("click.edit","#edit_eq_vocal",()=>{const t=[-2,-1,3,5,3,0];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Vocal Preset","info",1e3)}),e(document).on("click.edit","#edit_eq_treble",()=>{const t=[-2,-1,0,2,5,8];D.forEach((i,a)=>{i.gain=t[a],W(a,t[a])}),$(),u("Treble Boost","info",1e3)}),e(document).on("click.edit","#edit_fx_reverse",Ut),e(document).on("click.edit","#edit_fx_speed_up",()=>st(1.5)),e(document).on("click.edit","#edit_fx_slow",()=>st(.75)),e(document).on("click.edit","#edit_fx_mono",qt),e(document).on("click.edit","#edit_fx_silence",Ft),e(document).on("click.edit","#edit_fx_undo",Lt),e(document).on("input.edit","#edit_trim_start",function(){p=parseFloat(e(this).val()),e("#edit_trim_s_val").text(P(p)),K()}),e(document).on("input.edit","#edit_trim_end",function(){f=parseFloat(e(this).val()),e("#edit_trim_e_val").text(P(f)),K()}),e(document).on("click.edit","#edit_trim_keep",zt),e(document).on("click.edit","#edit_trim_delete",nt),e(document).on("click.edit","#edit_trim_all",()=>{s&&(p=0,f=s.duration,K(),$())}),e(document).on("click.edit","#edit_export_btn",()=>ot(!1)),e(document).on("click.edit","#edit_export_sel",()=>ot(!0)),e(document).on("keydown.edit",t=>{if(H){t.key==="Escape"&&Y();return}r.length&&([" ","ArrowLeft","ArrowRight"].includes(t.key)&&t.preventDefault(),t.key===" "&&dt(),t.key==="ArrowLeft"&&ct(),t.key==="ArrowRight"&&lt(),t.key==="Delete"&&s&&nt())}),R(),console.log("✅ Editor cargado")};export{Xt as init,Kt as render};
