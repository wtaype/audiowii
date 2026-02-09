import{j as s}from"./vendor-gzd0YkcT.js";import{c as E,N as x}from"./main-BrqkJLbH.js";import"./main-cJeOPTY6.js";import"./firebase-BVkF6YOI.js";const V=()=>`
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
`;let l=null,_=null,v=null,d={a:{audio:null,source:null,gainNode:null,eqLow:null,eqMid:null,eqHigh:null,loaded:!1},b:{audio:null,source:null,gainNode:null,eqLow:null,eqMid:null,eqHigh:null,loaded:!1}},b=null,n=null;const g=(e=0)=>`${String(Math.floor(e/60)).padStart(2,"0")}:${String(Math.floor(e%60)).padStart(2,"0")}`,k=()=>{l||(l=new(window.AudioContext||window.webkitAudioContext),_=l.createGain(),_.gain.value=.7,v=l.createAnalyser(),v.fftSize=256,_.connect(v),v.connect(l.destination),B()),l.state==="suspended"&&l.resume()},h=(e,i)=>{if(!i||!i.type.startsWith("audio/"))return x("Formato de audio no válido","error",2e3);k();const a=d[e],t=s(`#remi_audio_${e}`)[0];if(a.source)try{a.source.disconnect()}catch{}const r=URL.createObjectURL(i);t.src=r,t.load(),t.onloadedmetadata=()=>{a.source=l.createMediaElementSource(t),a.gainNode=l.createGain(),a.gainNode.gain.value=.8,a.eqLow=l.createBiquadFilter(),a.eqLow.type="lowshelf",a.eqLow.frequency.value=250,a.eqLow.gain.value=0,a.eqMid=l.createBiquadFilter(),a.eqMid.type="peaking",a.eqMid.frequency.value=1500,a.eqMid.Q.value=1,a.eqMid.gain.value=0,a.eqHigh=l.createBiquadFilter(),a.eqHigh.type="highshelf",a.eqHigh.frequency.value=4e3,a.eqHigh.gain.value=0,a.source.connect(a.eqLow),a.eqLow.connect(a.eqMid),a.eqMid.connect(a.eqHigh),a.eqHigh.connect(a.gainNode),a.gainNode.connect(_),a.audio=t,a.loaded=!0,s(`#remi_placeholder_${e}`).hide(),s(`#remi_loaded_${e}`).removeClass("dpn"),s(`#remi_name_${e}`).text(i.name),S(e),N(e),t.play().catch(()=>{}),x(`Pista ${e.toUpperCase()} cargada: ${i.name}`,"success",2e3)}},S=e=>{const i=s(`#remi_canvas_${e}`)[0];if(!i)return;const a=i.getContext("2d");i.width=i.offsetWidth*2,i.height=i.offsetHeight*2,a.scale(2,2);const t=i.offsetWidth,r=i.offsetHeight,o=e==="a"?"#00d4ff":"#ff00aa";a.fillStyle="#1a1a2e",a.fillRect(0,0,t,r);const c=a.createLinearGradient(0,0,t,0);c.addColorStop(0,o+"44"),c.addColorStop(.5,o),c.addColorStop(1,o+"44"),a.fillStyle=c;const p=r/2;for(let m=0;m<t;m++){const u=(Math.random()*.7+.3)*p*.8;a.fillRect(m,p-u/2,1,u)}},N=e=>{const i=s(`#remi_audio_${e}`)[0];i.ontimeupdate=()=>{const a=i.currentTime,t=i.duration||1;s(`#remi_time_${e}`).text(`${g(a)} / ${g(t)}`),s(`#remi_progress_${e}`).css("left",`${a/t*100}%`)}},q=(e,i)=>{const a=d[e];a.gainNode&&(a.gainNode.gain.value=i/100),s(`#remi_vol_${e}_val`).text(`${i}%`)},y=(e,i)=>{const a=d[e];a.audio&&(a.audio.playbackRate=i),s(`#remi_speed_${e}_val`).text(`${i}x`)},w=(e,i)=>{const a=d[e];if(a.audio){const t=Math.pow(2,i/12);a.audio.playbackRate=t,s(`#remi_speed_${e}`).val(t),s(`#remi_speed_${e}_val`).text(`${t.toFixed(1)}x`)}s(`#remi_pitch_${e}_val`).text(i>0?`+${i}`:i)},L=(e,i,a)=>{const t=d[e],r=i==="low"?t.eqLow:i==="mid"?t.eqMid:t.eqHigh;r&&(r.gain.value=parseFloat(a)),s(`#remi_eq_${e}_${i}_val`).text(a>0?`+${a}`:a)},R=e=>{const i=e/100,a=Math.cos(i*Math.PI/2),t=Math.sin(i*Math.PI/2);if(d.a.gainNode){const r=s("#remi_vol_a").val()/100;d.a.gainNode.gain.value=r*a}if(d.b.gainNode){const r=s("#remi_vol_b").val()/100;d.b.gainNode.gain.value=r*t}s("#remi_cf_indicator").text(e)},z=e=>{_&&(_.gain.value=e/100),s("#remi_master_val").text(`${e}%`)},B=()=>{const e=s("#remi_visualizer")[0];if(!e)return;const i=e.getContext("2d");e.width=e.offsetWidth,e.height=e.offsetHeight;const a=()=>{const t=e.width,r=e.height;if(i.fillStyle="#0f0f1e",i.fillRect(0,0,t,r),v){const o=new Uint8Array(v.frequencyBinCount);v.getByteFrequencyData(o);const c=t/o.length*2.5;let p=0;for(let m=0;m<o.length;m++){const f=o[m]/255*r,u=i.createLinearGradient(0,r-f,0,r);u.addColorStop(0,"#00d4ff"),u.addColorStop(.5,"#ff00aa"),u.addColorStop(1,"#ffaa00"),i.fillStyle=u,i.fillRect(p,r-f,c,f),p+=c+1}}requestAnimationFrame(a)};a()},H=e=>{if(b===e){if(b=null,n){try{n.disconnect()}catch{}n=null}s("#remi_fx_amount_box").addClass("dpn"),s(".remix_fx_btn").removeClass("active"),x(`Efecto ${e} desactivado`,"info",1500),M()}else b=e,T(e),s("#remi_fx_amount_box").removeClass("dpn"),s("#remi_fx_name").text(e.toUpperCase()),s(".remix_fx_btn").removeClass("active"),s(`#remi_fx_${e}`).addClass("active"),x(`Efecto ${e} activado`,"success",1500)},T=e=>{if(n)try{n.disconnect()}catch{}switch(e){case"echo":const i=l.createDelay();i.delayTime.value=.3;const a=l.createGain();a.gain.value=.5,i.connect(a),a.connect(i),n=i;break;case"reverb":l.createConvolver(),n=l.createGain(),n.gain.value=.5;break;case"filter":const t=l.createBiquadFilter();t.type="lowpass",t.frequency.value=2e3,n=t;break;case"distortion":const r=l.createWaveShaper(),o=new Float32Array(256);for(let c=0;c<256;c++)o[c]=Math.tanh(c/128-1);r.curve=o,n=r;break}M()},M=()=>{["a","b"].forEach(e=>{const i=d[e];if(i.gainNode){try{i.gainNode.disconnect()}catch{}n?(i.gainNode.connect(n),n.connect(_)):i.gainNode.connect(_)}})},$=()=>{["a","b"].forEach(e=>{const i=d[e];i.loaded&&i.audio&&i.audio.play().catch(()=>{})})},C=()=>{["a","b"].forEach(e=>{const i=d[e];i.loaded&&i.audio&&i.audio.pause()})},A=()=>{["a","b"].forEach(e=>{const i=d[e];i.loaded&&i.audio&&(i.audio.pause(),i.audio.currentTime=0)})},W=()=>{console.log(`✅ Remix de ${E} cargado`),k(),s("#remi_btn_a").on("click",()=>s("#remi_file_a").click()),s("#remi_file_a").on("change",function(){this.files[0]&&h("a",this.files[0])}),s("#remi_btn_b").on("click",()=>s("#remi_file_b").click()),s("#remi_file_b").on("change",function(){this.files[0]&&h("b",this.files[0])}),["a","b"].forEach(e=>{s(`#remi_placeholder_${e}, #remi_wave_${e}`).on("dragover",i=>{i.preventDefault(),i.stopPropagation()}).on("drop",i=>{i.preventDefault(),i.stopPropagation();const a=i.originalEvent.dataTransfer.files[0];a&&h(e,a)})}),s("#remi_vol_a").on("input",function(){q("a",s(this).val())}),s("#remi_speed_a").on("input",function(){y("a",s(this).val())}),s("#remi_pitch_a").on("input",function(){w("a",s(this).val())}),s("#remi_vol_b").on("input",function(){q("b",s(this).val())}),s("#remi_speed_b").on("input",function(){y("b",s(this).val())}),s("#remi_pitch_b").on("input",function(){w("b",s(this).val())}),s(".remix_eq_slider").on("input",function(){const e=s(this).data("deck"),i=s(this).data("band");L(e,i,s(this).val())}),s("#remi_crossfader").on("input",function(){R(s(this).val())}),s("#remi_master").on("input",function(){z(s(this).val())}),s(".remix_fx_btn").on("click",function(){H(s(this).data("fx"))}),s("#remi_play_all").on("click",$),s("#remi_pause_all").on("click",C),s("#remi_stop_all").on("click",A),s(document).on("keydown.remix",e=>{e.key===" "&&(e.preventDefault(),$()),e.key==="p"&&C(),e.key==="s"&&A()})};export{W as init,V as render};
