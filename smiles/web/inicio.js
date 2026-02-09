import './inicio.css';
import $ from 'jquery';
import { app, version, autor, lanzamiento } from '../wii.js';
import { wiVista, Saludar } from '../widev.js';

const navSections = [
  { icon: 'fa-play-circle', title: 'Play', desc: 'Reproduce tus audios favoritos con controles avanzados y ecualizador profesional.', color: '--success', link: '/play', emoji: '🎵', tooltip: 'Reproductor de audio con visualización' },
  { icon: 'fa-bolt', title: 'PlayList', desc: 'Organiza y gestiona tus colecciones de música, podcasts y audiolibros fácilmente.', color: '--Mora', link: '/playlist', emoji: '📋', tooltip: 'Crea listas de reproducción personalizadas' },
  { icon: 'fa-sliders-h', title: 'Editar', desc: 'Ajusta volumen, ecualización, efectos y normaliza tus archivos de audio.', color: '--info', link: '/editar', emoji: '🎚️', tooltip: 'Editor de audio con efectos profesionales' },
  { icon: 'fa-exchange-alt', title: 'Convertir', desc: 'Transforma entre MP3, WAV, OGG, M4A, FLAC y más de 15 formatos de audio.', color: '--warning', link: '/convertir', emoji: '🔄', tooltip: 'Conversor universal de formatos' },
  { icon: 'fa-magic', title: 'Remix', desc: 'Mezcla pistas, ajusta BPM, aplica efectos y crea remixes profesionales.', color: '--Dulce', link: '/remix', emoji: '✨', tooltip: 'Herramienta de mezcla y remix' },
  { icon: 'fa-globe', title: 'Online', desc: 'Accede a radios online, podcasts y plataformas de streaming directamente.', color: '--Cielo', link: '/online', emoji: '🌐', tooltip: 'Escucha contenido online' },
  { icon: 'fa-file-audio', title: 'Extraer', desc: 'Extrae audio de videos, separa voces de instrumentos y exporta en HD.', color: '--Paz', link: '/extraer', emoji: '🎧', tooltip: 'Extracción de audio avanzada' },
  { icon: 'fa-info-circle', title: 'Acerca', desc: 'Conoce la historia, características y tecnología detrás de Audiowii.', color: '--mco', link: '/acerca', emoji: 'ℹ️', tooltip: 'Información sobre Audiowii' }
];

const stats = [
  { number: 8, label: 'Herramientas Pro', suffix: '+', icon: 'fa-tools' },
  { number: 100, label: 'Privacidad Total', suffix: '%', icon: 'fa-shield-alt' },
  { number: 15, label: 'Formatos Soportados', suffix: '+', icon: 'fa-music' },
  { number: 320, label: 'Calidad Máxima', suffix: 'kbps', icon: 'fa-tachometer-alt' }
];

const roles = [
  '🎵 Reproductor Profesional con Ecualizador',
  '📋 Gestión de PlayLists Inteligente',
  '🎚️ Editor de Audio con Efectos HD',
  '🔄 Conversión Universal Sin Pérdidas',
  '✨ Remix y Mezcla de Pistas',
  '🎧 Extracción de Audio en Alta Calidad'
];

const features = [
  { icon: 'fa-server', title: 'Procesamiento 100% Local', desc: 'Privacidad absoluta. Tus archivos nunca abandonan tu dispositivo. Cero servidores externos.', gradient: 'linear-gradient(135deg, #00f3ff 0%, #0EBEFF 100%)' },
  { icon: 'fa-bolt', title: 'Velocidad Extrema', desc: 'Motor de audio optimizado. Procesamiento hasta 5x más rápido que herramientas tradicionales.', gradient: 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)' },
  { icon: 'fa-sliders-h', title: 'Control Total Profesional', desc: 'Configura bitrates, samplerates, canales y metadatos con precisión profesional.', gradient: 'linear-gradient(135deg, #7000FF 0%, #9442ff 100%)' },
  { icon: 'fa-shield-alt', title: '100% Gratis Sin Limitaciones', desc: 'Sin marcas de agua, sin límites de tamaño, sin registro, sin planes premium.', gradient: 'linear-gradient(135deg, #29C72E 0%, #3cd741 100%)' }
];

const techs = [
  { icon: '⚡', name: 'Web Audio API', desc: 'Procesamiento nativo de audio en tiempo real' },
  { icon: '🎯', name: 'WASM', desc: 'Codecs de audio de alto rendimiento' },
  { icon: '🔒', name: 'Local Storage', desc: 'Almacenamiento seguro sin servidores' },
  { icon: '🚀', name: 'PWA Ready', desc: 'Instalable como app nativa multiplataforma' }
];

