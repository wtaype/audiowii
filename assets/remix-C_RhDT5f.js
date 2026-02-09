import{j as s}from"./vendor-gzd0YkcT.js";import{c as S,N as x}from"./main-5IiVjqnD.js";import"./main-DjxYjmcZ.js";import"./firebase-BVkF6YOI.js";const W=()=>`
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
`;let r=null,_=null,v=null,n={a:{audio:null,source:null,gainNode:null,eqLow:null,eqMid:null,eqHigh:null,loaded:!1},b:{audio:null,source:null,gainNode:null,eqLow:null,eqMid:null,eqHigh:null,loaded:!1}},b=null,o=null,g=null;const y=(i=0)=>`${String(Math.floor(i/60)).padStart(2,"0")}:${String(Math.floor(i%60)).padStart(2,"0")}`,M=()=>{r||(r=new(window.AudioContext||window.webkitAudioContext),_=r.createGain(),_.gain.value=.7,v=r.createAnalyser(),v.fftSize=256,_.connect(v),v.connect(r.destination),F()),r.state==="suspended"&&r.resume()},h=(i,e)=>{if(!e||!e.type.startsWith("audio/"))return x("Formato de audio no válido","error",2e3);M();const a=n[i],t=s(`#remi_audio_${i}`)[0];if(a.source)try{a.source.disconnect()}catch{}const l=URL.createObjectURL(e);t.src=l,t.load(),t.onloadedmetadata=()=>{a.source=r.createMediaElementSource(t),a.gainNode=r.createGain(),a.gainNode.gain.value=.8,a.eqLow=r.createBiquadFilter(),a.eqLow.type="lowshelf",a.eqLow.frequency.value=250,a.eqLow.gain.value=0,a.eqMid=r.createBiquadFilter(),a.eqMid.type="peaking",a.eqMid.frequency.value=1500,a.eqMid.Q.value=1,a.eqMid.gain.value=0,a.eqHigh=r.createBiquadFilter(),a.eqHigh.type="highshelf",a.eqHigh.frequency.value=4e3,a.eqHigh.gain.value=0,a.source.connect(a.eqLow),a.eqLow.connect(a.eqMid),a.eqMid.connect(a.eqHigh),a.eqHigh.connect(a.gainNode),a.gainNode.connect(_),a.audio=t,a.loaded=!0,s(`#remi_placeholder_${i}`).hide(),s(`#remi_loaded_${i}`).removeClass("dpn"),s(`#remi_name_${i}`).text(e.name),N(i),R(i),t.play().catch(()=>{}),x(`Pista ${i.toUpperCase()} cargada: ${e.name}`,"success",2e3)}},N=i=>{const e=s(`#remi_canvas_${i}`)[0];if(!e)return;const a=e.getContext("2d");e.width=e.offsetWidth*2,e.height=e.offsetHeight*2,a.scale(2,2);const t=e.offsetWidth,l=e.offsetHeight,d=i==="a"?"#00d4ff":"#ff00aa";a.fillStyle="#1a1a2e",a.fillRect(0,0,t,l);const c=a.createLinearGradient(0,0,t,0);c.addColorStop(0,d+"44"),c.addColorStop(.5,d),c.addColorStop(1,d+"44"),a.fillStyle=c;const p=l/2;for(let m=0;m<t;m++){const u=(Math.random()*.7+.3)*p*.8;a.fillRect(m,p-u/2,1,u)}},R=i=>{const e=s(`#remi_audio_${i}`)[0];e.ontimeupdate=()=>{const a=e.currentTime,t=e.duration||1;s(`#remi_time_${i}`).text(`${y(a)} / ${y(t)}`),s(`#remi_progress_${i}`).css("left",`${a/t*100}%`)}},w=(i,e)=>{const a=n[i];a.gainNode&&(a.gainNode.gain.value=e/100),s(`#remi_vol_${i}_val`).text(`${e}%`)},$=(i,e)=>{const a=n[i];a.audio&&(a.audio.playbackRate=e),s(`#remi_speed_${i}_val`).text(`${e}x`)},C=(i,e)=>{const a=n[i];if(a.audio){const t=Math.pow(2,e/12);a.audio.playbackRate=t,s(`#remi_speed_${i}`).val(t),s(`#remi_speed_${i}_val`).text(`${t.toFixed(1)}x`)}s(`#remi_pitch_${i}_val`).text(e>0?`+${e}`:e)},z=(i,e,a)=>{const t=n[i],l=e==="low"?t.eqLow:e==="mid"?t.eqMid:t.eqHigh;l&&(l.gain.value=parseFloat(a)),s(`#remi_eq_${i}_${e}_val`).text(a>0?`+${a}`:a)},L=i=>{const e=i/100,a=Math.cos(e*Math.PI/2),t=Math.sin(e*Math.PI/2);if(n.a.gainNode){const l=s("#remi_vol_a").val()/100;n.a.gainNode.gain.value=l*a}if(n.b.gainNode){const l=s("#remi_vol_b").val()/100;n.b.gainNode.gain.value=l*t}s("#remi_cf_indicator").text(i)},B=i=>{_&&(_.gain.value=i/100),s("#remi_master_val").text(`${i}%`)},F=()=>{const i=s("#remi_visualizer")[0];if(!i)return;const e=i.getContext("2d");i.width=i.offsetWidth,i.height=i.offsetHeight;const a=()=>{const t=i.width,l=i.height;if(e.fillStyle="#0f0f1e",e.fillRect(0,0,t,l),v){const d=new Uint8Array(v.frequencyBinCount);v.getByteFrequencyData(d);const c=t/d.length*2.5;let p=0;for(let m=0;m<d.length;m++){const f=d[m]/255*l,u=e.createLinearGradient(0,l-f,0,l);u.addColorStop(0,"#00d4ff"),u.addColorStop(.5,"#ff00aa"),u.addColorStop(1,"#ffaa00"),e.fillStyle=u,e.fillRect(p,l-f,c,f),p+=c+1}}g=requestAnimationFrame(a)};a()},H=i=>{if(b===i){if(b=null,o){try{o.disconnect()}catch{}o=null}s("#remi_fx_amount_box").addClass("dpn"),s(".remix_fx_btn").removeClass("active"),x(`Efecto ${i} desactivado`,"info",1500),E()}else b=i,T(i),s("#remi_fx_amount_box").removeClass("dpn"),s("#remi_fx_name").text(i.toUpperCase()),s(".remix_fx_btn").removeClass("active"),s(`#remi_fx_${i}`).addClass("active"),x(`Efecto ${i} activado`,"success",1500)},T=i=>{if(o)try{o.disconnect()}catch{}switch(i){case"echo":const e=r.createDelay();e.delayTime.value=.3;const a=r.createGain();a.gain.value=.5,e.connect(a),a.connect(e),o=e;break;case"reverb":r.createConvolver(),o=r.createGain(),o.gain.value=.5;break;case"filter":const t=r.createBiquadFilter();t.type="lowpass",t.frequency.value=2e3,o=t;break;case"distortion":const l=r.createWaveShaper(),d=new Float32Array(256);for(let c=0;c<256;c++)d[c]=Math.tanh(c/128-1);l.curve=d,o=l;break}E()},E=()=>{["a","b"].forEach(i=>{const e=n[i];if(e.gainNode){try{e.gainNode.disconnect()}catch{}o?(e.gainNode.connect(o),o.connect(_)):e.gainNode.connect(_)}})},A=()=>{["a","b"].forEach(i=>{const e=n[i];e.loaded&&e.audio&&e.audio.play().catch(()=>{})})},k=()=>{["a","b"].forEach(i=>{const e=n[i];e.loaded&&e.audio&&e.audio.pause()})},q=()=>{["a","b"].forEach(i=>{const e=n[i];e.loaded&&e.audio&&(e.audio.pause(),e.audio.currentTime=0)})},U=()=>{console.log(`✅ Remix de ${S} cargado`),M(),s("#remi_btn_a").on("click",()=>s("#remi_file_a").click()),s("#remi_file_a").on("change",function(){this.files[0]&&h("a",this.files[0])}),s("#remi_btn_b").on("click",()=>s("#remi_file_b").click()),s("#remi_file_b").on("change",function(){this.files[0]&&h("b",this.files[0])}),["a","b"].forEach(i=>{s(`#remi_placeholder_${i}, #remi_wave_${i}`).on("dragover",e=>{e.preventDefault(),e.stopPropagation()}).on("drop",e=>{e.preventDefault(),e.stopPropagation();const a=e.originalEvent.dataTransfer.files[0];a&&h(i,a)})}),s("#remi_vol_a").on("input",function(){w("a",s(this).val())}),s("#remi_speed_a").on("input",function(){$("a",s(this).val())}),s("#remi_pitch_a").on("input",function(){C("a",s(this).val())}),s("#remi_vol_b").on("input",function(){w("b",s(this).val())}),s("#remi_speed_b").on("input",function(){$("b",s(this).val())}),s("#remi_pitch_b").on("input",function(){C("b",s(this).val())}),s(".remix_eq_slider").on("input",function(){const i=s(this).data("deck"),e=s(this).data("band");z(i,e,s(this).val())}),s("#remi_crossfader").on("input",function(){L(s(this).val())}),s("#remi_master").on("input",function(){B(s(this).val())}),s(".remix_fx_btn").on("click",function(){H(s(this).data("fx"))}),s("#remi_play_all").on("click",A),s("#remi_pause_all").on("click",k),s("#remi_stop_all").on("click",q),s(document).on("keydown.remix",i=>{i.key===" "&&(i.preventDefault(),A()),i.key==="p"&&k(),i.key==="s"&&q()})},I=()=>{console.log("🧹 Remix limpiado"),g&&cancelAnimationFrame(g),q(),["a","b"].forEach(i=>{const e=n[i];if(e.source)try{e.source.disconnect()}catch{}e.audio&&(e.audio.pause(),e.audio.src="")}),r&&(r.close(),r=null),s(document).off(".remix"),s("#remi_btn_a, #remi_btn_b, #remi_file_a, #remi_file_b, #remi_vol_a, #remi_vol_b, #remi_speed_a, #remi_speed_b, #remi_pitch_a, #remi_pitch_b, #remi_crossfader, #remi_master, .remix_fx_btn, #remi_play_all, #remi_pause_all, #remi_stop_all").off()};export{I as cleanup,U as init,W as render};
