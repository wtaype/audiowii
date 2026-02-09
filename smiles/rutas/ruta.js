import $ from 'jquery';
import { app } from '../wii.js';
import { Notificacion } from '../widev.js';

let actual = null; const $main = $('#wimain'), HOME = 'inicio', PAGE = 'web'; 

export const rutas = {
  pages(arr) {
    arr.forEach(v => {
      const $el = $(`<div id="${v}"></div>`).appendTo($main);
      
      const load = async () => {
        if (!$el.children().length) {
          try {
            const mod = await import(`../${PAGE}/${v}.js`);
            $el.html((mod.render || mod[v] || mod.default)?.() ?? '');
            mod.init?.();
          } catch {const m404 = await import(`../${PAGE}/404.js`); $el.html(m404.render());Notificacion('Página no encontrada');}
        }
        
        actual !== v && (actual && $(`style[data-vite-dev-id*="/${PAGE}/${actual}.css"]`).prop('disabled', true), $el.show().siblings().hide(),
        $(`style[data-vite-dev-id*="/${PAGE}/${v}.css"]`).prop('disabled', false), actual = v);
        
        history.pushState(null, '', v === HOME ? '/' : `/${v}`);
        document.title = `${v[0].toUpperCase()}${v.slice(1)} - ${app}`;
        $('.nv_item').removeClass('active').filter(`[data-page="${v}"]`).addClass('active');
      };
      
      $(document).on('click', `.nv_item[data-page="${v}"]`, e => (e.preventDefault(), load()));
    });
  },

  init() {
    const path = location.pathname === '/' ? HOME : location.pathname.slice(1);
    setTimeout(() => $(`.nv_item[data-page="${path}"]`).trigger('click'), 30);
    addEventListener('popstate', () => $(`.nv_item[data-page="${location.pathname === '/' ? HOME : location.pathname.slice(1)}"]`).trigger('click'));
  }
};