import './acerca.css';
import $ from 'jquery';
import { wiVista } from '../widev.js';
import { app, version, lanzamiento, autor, link } from '../wii.js';

// Curiosidades sobre audio y música
const curiosidades = [
  {
    emoji: '🎵',
    title: 'El Primer Audio Digital',
    desc: 'El primer audio digital fue grabado en 1957 por Max Mathews en Bell Labs. Era una melodía de 17 segundos que cambió la historia de la música para siempre.',
    color: '#FF6B6B'
  },
  {
    emoji: '📀',
    title: 'CD Quality',
    desc: 'Los CDs usan 44.1 kHz porque permite capturar frecuencias hasta 22 kHz, justo por encima del límite de audición humana (20 kHz). ¡Todo cuidadosamente calculado!',
    color: '#4ECDC4'
  },
  {
    emoji: '👂',
    title: 'Oído vs Máquina',
    desc: 'El oído humano puede distinguir diferencias de hasta 1/1000 de segundo en el tiempo entre sonidos. Los ingenieros de audio aprovechan esto para crear efectos espaciales increíbles.',
    color: '#95E1D3'
  },
  {
    emoji: '🎧',
    title: 'Compresión de Audio',
    desc: 'MP3 elimina hasta el 90% de los datos de audio sin que la mayoría lo note. Usa trucos psicoacústicos para borrar frecuencias que el cerebro ignora.',
    color: '#F38181'
  },
  {
    emoji: '🌊',
    title: 'Streaming Musical',
    desc: 'Las plataformas de streaming procesan más de 100,000 canciones por segundo a nivel global. Spotify tiene más de 100 millones de tracks en su catálogo.',
    color: '#AA96DA'
  },
  {
    emoji: '🎤',
    title: 'Autotune',
    desc: 'El Auto-Tune fue originalmente desarrollado para interpretar datos sísmicos en la industria petrolera. ¡Hoy define el sonido de la música pop moderna!',
    color: '#FCBAD3'
  }
];

// Tecnologías utilizadas
const tecnologias = [
  {
    icon: 'fa-brands fa-js',
    name: 'JavaScript ES6+',
    desc: 'Lógica moderna y eficiente',
    color: '#F7DF1E'
  },
  {
    icon: 'fa-solid fa-wave-square',
    name: 'Web Audio API',
    desc: 'Procesamiento de audio en tiempo real',
    color: '#E91E63'
  },
  {
    icon: 'fa-brands fa-node-js',
    name: 'Node.js',
    desc: 'Backend robusto y escalable',
    color: '#339933'
  },
  {
    icon: 'fa-solid fa-microchip',
    name: 'FFmpeg',
    desc: 'Motor de procesamiento multimedia',
    color: '#4CAF50'
  }
];

// Estadísticas del proyecto
const estadisticas = [
  { icon: 'fa-code', label: 'Líneas de Código', value: '12,000+', color: '#FF6B6B' },
  { icon: 'fa-clock', label: 'Horas de Desarrollo', value: '400+', color: '#4ECDC4' },
  { icon: 'fa-headphones', label: 'Audios Procesados', value: '50,000+', color: '#95E1D3' },
  { icon: 'fa-star', label: 'Valoración', value: '4.8/5', color: '#FFD93D' }
];

