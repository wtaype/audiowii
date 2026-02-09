import './auth/wiauth.js';
import $ from 'jquery';
import { getls, removels, Mensaje } from './widev.js';

export function personal(wi) {
  Mensaje?.('Bienvenido '+wi.nombre);
  $('.wiauth').html(`
    <div class="sesion">
      <img src="${wi.imagen||'./smile.avif'}" alt="${wi.nombre}"> <span>${wi.nombre}</span>
      <a class="bt_salir" title="Cerrar sesión"><i class="fas fa-sign-out-alt"></i></a>
    </div>
  `);
} // Funcion para Auth personal 

export const header = (() => {
  let wi = getls('wiSmile'); wi ? cargandoPersonal(wi) : publico(); //Cache Primero

  function publico() {
    $('.wiauth').html(`
      <a class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></a>
      <a class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></a>
  `);
  }

  async function cargandoPersonal(wi) {
    personal(wi);
//ACTUALIZAR CAMBIOS EN TIEMPO REAL
    const { auth, onAuthStateChanged } = await import('./auth/wiauth.js');
    onAuthStateChanged(auth, user => {
      if (!user) return removels('wiSmile'), publico();
    });
  }
    window.addEventListener('wiFresh', (e) => cargandoPersonal(e.detail));
//CERRAR SESSIÓN
  $(document).on('click', '.bt_salir', async () => {
    const { auth, signOut } = await import('./auth/wiauth.js');
    await signOut(auth);
    ['wiflash', 'wiTema'].map(k => [k, getls(k)]).concat(localStorage.clear()) && localStorage.setItem('wiflash', JSON.stringify(getls('wiflash'))) && localStorage.setItem('wiTema', JSON.stringify(getls('wiTema')));
    location.reload();
  });
})();

