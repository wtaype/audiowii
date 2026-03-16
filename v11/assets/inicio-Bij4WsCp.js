import{a as l,$ as o,d as f,w as p,r as h,S as m}from"./main-DlsaqR2-.js";const _=["🎵 Reproductor con Ecualizador","🎚️ Editor de Audio HD","🔄 Conversor Universal","✨ Remix Profesional","🎧 Extractor de Audio","📋 PlayLists Inteligentes"],g=[[8,"Herramientas Pro"],[15,"Formatos Audio"],[100,"Privacidad Total"]],$=[["fa-play-circle","Reproductor Pro"],["fa-sliders-h","Editor de Audio"],["fa-exchange-alt","Conversor"],["fa-magic","Remix & Mezcla"]],y=[["fa-play-circle","Play","Reproduce con controles avanzados y ecualizador profesional.","/play","🎵"],["fa-bolt","PlayList","Organiza tus colecciones de música, podcasts y audiolibros.","/playlist","📋"],["fa-sliders-h","Editar","Ajusta volumen, ecualización y normaliza tus archivos.","/editar","🎚️"],["fa-exchange-alt","Convertir","MP3, WAV, OGG, M4A, FLAC y más de 15 formatos.","/convertir","🔄"],["fa-magic","Remix","Mezcla pistas, aplica efectos y crea remixes.","/remix","✨"],["fa-globe","Online","Radios online, podcasts y streaming directo.","/online","🌐"],["fa-file-audio","Extraer","Extrae audio de videos y separa voces.","/extraer","🎧"],["fa-info-circle","Acerca","Historia y tecnología detrás de AudioWii.","/acerca","ℹ️"]],v=[["fa-upload","Sube tu Audio","Arrastra o selecciona archivos MP3, WAV, OGG, M4A y más"],["fa-sliders-h","Edita y Procesa","Ajusta volumen, efectos, formato y calidad profesional"],["fa-download","Descarga al Instante","Obtén tu archivo procesado en segundos, sin marcas de agua"]],A=[["fa-user-tie","Perfecto para convertir mis audiolibros. Rápido y sin pérdida de calidad. ¡Increíble!","Laura M.","Podcaster","⭐⭐⭐⭐⭐"],["fa-user-astronaut","La mejor herramienta de audio online. El editor es profesional y fácil de usar.","Diego R.","Productor Musical","⭐⭐⭐⭐⭐"],["fa-user-ninja","Uso AudioWii diariamente para mis playlists. Super intuitiva y potente.","Sofia G.","DJ Profesional","⭐⭐⭐⭐"]],b=[["fa-server","Procesamiento Local","Tus archivos nunca salen de tu dispositivo. Privacidad absoluta"],["fa-bolt","Velocidad Extrema","Motor optimizado, hasta 5x más rápido que herramientas tradicionales"],["fa-shield-alt","100% Gratis","Sin marcas de agua, sin límites de tamaño, sin registro obligatorio"],["fa-music","Calidad Profesional","Hasta 320kbps, configura bitrate, samplerate y metadatos"],["fa-cloud","PWA Ready","Instálalo como app nativa en cualquier dispositivo"]],r=(a,s)=>`<div class="sec_head"><h2><i class="fas ${a}"></i> ${s}</h2><div class="sec_line"></div></div>`,S=()=>`<div class="inicio">
  <section class="hero">
    <div class="hero_txt">
      <div class="hero_badge"><i class="fas fa-headphones"></i> ${m()}Audiófilo!</div>
      <h1>Tu Plataforma de <span class="gradiente">Audio</span> Profesional</h1>
      <div class="hero_roles">${_.map((a,s)=>`<span class="role${s?"":" active"}">${a}</span>`).join("")}</div>
      <p class="hero_sub">Reproduce, convierte, edita y optimiza archivos de audio. Herramientas profesionales, 100% gratis y privadas 🎧</p>
      <div class="hero_btns">
        <a href="/play" class="btn_pri wi_nav"><i class="fas fa-play-circle"></i><span>Reproducir Ahora</span></a>
        <a href="#herramientas" class="btn_sec wi_scroll"><i class="fas fa-th-large"></i><span>Ver Herramientas</span></a>
      </div>
      <div class="hero_stats">${g.map(([a,s])=>`<div class="hstat"><div class="hstat_n" data-target="${a}">0</div><div class="hstat_l">${s}</div></div>`).join("")}</div>
    </div>
    <div class="hero_visual">
      <span class="img_inicio"></span>
      ${$.map(([a,s],i)=>`
        <div class="inicio_floating_icon inicio_icon${i+1}" ${f(s)}>
          <i class="fas ${a}"></i>
        </div>`).join("")}
    </div>
  </section>

  <section class="sec_tools" id="herramientas">
    ${r("fa-th-large","Suite Completa de Herramientas")}
    <p class="sec_desc">Todo lo que necesitas para gestionar tu audio profesional</p>
    <div class="tools_grid">${y.map(([a,s,i,e,t])=>`
      <a class="tool_card wi_nav" href="${e}">
        <div class="tool_top"><span class="tool_emoji">${t}</span><div class="tool_ico"><i class="fas ${a}"></i></div></div>
        <h3>${s}</h3>
        <p>${i}</p>
        <span class="tool_go"><i class="fas fa-arrow-right"></i> Explorar</span>
      </a>`).join("")}</div>
  </section>

  <section class="sec_test">
    ${r("fa-comments","Lo que dicen nuestros usuarios")}
    <p class="sec_desc">Audiófilos que confían en <strong>${l}</strong></p>
    <div class="test_grid">${A.map(([a,s,i,e,t])=>`
      <div class="test_card">
        <div class="test_avatar"><i class="fas ${a}"></i></div>
        <div class="test_stars">${t}</div>
        <p>"${s}"</p>
        <div class="test_a"><strong>${i}</strong><span>${e}</span></div>
      </div>`).join("")}</div>
  </section>

  <section class="sec_pasos">
    ${r("fa-lightbulb","¿Cómo funciona?")}
    <div class="pasos_row">${v.map(([a,s,i],e)=>`
      <div class="paso">
        <div class="paso_n">${e+1}</div>
        <div class="paso_ico"><i class="fas ${a}"></i></div>
        <h3>${s}</h3>
        <p>${i}</p>
      </div>${e<v.length-1?'<div class="paso_arrow"><i class="fas fa-chevron-right"></i></div>':""}`).join("")}</div>
  </section>

  <section class="sec_feat">
    ${r("fa-sparkles",`¿Por qué elegir ${l}?`)}
    <div class="feat_grid">${b.map(([a,s,i])=>`
      <div class="feat_card"><div class="feat_ico"><i class="fas ${a}"></i></div><h3>${s}</h3><p>${i}</p></div>`).join("")}</div>
  </section>

  <section class="cta_final">
    <i class="fas fa-headphones cta_ico"></i>
    <h2>Gestiona Tu Audio Como Un Profesional</h2>
    <p>Únete a miles de usuarios que confían en <strong>${l}</strong></p>
    <a href="/play" class="cta_btn wi_nav"><i class="fas fa-play-circle"></i> Comenzar Ahora - Gratis</a>
    <div class="cta_tags"><span><i class="fas fa-check"></i> Sin registro</span><span><i class="fas fa-check"></i> 100% privado</span><span><i class="fas fa-check"></i> Sin límites</span></div>
  </section>
</div>`;let d=null,n=[];const x=()=>{f();let a=0;const s=o(".hero_roles .role");d=setInterval(()=>{s.eq(a).removeClass("active"),a=(a+1)%s.length,s.eq(a).addClass("active")},2500),n.push(p(".hero_stats",()=>{o(".hstat_n").each(function(){const i=o(this),e=+i.data("target"),t=Math.ceil(e/40);let c=0,u=setInterval(()=>{c=Math.min(c+t,e),i.text(c<e?Math.floor(c):`${e}+`),c>=e&&clearInterval(u)},30)})})),[".tool_card",".paso",".test_card",".feat_card"].forEach(i=>n.push(p(i,e=>o(e).addClass("visible"),{stagger:120}))),o(document).on("click.inicio",".wi_nav",function(i){i.preventDefault(),h.navigate(this.getAttribute("href"))}).on("click.inicio",".wi_scroll",function(i){i.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&window.scrollTo({top:e.getBoundingClientRect().top+scrollY-80,behavior:"smooth"})})},E=()=>{clearInterval(d),d=null,n.forEach(a=>a?.disconnect?.()),n=[],o(document).off(".inicio")};export{E as cleanup,x as init,S as render};