// Misión del proyecto
const misionProyecto = [
  {
    icon: '⚡',
    title: 'Potencia Local',
    desc: 'Demostrar que la web moderna puede realizar edición de audio profesional directamente en el navegador, sin necesidad de software pesado.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: '🔒',
    title: 'Privacidad Total',
    desc: `Tus audios son tuyos. ${app} procesa todo en tu dispositivo, sin subir archivos a servidores externos. Tu música, tu control.`,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: '🎨',
    title: 'Simplicidad',
    desc: 'Hacer que herramientas complejas sean accesibles para todos a través de una interfaz amigable, hermosa y profesional.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

// Consejos para productores
const consejosFinales = [
  {
    icon: 'fa-sliders-h',
    title: 'Calidad sobre Tamaño',
    desc: 'Para producción, siempre trabaja en WAV o FLAC. Comprime a MP3/AAC solo para distribución final. La calidad perdida nunca se recupera.',
    color: '#FF6B6B'
  },
  {
    icon: 'fa-volume-up',
    title: 'Normalización Inteligente',
    desc: 'No uses compresión excesiva. La música necesita respirar. Usa -14 LUFS para streaming y -1dB de headroom para masters.',
    color: '#4ECDC4'
  },
  {
    icon: 'fa-wave-square',
    title: 'Sample Rate Correcto',
    desc: 'Para música, 44.1 kHz es perfecto. 48 kHz para video/cine. No necesitas más a menos que estés haciendo procesamiento complejo.',
    color: '#95E1D3'
  },
  {
    icon: 'fa-magic',
    title: 'Ecualizador es tu Amigo',
    desc: 'Aprende a usar EQ antes que cualquier otro efecto. Un buen EQ puede transformar completamente una mezcla y limpiar frecuencias molestas.',
    color: '#F38181'
  }
];

export const render = () => `
  <div class="wi_acerca">
    <!-- HERO SECTION -->
    <section class="acerca_hero">
      <div class="hero_content">
        <h1 class="hero_title">
          <span class="hero_icon">🎵</span>
          ${app}
          <span class="hero_badge">${version}</span>
        </h1>
        <p class="hero_subtitle">
          Editor de Audio Profesional • 100% Gratis • Sin Límites
        </p>
        <p class="hero_description">
          Un proyecto nacido de la pasión por el audio y la tecnología web.
          Transformando la creatividad en herramientas poderosas, privadas y accesibles para todos los creadores.
        </p>
        <div class="hero_stats">
          ${estadisticas.map(stat => `
            <div class="hero_stat" style="--stat-color: ${stat.color}">
              <i class="fas ${stat.icon}"></i>
              <div class="stat_value">${stat.value}</div>
              <div class="stat_label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="hero_visual">
        <div class="hero_waveform">
          <div class="waveform_bars">
            ${Array.from({ length: 50 }, (_, i) => `<div class="wave_bar" style="--bar-delay: ${i * 0.02}s"></div>`).join('')}
          </div>
          <div class="waveform_overlay">
            <i class="fas fa-music"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section class="tecnologias_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-cogs"></i>
          Tecnologías de Vanguardia
        </h2>
        <p class="section_subtitle">
          Construido con las mejores herramientas del desarrollo web moderno
        </p>
        <div class="section_line"></div>
      </div>
      <div class="tecnologias_grid">
        ${tecnologias.map(tech => `
          <div class="tech_card" style="--tech-color: ${tech.color}">
            <div class="tech_icon">
              <i class="${tech.icon}"></i>
            </div>
            <h3 class="tech_name">${tech.name}</h3>
            <p class="tech_desc">${tech.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CURIOSIDADES -->
    <section class="curiosidades_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-lightbulb"></i>
          Curiosidades del Mundo del Audio
        </h2>
        <p class="section_subtitle">
          Datos fascinantes sobre la tecnología que escuchamos cada día
        </p>
        <div class="section_line"></div>
      </div>
      <div class="curiosidades_grid">
        ${curiosidades.map((curiosidad, i) => `
          <div class="curiosidad_card" style="--card-color: ${curiosidad.color}; --card-delay: ${i * 0.1}s">
            <div class="curiosidad_header">
              <span class="curiosidad_emoji">${curiosidad.emoji}</span>
              <div class="curiosidad_number">${String(i + 1).padStart(2, '0')}</div>
            </div>
            <h3 class="curiosidad_title">${curiosidad.title}</h3>
            <p class="curiosidad_desc">${curiosidad.desc}</p>
            <div class="curiosidad_decoration"></div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PROYECTO -->
    <section class="proyecto_section">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-rocket"></i>
          Acerca del Proyecto
        </h2>
        <p class="section_subtitle">
          La visión detrás de ${app}
        </p>
        <div class="section_line"></div>
      </div>
      <div class="proyecto_content">
        <div class="proyecto_historia">
          <div class="historia_icon">
            <i class="fas fa-headphones"></i>
          </div>
          <h3>Nuestra Historia</h3>
          <div class="historia_timeline">
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>El Desafío</h4>
                <p>
                  <strong>${app}</strong> nació como un desafío técnico: ¿Es posible crear un editor de audio completo que funcione 100% en el navegador?
                </p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>La Solución</h4>
                <p>
                  Utilizando tecnologías de vanguardia como <strong>Web Audio API y FFmpeg</strong>, logramos traer la potencia de un DAW al navegador.
                </p>
              </div>
            </div>
            <div class="timeline_item">
              <div class="timeline_dot"></div>
              <div class="timeline_content">
                <h4>El Resultado</h4>
                <p>
                  Hoy, ${app} es una suite completa que permite a productores y creadores manipular audio con facilidad, privacidad y rapidez. 🎧
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="proyecto_mision">
          ${misionProyecto.map((mision, i) => `
            <div class="mision_card" style="--mision-gradient: ${mision.gradient}; --mision-delay: ${i * 0.15}s">
              <div class="mision_icon">${mision.icon}</div>
              <h4 class="mision_title">${mision.title}</h4>
              <p class="mision_desc">${mision.desc}</p>
              <div class="mision_shine"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CREADOR -->
    <section class="creador_section">
      <div class="creador_card">
        <div class="creador_visual">
          <div class="creador_avatar">
            <img src="${import.meta.env.BASE_URL}wilder.webp" alt="${autor}" class="creador_foto">
          </div>
          <div class="creador_badge">
            <i class="fas fa-award"></i>
            <span>Creator</span>
          </div>
        </div>
        <div class="creador_info">
          <h3>${autor}</h3>
          <div class="rol">
            <i class="fas fa-code"></i>
            Desarrollador Full Stack & Creador de ${app}
          </div>
          <p>
            Apasionado por llevar la web a sus límites. Creo firmemente que el navegador es el sistema operativo del futuro.
          </p>
          <p>
            ${app} es la culminación de meses de investigación y desarrollo para crear una experiencia de edición de audio fluida y potente.
            ¡Espero que disfrutes usando estas herramientas tanto como yo disfruté creándolas! 🎧✨
          </p>
          <div class="creador_social">
            <a href="https://github.com/wtaype" target="_blank" class="social_link github" title="GitHub">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="${link}" target="_blank" class="social_link portfolio" title="Portfolio">
              <i class="fas fa-globe"></i>
              <span>Portfolio</span>
            </a>
            <a href="mailto:contact@wildertaype.com" class="social_link email" title="Email">
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONSEJOS FINALES -->
    <section class="consejos_finales">
      <div class="section_header">
        <h2 class="section_title">
          <i class="fas fa-star"></i>
          Tips para Productores
        </h2>
        <p class="section_subtitle">
          Mejora la calidad de tus producciones con estos consejos profesionales
        </p>
        <div class="section_line"></div>
      </div>
      <div class="consejos_grid">
        ${consejosFinales.map((consejo, i) => `
          <div class="consejo_card" style="--consejo-color: ${consejo.color}; --consejo-delay: ${i * 0.1}s">
            <div class="consejo_icon_wrapper">
              <i class="fas ${consejo.icon}"></i>
            </div>
            <div class="consejo_content">
              <h3 class="consejo_title">${consejo.title}</h3>
              <p class="consejo_desc">${consejo.desc}</p>
            </div>
            <div class="consejo_arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- MENSAJE FINAL -->
    <section class="mensaje_final">
      <div class="mensaje_content">
        <h2>
          <span class="mensaje_icon">🎵</span>
          Sigue Creando Música Increíble
          <span class="mensaje_icon">✨</span>
        </h2>
        <p class="mensaje_text">
          El audio es el medio más poderoso para transmitir emociones y energía.
          No dejes que la tecnología sea un obstáculo para tu creatividad musical.
        </p>
        <p class="mensaje_highlight">
          ¡El mundo espera escuchar lo que vas a crear! 🎧
        </p>
        <div class="mensaje_footer">
          <p>Hecho con 💙 por ${autor} © ${lanzamiento}</p>
          <div class="mensaje_version">${version}</div>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  console.log(`✅ Acerca de ${app} ${version} cargado`);

  // Animación de entrada para curiosidades
  wiVista('.curiosidad_card', () => {
    $('.curiosidad_card').each((i, el) => {
      setTimeout(() => {
        $(el).addClass('animate-in');
      }, i * 100);
    });
  });

  // Animación para misión
  wiVista('.mision_card', () => {
    $('.mision_card').each((i, el) => {
      setTimeout(() => {
        $(el).addClass('animate-in');
      }, i * 150);
    });
  });

  // Animación para consejos finales
  wiVista('.consejo_card', () => {
    $('.consejo_card').each((i, el) => {
      setTimeout(() => {
        $(el).addClass('animate-in');
      }, i * 120);
    });
  });

  // Animación para tecnologías
  wiVista('.tech_card', () => {
    $('.tech_card').each((i, el) => {
      setTimeout(() => {
        $(el).addClass('animate-in');
      }, i * 100);
    });
  });

  // Animación de waveform
  const animateWaveform = () => {
    $('.wave_bar').each(function() {
      const randomHeight = Math.random() * 100 + 20;
      $(this).css('height', `${randomHeight}%`);
    });
  };

  setInterval(animateWaveform, 100);
};

