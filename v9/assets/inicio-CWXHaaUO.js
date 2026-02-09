import{j as e}from"./vendor-gzd0YkcT.js";import{c,v as u,b as d,a as p,f as l,S as m}from"./main-CBgI6W7o.js";import"./main-Dh61suKo.js";import"./firebase-BVkF6YOI.js";const _=[{icon:"fa-play-circle",title:"Play",desc:"Reproduce tus audios favoritos con controles avanzados y ecualizador profesional.",color:"--success",link:"/play",emoji:"🎵",tooltip:"Reproductor de audio con visualización"},{icon:"fa-bolt",title:"PlayList",desc:"Organiza y gestiona tus colecciones de música, podcasts y audiolibros fácilmente.",color:"--Mora",link:"/playlist",emoji:"📋",tooltip:"Crea listas de reproducción personalizadas"},{icon:"fa-sliders-h",title:"Editar",desc:"Ajusta volumen, ecualización, efectos y normaliza tus archivos de audio.",color:"--info",link:"/editar",emoji:"🎚️",tooltip:"Editor de audio con efectos profesionales"},{icon:"fa-exchange-alt",title:"Convertir",desc:"Transforma entre MP3, WAV, OGG, M4A, FLAC y más de 15 formatos de audio.",color:"--warning",link:"/convertir",emoji:"🔄",tooltip:"Conversor universal de formatos"},{icon:"fa-magic",title:"Remix",desc:"Mezcla pistas, ajusta BPM, aplica efectos y crea remixes profesionales.",color:"--Dulce",link:"/remix",emoji:"✨",tooltip:"Herramienta de mezcla y remix"},{icon:"fa-globe",title:"Online",desc:"Accede a radios online, podcasts y plataformas de streaming directamente.",color:"--Cielo",link:"/online",emoji:"🌐",tooltip:"Escucha contenido online"},{icon:"fa-file-audio",title:"Extraer",desc:"Extrae audio de videos, separa voces de instrumentos y exporta en HD.",color:"--Paz",link:"/extraer",emoji:"🎧",tooltip:"Extracción de audio avanzada"},{icon:"fa-info-circle",title:"Acerca",desc:"Conoce la historia, características y tecnología detrás de Audiowii.",color:"--mco",link:"/acerca",emoji:"ℹ️",tooltip:"Información sobre Audiowii"}],v=[{number:8,label:"Herramientas Pro",suffix:"+",icon:"fa-tools"},{number:100,label:"Privacidad Total",suffix:"%",icon:"fa-shield-alt"},{number:15,label:"Formatos Soportados",suffix:"+",icon:"fa-music"},{number:320,label:"Calidad Máxima",suffix:"kbps",icon:"fa-tachometer-alt"}],f=["🎵 Reproductor Profesional con Ecualizador","📋 Gestión de PlayLists Inteligente","🎚️ Editor de Audio con Efectos HD","🔄 Conversión Universal Sin Pérdidas","✨ Remix y Mezcla de Pistas","🎧 Extracción de Audio en Alta Calidad"],h=[{icon:"fa-server",title:"Procesamiento 100% Local",desc:"Privacidad absoluta. Tus archivos nunca abandonan tu dispositivo. Cero servidores externos.",gradient:"linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)"},{icon:"fa-bolt",title:"Velocidad Extrema",desc:"Motor de audio optimizado. Procesamiento hasta 5x más rápido que herramientas tradicionales.",gradient:"linear-gradient(135deg, #ffa726 0%, #ff9800 100%)"},{icon:"fa-sliders-h",title:"Control Total Profesional",desc:"Configura bitrates, samplerates, canales y metadatos con precisión profesional.",gradient:"linear-gradient(135deg, #7000FF 0%, #9442ff 100%)"},{icon:"fa-shield-alt",title:"100% Gratis Sin Limitaciones",desc:"Sin marcas de agua, sin límites de tamaño, sin registro, sin planes premium.",gradient:"linear-gradient(135deg, #29C72E 0%, #3cd741 100%)"}],g=[{icon:"⚡",name:"Web Audio API",desc:"Procesamiento nativo de audio en tiempo real"},{icon:"🎯",name:"WASM",desc:"Codecs de audio de alto rendimiento"},{icon:"🔒",name:"Local Storage",desc:"Almacenamiento seguro sin servidores"},{icon:"🚀",name:"PWA Ready",desc:"Instalable como app nativa multiplataforma"}],$=[{text:"Perfecto para convertir mis audiolibros. Rápido, sin pérdida de calidad y totalmente gratis. ¡Increíble!",author:"Laura M.",role:"Podcaster"},{text:"La mejor herramienta de audio que he probado. El editor de efectos es profesional y fácil de usar.",author:"Diego R.",role:"Productor Musical"},{text:"Uso Audiowii diariamente para mis playlists. La gestión de archivos es súper intuitiva y potente.",author:"Sofia G.",role:"DJ Profesional"}],A=()=>`
  <div class="wi_inicio">
    <section class="inicio_hero">
      <div class="inicio_hero_bg"></div>
      <div class="inicio_hero_particles">${Array.from({length:15},(i,o)=>`<div class="inicio_particle" style="--i:${o}"></div>`).join("")}</div>
      
      <div class="inicio_hero_content">
        <div class="inicio_hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${m()}Audiófilo!</span>
        </div>
        <h1 class="inicio_hero_title">
          Tu Plataforma Completa de <span class="inicio_gradient_text">Audio</span>
        </h1>
        <div class="inicio_hero_version">${c} ${u} • ${d}</div>
        <div class="inicio_hero_roles">${f.map((i,o)=>`<span class="inicio_role ${o===0?"active":""}">${i}</span>`).join("")}</div>
        <p class="inicio_hero_subtitle">
          Reproduce, convierte, edita y optimiza archivos MP3, WAV, OGG, M4A y más. Herramientas profesionales para audiolibros, podcasts y música. Calidad premium, 100% gratis y sin marcas de agua.
        </p>
        
        <div class="inicio_hero_stats">
          ${v.slice(0,3).map(i=>`
            <div class="inicio_stat_card">
              <div class="inicio_stat_icon"><i class="fas ${i.icon}"></i></div>
              <div class="inicio_stat_number" data-target="${i.number}">0</div>
              <div class="inicio_stat_label">${i.label}</div>
            </div>
          `).join("")}
        </div>
        
        <div class="inicio_hero_actions">
          <a href="/play" class="inicio_btn_primary">
            <i class="fas fa-play-circle"></i>
            <span>Reproducir Ahora</span>
          </a>
          <a href="/convertir" class="inicio_btn_secondary">
            <i class="fas fa-exchange-alt"></i>
            <span>Convertir Audio</span>
          </a>
        </div>
        
        <div class="inicio_hero_trust">
          <i class="fas fa-check-circle"></i> <span>Sin registro</span>
          <i class="fas fa-shield-alt"></i> <span>100% privado</span>
          <i class="fas fa-infinity"></i> <span>Sin límites</span>
        </div>
      </div>
      
      <div class="inicio_hero_visual">
        <div class="inicio_img_container">
          <div class="inicio_img_glow"></div>
          <img src="/audiowii/v9/hero.webp" alt="${c} - Plataforma de Audio" class="inicio_hero_img" loading="eager">
          <div class="inicio_img_badge">
            <i class="fas fa-check-circle"></i>
            <span>Audio Pro HD</span>
          </div>
        </div>
        ${_.slice(0,4).map((i,o)=>`
          <div class="inicio_floating_icon inicio_icon${o+1}" data-tooltip="${i.tooltip}">
            <i class="fas ${i.icon}"></i>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="inicio_features">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">¿Por qué elegir ${c} para tu audio?</h2>
        <p class="inicio_section_subtitle">Potencia profesional sin complicaciones ni costos ocultos</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_features_grid">
        ${h.map((i,o)=>`
          <div class="inicio_feature_card" style="--delay:${o*.1}s">
            <div class="inicio_feature_icon" style="background:${i.gradient}">
              <i class="fas ${i.icon}"></i>
            </div>
            <h3>${i.title}</h3>
            <p>${i.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="inicio_nav_visual">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Suite Completa de Herramientas</h2>
        <p class="inicio_section_subtitle">Todo lo que necesitas para gestionar tu audio</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_nav_grid">
        ${_.map((i,o)=>`
          <a href="${i.link}" class="inicio_nav_card" style="--delay:${o*.1}s">
            <div class="inicio_nav_card_header">
              <div class="inicio_nav_card_icon" style="background:linear-gradient(135deg,var(${i.color}) 0%,var(--hv) 100%)">
                <i class="fas ${i.icon}"></i>
              </div>
              <div class="inicio_nav_card_emoji">${i.emoji}</div>
            </div>
            <h3>${i.title}</h3>
            <p>${i.desc}</p>
            <div class="inicio_nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="inicio_testimonials">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Lo que dicen nuestros usuarios</h2>
        <p class="inicio_section_subtitle">Historias reales de audiófilos que confían en ${c}</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_testimonials_grid">
        ${$.map((i,o)=>`
          <div class="inicio_testimonial_card" style="--delay:${o*.1}s">
            <div class="inicio_testimonial_quote">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="inicio_testimonial_text">"${i.text}"</p>
            <div class="inicio_testimonial_author">
              <strong>${i.author}</strong>
              <span>${i.role}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="inicio_tech_section">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Tecnología de Vanguardia</h2>
        <p class="inicio_section_subtitle">Las mismas herramientas que usan las plataformas profesionales</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_tech_grid">
        ${g.map((i,o)=>`
          <div class="inicio_tech_card" style="--delay:${o*.1}s">
            <div class="inicio_tech_icon">${i.icon}</div>
            <h4>${i.name}</h4>
            <p>${i.desc}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="inicio_stats_section">
      <div class="inicio_stats_content">
        <h2 class="inicio_stats_title">${c} en Números</h2>
        <p class="inicio_stats_subtitle">Cifras que demuestran nuestra calidad</p>
      </div>
      <div class="inicio_stats_grid">
        ${v.map(i=>`
          <div class="inicio_stat_box">
            <div class="inicio_stat_number" data-count="${i.number}">0${i.suffix}</div>
            <div class="inicio_stat_label">${i.label}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="inicio_cta_section">
      <div class="inicio_cta_content">
        <h2 class="inicio_cta_title">Gestiona Tu Audio Como Un Profesional</h2>
        <p class="inicio_cta_subtitle">
          Únete a miles de usuarios que ya reproducen, editan, convierten y optimizan sus archivos de audio con ${c}. Sin instalación, sin registro, sin complicaciones. Solo resultados profesionales al instante.
        </p>
        <div class="inicio_cta_features">
          <div class="inicio_cta_feature">
            <i class="fas fa-bolt"></i>
            <span>Procesamiento ultrarrápido</span>
          </div>
          <div class="inicio_cta_feature">
            <i class="fas fa-shield-alt"></i>
            <span>100% privado y seguro</span>
          </div>
          <div class="inicio_cta_feature">
            <i class="fas fa-infinity"></i>
            <span>Sin límites ni restricciones</span>
          </div>
        </div>
        <div class="inicio_cta_actions">
          <a href="/play" class="inicio_btn_primary inicio_btn_large">
            <i class="fas fa-play-circle"></i>
            <span>Comenzar Ahora</span>
          </a>
          <a href="/acerca" class="inicio_btn_secondary inicio_btn_large">
            <i class="fas fa-info-circle"></i>
            <span>Conocer ${c}</span>
          </a>
        </div>
        <div class="inicio_cta_footer">
          <p>Hecho con 💙 por ${p} © ${d}</p>
        </div>
      </div>
    </section>
  </div>
`,P=()=>{console.log(`✅ ${c} ${u} - Inicio cargado`);let i=0;const o=e(".inicio_role");setInterval(()=>{o.removeClass("active"),i=(i+1)%o.length,o.eq(i).addClass("active")},2500),l(".inicio_hero_stats",()=>{e(".inicio_hero_stats .inicio_stat_number").each(function(){const s=e(this),a=parseInt(s.data("target"));let t=0;const n=setInterval(()=>{t+=a/60,t>=a?(s.text(a+(a===100?"%":a===320?"kbps":"+")),clearInterval(n)):s.text(Math.floor(t))},25)})}),l(".inicio_stats_section",()=>{e(".inicio_stats_section .inicio_stat_number").each(function(){const s=e(this),a=parseInt(s.data("count")),t=s.text().replace(/[0-9]/g,"");let n=0;const r=setInterval(()=>{n+=a/60,n>=a?(s.text(a+t),clearInterval(r)):s.text(Math.floor(n)+t)},25)})}),l(".inicio_features_grid",()=>e(".inicio_feature_card").each((s,a)=>setTimeout(()=>e(a).addClass("visible"),s*100))),l(".inicio_nav_grid",()=>e(".inicio_nav_card").each((s,a)=>setTimeout(()=>e(a).addClass("visible"),s*100))),l(".inicio_tech_grid",()=>e(".inicio_tech_card").each((s,a)=>setTimeout(()=>e(a).addClass("visible"),s*100))),l(".inicio_testimonials_grid",()=>e(".inicio_testimonial_card").each((s,a)=>setTimeout(()=>e(a).addClass("visible"),s*100))),e(".inicio_floating_icon").on("mouseenter",function(){const s=e(this).data("tooltip"),a=e('<div class="inicio_custom_tooltip"></div>').text(s);e("body").append(a);const t=this.getBoundingClientRect(),n=a.outerWidth(),r=a.outerHeight();a.css({top:t.top-r-12+"px",left:t.left+t.width/2-n/2+"px"}),setTimeout(()=>a.addClass("show"),10)}).on("mouseleave",function(){e(".inicio_custom_tooltip").removeClass("show"),setTimeout(()=>e(".inicio_custom_tooltip").remove(),200)}),document.querySelectorAll(".inicio_particle").forEach(s=>{s.style.animationDelay=`${Math.random()*5}s`,s.style.animationDuration=`${10+Math.random()*10}s`})};export{P as init,A as render};
