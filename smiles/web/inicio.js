import './inicio.css';
import { app, version, lanzamiento, autor } from '../wii.js';
import { $, wiVista, wiTip, Saludar, year } from '../widev.js';
import { rutas } from '../rutas/ruta.js';

// ── Datos ─────────────────────────────────────────────────────────────────
const ROLES = ['🎵 Reproductor con Ecualizador', '🎚️ Editor de Audio HD', '🔄 Conversor Universal', '✨ Remix Profesional', '🎧 Extractor de Audio', '📋 PlayLists Inteligentes'];
const STATS = [[8, 'Herramientas Pro'], [15, 'Formatos Audio'], [100, 'Privacidad Total']];
const ICONS = [
  ['fa-play-circle', 'Reproductor Pro'],
  ['fa-sliders-h', 'Editor de Audio'],
  ['fa-exchange-alt', 'Conversor'],
  ['fa-magic', 'Remix & Mezcla'],
];
const TOOLS = [
  ['fa-play-circle', 'Play', 'Reproduce con controles avanzados y ecualizador profesional.', '/play', '🎵'],
  ['fa-bolt', 'PlayList', 'Organiza tus colecciones de música, podcasts y audiolibros.', '/playlist', '📋'],
  ['fa-sliders-h', 'Editar', 'Ajusta volumen, ecualización y normaliza tus archivos.', '/editar', '🎚️'],
  ['fa-exchange-alt', 'Convertir', 'MP3, WAV, OGG, M4A, FLAC y más de 15 formatos.', '/convertir', '🔄'],
  ['fa-magic', 'Remix', 'Mezcla pistas, aplica efectos y crea remixes.', '/remix', '✨'],
  ['fa-globe', 'Online', 'Radios online, podcasts y streaming directo.', '/online', '🌐'],
  ['fa-file-audio', 'Extraer', 'Extrae audio de videos y separa voces.', '/extraer', '🎧'],
  ['fa-info-circle', 'Acerca', 'Historia y tecnología detrás de AudioWii.', '/acerca', 'ℹ️'],
];
const PASOS = [
  ['fa-upload', 'Sube tu Audio', 'Arrastra o selecciona archivos MP3, WAV, OGG, M4A y más'],
  ['fa-sliders-h', 'Edita y Procesa', 'Ajusta volumen, efectos, formato y calidad profesional'],
  ['fa-download', 'Descarga al Instante', 'Obtén tu archivo procesado en segundos, sin marcas de agua'],
];
const TESTI = [
  ['fa-user-tie', 'Perfecto para convertir mis audiolibros. Rápido y sin pérdida de calidad. ¡Increíble!', 'Laura M.', 'Podcaster', '⭐⭐⭐⭐⭐'],
  ['fa-user-astronaut', 'La mejor herramienta de audio online. El editor es profesional y fácil de usar.', 'Diego R.', 'Productor Musical', '⭐⭐⭐⭐⭐'],
  ['fa-user-ninja', 'Uso AudioWii diariamente para mis playlists. Super intuitiva y potente.', 'Sofia G.', 'DJ Profesional', '⭐⭐⭐⭐'],
];
const FEATS = [
  ['fa-server', 'Procesamiento Local', 'Tus archivos nunca salen de tu dispositivo. Privacidad absoluta'],
  ['fa-bolt', 'Velocidad Extrema', 'Motor optimizado, hasta 5x más rápido que herramientas tradicionales'],
  ['fa-shield-alt', '100% Gratis', 'Sin marcas de agua, sin límites de tamaño, sin registro obligatorio'],
  ['fa-music', 'Calidad Profesional', 'Hasta 320kbps, configura bitrate, samplerate y metadatos'],
  ['fa-cloud', 'PWA Ready', 'Instálalo como app nativa en cualquier dispositivo'],
];

// ── Helpers ───────────────────────────────────────────────────────────────
const sec = (ico, t) => `<div class="sec_head"><h2><i class="fas ${ico}"></i> ${t}</h2><div class="sec_line"></div></div>`;