const testimonials = [
  { text: 'Perfecto para convertir mis audiolibros. Rápido, sin pérdida de calidad y totalmente gratis. ¡Increíble!', author: 'Laura M.', role: 'Podcaster' },
  { text: 'La mejor herramienta de audio que he probado. El editor de efectos es profesional y fácil de usar.', author: 'Diego R.', role: 'Productor Musical' },
  { text: 'Uso Audiowii diariamente para mis playlists. La gestión de archivos es súper intuitiva y potente.', author: 'Sofia G.', role: 'DJ Profesional' }
];

export const render = () => `
  <div class="wi_inicio">
    <section class="inicio_hero">
      <div class="inicio_hero_bg"></div>
      <div class="inicio_hero_particles">${Array.from({length:15},(_, i)=>`<div class="inicio_particle" style="--i:${i}"></div>`).join('')}</div>
      
      <div class="inicio_hero_content">
        <div class="inicio_hero_badge">
          <i class="fas fa-sparkles"></i>
          <span>${Saludar()}Audiófilo!</span>
        </div>
        <h1 class="inicio_hero_title">
          Tu Plataforma Completa de <span class="inicio_gradient_text">Audio</span>
        </h1>
        <div class="inicio_hero_version">${app} ${version} • ${lanzamiento}</div>
        <div class="inicio_hero_roles">${roles.map((r,i)=>`<span class="inicio_role ${i===0?'active':''}">${r}</span>`).join('')}</div>
        <p class="inicio_hero_subtitle">
          Reproduce, convierte, edita y optimiza archivos MP3, WAV, OGG, M4A y más. Herramientas profesionales para audiolibros, podcasts y música. Calidad premium, 100% gratis y sin marcas de agua.
        </p>
        
        <div class="inicio_hero_stats">
          ${stats.slice(0,3).map(s=>`
            <div class="inicio_stat_card">
              <div class="inicio_stat_icon"><i class="fas ${s.icon}"></i></div>
              <div class="inicio_stat_number" data-target="${s.number}">0</div>
              <div class="inicio_stat_label">${s.label}</div>
            </div>
          `).join('')}
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
          <img src="${import.meta.env.BASE_URL}hero.webp" alt="${app} - Plataforma de Audio" class="inicio_hero_img" loading="eager">
          <div class="inicio_img_badge">
            <i class="fas fa-check-circle"></i>
            <span>Audio Pro HD</span>
          </div>
        </div>
        ${navSections.slice(0,4).map((s,i)=>`
          <div class="inicio_floating_icon inicio_icon${i+1}" data-tooltip="${s.tooltip}">
            <i class="fas ${s.icon}"></i>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="inicio_features">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">¿Por qué elegir ${app} para tu audio?</h2>
        <p class="inicio_section_subtitle">Potencia profesional sin complicaciones ni costos ocultos</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_features_grid">
        ${features.map((f,i)=>`
          <div class="inicio_feature_card" style="--delay:${i*0.1}s">
            <div class="inicio_feature_icon" style="background:${f.gradient}">
              <i class="fas ${f.icon}"></i>
            </div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="inicio_nav_visual">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Suite Completa de Herramientas</h2>
        <p class="inicio_section_subtitle">Todo lo que necesitas para gestionar tu audio</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_nav_grid">
        ${navSections.map((s,i)=>`
          <a href="${s.link}" class="inicio_nav_card" style="--delay:${i*0.1}s">
            <div class="inicio_nav_card_header">
              <div class="inicio_nav_card_icon" style="background:linear-gradient(135deg,var(${s.color}) 0%,var(--hv) 100%)">
                <i class="fas ${s.icon}"></i>
              </div>
              <div class="inicio_nav_card_emoji">${s.emoji}</div>
            </div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="inicio_nav_card_arrow">
              <span>Explorar</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="inicio_testimonials">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Lo que dicen nuestros usuarios</h2>
        <p class="inicio_section_subtitle">Historias reales de audiófilos que confían en ${app}</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_testimonials_grid">
        ${testimonials.map((t,i)=>`
          <div class="inicio_testimonial_card" style="--delay:${i*0.1}s">
            <div class="inicio_testimonial_quote">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="inicio_testimonial_text">"${t.text}"</p>
            <div class="inicio_testimonial_author">
              <strong>${t.author}</strong>
              <span>${t.role}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="inicio_tech_section">
      <div class="inicio_section_header">
        <h2 class="inicio_section_title">Tecnología de Vanguardia</h2>
        <p class="inicio_section_subtitle">Las mismas herramientas que usan las plataformas profesionales</p>
        <div class="inicio_section_line"></div>
      </div>
      <div class="inicio_tech_grid">
        ${techs.map((t,i)=>`
          <div class="inicio_tech_card" style="--delay:${i*0.1}s">
            <div class="inicio_tech_icon">${t.icon}</div>
            <h4>${t.name}</h4>
            <p>${t.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="inicio_stats_section">
      <div class="inicio_stats_content">
        <h2 class="inicio_stats_title">${app} en Números</h2>
        <p class="inicio_stats_subtitle">Cifras que demuestran nuestra calidad</p>
      </div>
      <div class="inicio_stats_grid">
        ${stats.map(s=>`
          <div class="inicio_stat_box">
            <div class="inicio_stat_number" data-count="${s.number}">0${s.suffix}</div>
            <div class="inicio_stat_label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="inicio_cta_section">
      <div class="inicio_cta_content">
        <h2 class="inicio_cta_title">Gestiona Tu Audio Como Un Profesional</h2>
        <p class="inicio_cta_subtitle">
          Únete a miles de usuarios que ya reproducen, editan, convierten y optimizan sus archivos de audio con ${app}. Sin instalación, sin registro, sin complicaciones. Solo resultados profesionales al instante.
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
            <span>Conocer ${app}</span>
          </a>
        </div>
        <div class="inicio_cta_footer">
          <p>Hecho con 💙 por ${autor} © ${lanzamiento}</p>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ ${app} ${version} - Inicio cargado`);

  let roleActual = 0;
  const $roles = $('.inicio_role');
  setInterval(() => {
    $roles.removeClass('active');
    roleActual = (roleActual + 1) % $roles.length;
    $roles.eq(roleActual).addClass('active');
  }, 2500);

  wiVista('.inicio_hero_stats', () => {
    $('.inicio_hero_stats .inicio_stat_number').each(function() {
      const $num = $(this), target = parseInt($num.data('target'));
      let actual = 0;
      const timer = setInterval(() => {
        actual += target / 60;
        if (actual >= target) {
          $num.text(target + (target === 100 ? '%' : target === 320 ? 'kbps' : '+'));
          clearInterval(timer);
        } else {
          $num.text(Math.floor(actual));
        }
      }, 25);
    });
  });

  wiVista('.inicio_stats_section', () => {
    $('.inicio_stats_section .inicio_stat_number').each(function() {
      const $this = $(this), target = parseInt($this.data('count')), suffix = $this.text().replace(/[0-9]/g, '');
      let actual = 0;
      const timer = setInterval(() => {
        actual += target / 60;
        if (actual >= target) {
          $this.text(target + suffix);
          clearInterval(timer);
        } else {
          $this.text(Math.floor(actual) + suffix);
        }
      }, 25);
    });
  });

  wiVista('.inicio_features_grid', () => $('.inicio_feature_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.inicio_nav_grid', () => $('.inicio_nav_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.inicio_tech_grid', () => $('.inicio_tech_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));
  wiVista('.inicio_testimonials_grid', () => $('.inicio_testimonial_card').each((i, el) => setTimeout(() => $(el).addClass('visible'), i * 100)));

  $('.inicio_floating_icon').on('mouseenter', function() {
    const tooltip = $(this).data('tooltip');
    const $tip = $('<div class="inicio_custom_tooltip"></div>').text(tooltip);
    $('body').append($tip);
    
    const iconRect = this.getBoundingClientRect();
    const tipWidth = $tip.outerWidth();
    const tipHeight = $tip.outerHeight();
    
    $tip.css({
      top: iconRect.top - tipHeight - 12 + 'px',
      left: iconRect.left + iconRect.width / 2 - tipWidth / 2 + 'px'
    });
    
    setTimeout(() => $tip.addClass('show'), 10);
  }).on('mouseleave', function() {
    $('.inicio_custom_tooltip').removeClass('show');
    setTimeout(() => $('.inicio_custom_tooltip').remove(), 200);
  });

  document.querySelectorAll('.inicio_particle').forEach((p) => {
    p.style.animationDelay = `${Math.random() * 5}s`;
    p.style.animationDuration = `${10 + Math.random() * 10}s`;
  });
};