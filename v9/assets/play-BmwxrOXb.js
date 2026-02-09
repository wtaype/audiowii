import{j as e}from"./vendor-gzd0YkcT.js";import{N as c}from"./main-CBgI6W7o.js";import"./main-Dh61suKo.js";import"./firebase-BVkF6YOI.js";const G=()=>`
  <div class="wi_play">
    <div class="play_layout">
      <div class="play_left">
        <div class="play_zone" id="play_zone">
          <div class="play_placeholder">
            <i class="fas fa-headphones"></i>
            <h2>Arrastra tus audios aquí</h2>
          </div>
          <div class="play_player dpn">
            <div class="play_visualizer">
              <canvas id="play_canvas"></canvas>
              <div class="play_overlay">
                <div class="play_cover"><i class="fas fa-music"></i></div>
                <div class="play_overlay_info">
                  <div class="play_overlay_name" id="play_overlay_name"></div>
                  <div class="play_overlay_stats" id="play_overlay_stats"></div>
                </div>
              </div>
            </div>
            <audio id="play_audio"></audio>
          </div>
        </div>
        <div class="play_info dpn" id="play_info">
          <div class="play_info_top">
            <div class="play_info_left">
              <span class="play_name" id="play_name"></span>
              <span class="play_details" id="play_details"></span>
            </div>
          </div>
          <div class="play_timeline" id="play_timeline">
            <span class="play_time_current" id="play_time_current">00:00</span>
            <div class="play_timeline_container" id="play_timeline_click">
              <div class="play_timeline_bg"><div class="play_timeline_fill" id="play_timeline_fill"></div></div>
            </div>
            <span class="play_time_total" id="play_time_total">00:00</span>
          </div>
          <div class="play_controls" id="play_controls"></div>
        </div>
      </div>

      <div class="play_right">
        <div class="play_gallery_header" id="play_header">
          <h3><i class="fas fa-music"></i> Audios (<span id="play_count">0</span>)</h3>
          <div class="play_gallery_actions">
            <button class="play_btn_icon play_btn_add" title="Agregar"><i class="fas fa-folder-open"></i></button>
            <button class="play_btn_icon play_btn_clear" title="Limpiar"><i class="fas fa-trash"></i></button>
            <button class="play_btn_icon play_btn_search" title="Buscar"><i class="fas fa-search"></i></button>
          </div>
        </div>
        <div class="play_search_bar dpn" id="play_search_bar">
          <i class="fas fa-search play_search_icon"></i>
          <input type="text" id="play_search_input" placeholder="Buscar audios..." autocomplete="off">
          <button class="play_btn_close_search" id="play_btn_close_search"><i class="fas fa-times"></i></button>
          <div class="play_search_results" id="play_search_results">0 de 0</div>
        </div>
        <div class="play_gallery" id="play_gallery"></div>
      </div>
    </div>
  </div>
`,a={files:[],idx:0,pasteN:1,looping:!1,speed:1,vol:70,searchQ:"",searching:!1,actx:null,analyser:null,dataArr:null,srcNode:null,rafId:null},z=["audio/mp3","audio/mpeg","audio/wav","audio/m4a","audio/ogg","audio/aac","audio/flac","audio/webm"],h=[.5,.75,1,1.25,1.5,2,3],m=[0,25,50,70,100],R=l=>l.type.startsWith("audio/")||z.includes(l.type),C=l=>l?`${(l/1024**Math.floor(Math.log(l)/Math.log(1024))).toFixed(1)} ${["B","KB","MB"][Math.floor(Math.log(l)/Math.log(1024))]}`:"0 B",f=(l=0)=>`${String(Math.floor(l/60)).padStart(2,"0")}:${String(Math.floor(l%60)).padStart(2,"0")}`,d=()=>e("#play_audio")[0],S=()=>a.searchQ?a.files.filter(l=>l.name.toLowerCase().includes(a.searchQ)):a.files,E=()=>{a.searching=!a.searching,a.searching?(e("#play_header").addClass("dpn"),e("#play_search_bar").removeClass("dpn"),setTimeout(()=>e("#play_search_input").focus(),100)):g()},g=()=>{a.searching=!1,e("#play_search_bar").addClass("dpn"),e("#play_header").removeClass("dpn"),e("#play_search_input").val(""),a.searchQ="",r()},I=l=>{a.searchQ=l.toLowerCase().trim(),r();const t=S();e("#play_search_results").text(`${t.length} de ${a.files.length}`)},x=(l,t=!1)=>{const s=Array.from(l).filter(i=>R(i)?!0:(c(`${i.name} no es audio`,"error",2e3),!1));if(!s.length)return;const n=a.files.length;s.forEach(i=>{const p=URL.createObjectURL(i),_={id:Date.now()+Math.random(),name:t?`Audio_${a.pasteN++}.mp3`:i.name,format:i.type,size:i.size,url:p,isPasted:t,duration:0},o=new Audio;o.preload="metadata",o.onloadedmetadata=()=>{_.duration=o.duration,r(),o.src=""},o.onerror=()=>o.src="",o.src=p,a.files.push(_)}),c(t?"Audio pegado":`${s.length} audio(s) agregado(s)`,"success",1500),r(),(t||n===0)&&y(t?a.files.length-1:0)},F=l=>{const t=l.originalEvent?.clipboardData?.items;if(t){for(let s=0;s<t.length;s++)if(t[s].type.startsWith("audio/")){const n=t[s].getAsFile();if(n){x([n],!0),e("#play_zone").addClass("paste_flash"),setTimeout(()=>e("#play_zone").removeClass("paste_flash"),300);return}}t.length&&c("No se detectó audio en portapapeles","warning",2e3)}},r=()=>{const l=e("#play_gallery"),t=S();if(e("#play_count").text(a.files.length),!a.files.length){l.html('<div class="play_gallery_empty"><i class="fas fa-folder-open"></i><p>Sin audios</p></div>');return}if(!t.length&&a.searchQ){l.html('<div class="play_gallery_empty"><i class="fas fa-search"></i><p>Sin resultados</p></div>');return}l.html(t.map(s=>{const n=a.files.indexOf(s),i=a.searchQ?s.name.replace(new RegExp(`(${a.searchQ})`,"gi"),"<mark>$1</mark>"):s.name;return`
      <div class="play_gallery_item ${n===a.idx?"active":""}" data-i="${n}">
        <div class="play_item_preview"><i class="fas fa-music"></i></div>
        <div class="play_item_info">
          <span class="play_item_name">${i}</span>
          <span class="play_item_details">${C(s.size)}${s.duration?` • ${f(s.duration)}`:""}</span>
        </div>
        <span class="play_type_badge"><i class="fas fa-music"></i></span>
        ${s.isPasted?'<span class="play_paste_badge"><i class="fas fa-paste"></i></span>':""}
        <button class="play_btn_del" data-i="${n}"><i class="fas fa-times"></i></button>
      </div>`}).join(""))},M=l=>{const t=e("#play_canvas")[0];if(!t)return;const s=t.getContext("2d");t.width=t.offsetWidth,t.height=t.offsetHeight,a.actx||(a.actx=new(window.AudioContext||window.webkitAudioContext)),a.actx.state==="suspended"&&a.actx.resume(),a.srcNode||(a.srcNode=a.actx.createMediaElementSource(l),a.analyser=a.actx.createAnalyser(),a.analyser.fftSize=256,a.srcNode.connect(a.analyser),a.analyser.connect(a.actx.destination),a.dataArr=new Uint8Array(a.analyser.frequencyBinCount)),a.rafId&&cancelAnimationFrame(a.rafId);const n=()=>{if(a.rafId=requestAnimationFrame(n),!a.analyser||!a.dataArr)return;a.analyser.getByteFrequencyData(a.dataArr);const i=getComputedStyle(document.documentElement);s.fillStyle=i.getPropertyValue("--bg3"),s.fillRect(0,0,t.width,t.height);const p=t.width/a.dataArr.length*2.5;let _=0;for(let o=0;o<a.dataArr.length;o++){const u=a.dataArr[o]/255*t.height,v=s.createLinearGradient(0,t.height,0,t.height-u);v.addColorStop(0,i.getPropertyValue("--mco")),v.addColorStop(1,i.getPropertyValue("--bg2")),s.fillStyle=v,s.fillRect(_,t.height-u,p,u),_+=p+1}};n()},y=l=>{if(l<0||l>=a.files.length)return;a.idx=l;const t=a.files[l],s=d();e(".play_placeholder").addClass("dpn"),e(".play_player, #play_info").removeClass("dpn"),w(),s.src=t.url,s.load(),s.volume=a.vol/100,s.playbackRate=a.speed,s.play().catch(()=>{}),e("#play_name, #play_overlay_name").text(t.name),e("#play_details, #play_overlay_stats").text(`${C(t.size)} • ${f(t.duration)}`),M(s),s.ontimeupdate=()=>{e("#play_time_current").text(f(s.currentTime)),e("#play_timeline_fill").css("width",`${s.currentTime/s.duration*100}%`),e("#play_time_total").text(f(s.duration))},s.onplay=()=>{e("#play_btn_play i").attr("class","fas fa-pause"),e(".play_cover").addClass("spinning")},s.onpause=()=>{e("#play_btn_play i").attr("class","fas fa-play"),e(".play_cover").removeClass("spinning")},s.onended=()=>a.looping?(s.currentTime=0,s.play()):b(),r(),T()},T=()=>{const l=a.vol===0?"fa-volume-mute":a.vol<50?"fa-volume-down":"fa-volume-up";e("#play_controls").html(`
    <button class="play_btn_ctrl" id="play_btn_prev"><i class="fas fa-step-backward"></i></button>
    <button class="play_btn_ctrl" id="play_btn_play"><i class="fas fa-pause"></i></button>
    <button class="play_btn_ctrl" id="play_btn_next"><i class="fas fa-step-forward"></i></button>
    <button class="play_btn_ctrl ${a.looping?"active":""}" id="play_btn_loop"><i class="fas fa-redo"></i></button>
    <button class="play_btn_ctrl" id="play_btn_speed">${a.speed}x</button>
    <div class="play_vol_control">
      <button class="play_btn_ctrl" id="play_btn_vol"><i class="fas ${l}"></i></button>
      <div class="play_vol_container" id="play_vol_click">
        <div class="play_vol_bg"><div class="play_vol_fill" id="play_vol_fill"></div></div>
      </div>
    </div>
    <button class="play_btn_ctrl" id="play_btn_download"><i class="fas fa-download"></i></button>
  `),setTimeout(()=>e("#play_vol_fill").css("width",`${a.vol}%`),10)},k=()=>{const l=d();l?.src&&(l.paused?l.play():l.pause())},N=()=>{a.looping=!a.looping,e("#play_btn_loop").toggleClass("active",a.looping),c(`Loop ${a.looping?"ON":"OFF"}`,"info",1200)},O=()=>{const l=(h.indexOf(a.speed)+1)%h.length;a.speed=h[l],d().playbackRate=a.speed,e("#play_btn_speed").text(`${a.speed}x`),c(`Velocidad: ${a.speed}x`,"info",1200)},P=()=>{const l=(m.indexOf(a.vol)+1)%m.length;a.vol=m[l],L(),c(`Volumen: ${a.vol}%`,"info",1200)},L=()=>{const l=d();l.volume=a.vol/100,e("#play_vol_fill").css("width",`${a.vol}%`);const t=a.vol===0?"fa-volume-mute":a.vol<50?"fa-volume-down":"fa-volume-up";e("#play_btn_vol i").attr("class",`fas ${t}`)},U=()=>{if(!a.files.length)return;const l=a.files[a.idx],t=document.createElement("a");t.href=l.url,t.download=l.name,t.click(),c(`${l.name} descargado`,"success",1500)},b=()=>y(a.idx<a.files.length-1?a.idx+1:0),$=()=>y(a.idx>0?a.idx-1:a.files.length-1),w=()=>{const l=d();l?.src&&(l.pause(),l.currentTime=0),a.rafId&&(cancelAnimationFrame(a.rafId),a.rafId=null)},A=()=>{const l=e('<input type="file" accept="audio/*" multiple style="display:none">');l.on("change",function(){this.files.length&&x(this.files),l.remove()}),e("body").append(l),l.click()},Q=()=>{a.files.length&&(a.files.forEach(l=>URL.revokeObjectURL(l.url)),a.files=[],a.idx=0,a.pasteN=1,w(),e(".play_placeholder").removeClass("dpn"),e(".play_player, #play_info").addClass("dpn"),r(),c("Todo limpiado","success",1500))},V=l=>{l<0||l>=a.files.length||(URL.revokeObjectURL(a.files[l].url),a.files.splice(l,1),a.files.length?l===a.idx?y(Math.min(l,a.files.length-1)):l<a.idx&&a.idx--:(w(),e(".play_placeholder").removeClass("dpn"),e(".play_player, #play_info").addClass("dpn")),r())},B=()=>{e("#play_zone").on("dblclick",A).on("dragover",l=>{l.preventDefault(),e("#play_zone").addClass("dragover")}).on("dragleave",()=>e("#play_zone").removeClass("dragover")).on("drop",l=>{l.preventDefault(),e("#play_zone").removeClass("dragover");const t=l.originalEvent.dataTransfer?.files;t?.length&&x(t)}),e(document).on("paste.play",F),e(".play_btn_add").on("click",A),e(".play_btn_clear").on("click",Q),e(".play_btn_search").on("click",E),e("#play_btn_close_search").on("click",g),e("#play_search_input").on("input",function(){I(e(this).val())}),e(document).on("click.play","#play_btn_play",k),e(document).on("click.play","#play_btn_prev",$),e(document).on("click.play","#play_btn_next",b),e(document).on("click.play","#play_btn_loop",N),e(document).on("click.play","#play_btn_speed",O),e(document).on("click.play","#play_btn_vol",P),e(document).on("click.play","#play_btn_download",U),e(document).on("click.play","#play_timeline_click",function(l){const t=d();t?.duration&&(t.currentTime=l.offsetX/e(this).width()*t.duration)}),e(document).on("click.play","#play_vol_click",function(l){a.vol=Math.round(l.offsetX/e(this).width()*100),L()}),e(document).on("click.play",".play_gallery_item",function(){y(parseInt(e(this).data("i")))}),e(document).on("click.play",".play_btn_del",function(l){l.stopPropagation(),V(parseInt(e(this).data("i")))}),e(document).on("keydown.play",l=>{if(a.searching){l.key==="Escape"&&g();return}a.files.length&&([" ","ArrowLeft","ArrowRight"].includes(l.key)&&l.preventDefault(),l.key===" "&&k(),l.key==="ArrowLeft"&&$(),l.key==="ArrowRight"&&b())})},X=()=>{B(),console.log("✅ Play cargado")},H=()=>{e(document).off(".play"),a.files.forEach(l=>URL.revokeObjectURL(l.url)),a.rafId&&cancelAnimationFrame(a.rafId),a.actx&&a.actx.close()};export{H as cleanup,X as init,G as render};