// ── Render ────────────────────────────────────────────────────────────────
export const render = () => `<div class="inicio">
  <section class="hero">
    <div class="hero_txt">
      <div class="hero_badge"><i class="fas fa-headphones"></i> ${Saludar()}Audiófilo!</div>
      <h1>Tu Plataforma de <span class="gradiente">Audio</span> Profesional</h1>
      <div class="hero_roles">${ROLES.map((r, i) => `<span class="role${i ? '' : ' active'}">${r}</span>`).join('')}</div>
      <p class="hero_sub">Reproduce, convierte, edita y optimiza archivos de audio. Herramientas profesionales, 100% gratis y privadas 🎧</p>
      <div class="hero_btns">
        <a href="/play" class="btn_pri wi_nav"><i class="fas fa-play-circle"></i><span>Reproducir Ahora</span></a>
        <a href="#herramientas" class="btn_sec wi_scroll"><i class="fas fa-th-large"></i><span>Ver Herramientas</span></a>
      </div>
      <div class="hero_stats">${STATS.map(([n, l]) => `<div class="hstat"><div class="hstat_n" data-target="${n}">0</div><div class="hstat_l">${l}</div></div>`).join('')}</div>
    </div>
    <div class="hero_visual">
      <span class="img_inicio"></span>
      ${ICONS.map(([ico, tip], i) => `
        <div class="inicio_floating_icon inicio_icon${i+1}" ${wiTip(tip)}>
          <i class="fas ${ico}"></i>
        </div>`).join('')}
    </div>
  </section>

  <section class="sec_tools" id="herramientas">
    ${sec('fa-th-large', 'Suite Completa de Herramientas')}
    <p class="sec_desc">Todo lo que necesitas para gestionar tu audio profesional</p>
    <div class="tools_grid">${TOOLS.map(([ico, t, d, lnk, em]) => `
      <a class="tool_card wi_nav" href="${lnk}">
        <div class="tool_top"><span class="tool_emoji">${em}</span><div class="tool_ico"><i class="fas ${ico}"></i></div></div>
        <h3>${t}</h3>
        <p>${d}</p>
        <span class="tool_go"><i class="fas fa-arrow-right"></i> Explorar</span>
      </a>`).join('')}</div>
  </section>

  <section class="sec_test">
    ${sec('fa-comments', 'Lo que dicen nuestros usuarios')}
    <p class="sec_desc">Audiófilos que confían en <strong>${app}</strong></p>
    <div class="test_grid">${TESTI.map(([ico, msg, a, c, s]) => `
      <div class="test_card">
        <div class="test_avatar"><i class="fas ${ico}"></i></div>
        <div class="test_stars">${s}</div>
        <p>"${msg}"</p>
        <div class="test_a"><strong>${a}</strong><span>${c}</span></div>
      </div>`).join('')}</div>
  </section>

  <section class="sec_pasos">
    ${sec('fa-lightbulb', '¿Cómo funciona?')}
    <div class="pasos_row">${PASOS.map(([ico, t, d], i) => `
      <div class="paso">
        <div class="paso_n">${i + 1}</div>
        <div class="paso_ico"><i class="fas ${ico}"></i></div>
        <h3>${t}</h3>
        <p>${d}</p>
      </div>${i < PASOS.length - 1 ? '<div class="paso_arrow"><i class="fas fa-chevron-right"></i></div>' : ''}`).join('')}</div>
  </section>

  <section class="sec_feat">
    ${sec('fa-sparkles', `¿Por qué elegir ${app}?`)}
    <div class="feat_grid">${FEATS.map(([ico, t, d]) => `
      <div class="feat_card"><div class="feat_ico"><i class="fas ${ico}"></i></div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  </section>

  <section class="cta_final">
    <i class="fas fa-headphones cta_ico"></i>
    <h2>Gestiona Tu Audio Como Un Profesional</h2>
    <p>Únete a miles de usuarios que confían en <strong>${app}</strong></p>
    <a href="/play" class="cta_btn wi_nav"><i class="fas fa-play-circle"></i> Comenzar Ahora - Gratis</a>
    <div class="cta_tags"><span><i class="fas fa-check"></i> Sin registro</span><span><i class="fas fa-check"></i> 100% privado</span><span><i class="fas fa-check"></i> Sin límites</span></div>
  </section>
</div>`;

// ── Estado ────────────────────────────────────────────────────────────────
let _rt = null, _obs = [];

// ── Init ──────────────────────────────────────────────────────────────────
export const init = () => {
  wiTip();

  let i = 0; const $r = $('.hero_roles .role');
  _rt = setInterval(() => { $r.eq(i).removeClass('active'); i = (i + 1) % $r.length; $r.eq(i).addClass('active'); }, 2500);

  _obs.push(wiVista('.hero_stats', () => {
    $('.hstat_n').each(function () {
      const $n = $(this), t = +$n.data('target'), s = Math.ceil(t / 40);
      let c = 0, iv = setInterval(() => { c = Math.min(c + s, t); $n.text(c < t ? Math.floor(c) : `${t}+`); c >= t && clearInterval(iv); }, 30);
    });
  }));

  ['.tool_card', '.paso', '.test_card', '.feat_card'].forEach(s =>
    _obs.push(wiVista(s, (el) => $(el).addClass('visible'), { stagger: 120 }))
  );

  $(document).on('click.inicio', '.wi_nav', function (e) {
    e.preventDefault(); rutas.navigate(this.getAttribute('href'));
  }).on('click.inicio', '.wi_scroll', function (e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
  });
};

export const cleanup = () => {
  clearInterval(_rt); _rt = null;
  _obs.forEach(o => o?.disconnect?.()); _obs = [];
  $(document).off('.inicio');
};