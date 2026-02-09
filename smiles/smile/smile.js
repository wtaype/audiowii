import './smile.css';
import $ from 'jquery';
import { wiCitas } from '../main/citas.js';
import { wiIp, savels, getls, Saludar, wiSpin } from '../widev.js';

export let smile = getls('wiSmile'); // Obtener datos del usuario
export const render = async () => {
  return ` <div class="miweb">
    <div class="phrs mwb dpw frases" id="frases"></div>
  
  </div>`;
};

export const init = async () => {
  wiCitas(); //Zonas horas actualizadas
  actualizado(); //Iniciar actualizaciones
};

export const cleanup = () => {
  console.log('😊 Smile limpiado');
};

