// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../router.js';
// eslint-disable-next-line import/no-cycle
import { iniciarSesion, usuarioExistente, google } from '../lib/index.js';
import { modal } from './modal.js';

export const inicio = () => {
  const seccionGeneral = document.createElement('section');
  const tabla = document.createElement('IMG');
  tabla.src = './images/login.png';
  tabla.setAttribute('id', 'cocina');
  tabla.setAttribute('alt', 'Tabla de cocina');
  tabla.setAttribute('class', 'desktop');

  const seccionLogin = document.createElement('section');
  seccionLogin.setAttribute('id', 'login');

  const logoYummi = document.createElement('IMG');
  logoYummi.src = './images/logo.png';
  logoYummi.setAttribute('id', 'logoinicio');
  logoYummi.setAttribute('alt', 'Yummy, bienvenido a tu mundo de cocina');

  const inputEmailLogin = document.createElement('input');
  inputEmailLogin.setAttribute('type', 'email');
  inputEmailLogin.setAttribute('id', 'email');
  inputEmailLogin.setAttribute('placeholder', 'Email');

  const inputContraseñaLogin = document.createElement('input');
  inputContraseñaLogin.setAttribute('type', 'password');
  inputContraseñaLogin.setAttribute('id', 'contraseña');
  inputContraseñaLogin.setAttribute('placeholder', 'Contraseña');
  const btnmostrarcontraseña = document.createElement('button');
  btnmostrarcontraseña.setAttribute('id', 'ojito');
  const ojo = document.createElement('IMG');
  ojo.src = './images/ojitobueno.png';
  btnmostrarcontraseña.appendChild(ojo);
  // btnmostrarcontraseña.textContent = 'mostrar Contraseña';
  btnmostrarcontraseña.addEventListener('click', () => {
    if (inputContraseñaLogin.type === 'password') {
      inputContraseñaLogin.type = 'text';
    } else {
      inputContraseñaLogin.type = 'password';
    }
  });

  const botonLogin = document.createElement('button');
  botonLogin.setAttribute('id', 'loginbo');
  botonLogin.setAttribute('class', 'botones');
  const linkbotonlogin = document.createElement('a');
  linkbotonlogin.setAttribute('href', '#contmodal');
  linkbotonlogin.textContent = 'Iniciar sesión';
  botonLogin.appendChild(linkbotonlogin);
  botonLogin.addEventListener('click', () => {
    usuarioExistente();
    iniciarSesion();
  });
  const imgGoogle = document.createElement('IMG');
  imgGoogle.src = './images/google.png';
  imgGoogle.setAttribute('alt', 'google');
  imgGoogle.setAttribute('id', 'iconogoo');

  const botonGoogle = document.createElement('button');
  botonGoogle.setAttribute('id', 'google');
  botonGoogle.setAttribute('class', 'botones');
  botonGoogle.textContent = 'Iniciar con Google';
  botonGoogle.appendChild(imgGoogle);
  botonGoogle.addEventListener('click', () => {
    google();
  });

  const botonContraseña = document.createElement('button');
  botonContraseña.setAttribute('class', 'invisible');
  botonContraseña.textContent = '¿Olvidaste tu contraseña?';
  botonContraseña.setAttribute('id', 'letras1');
  botonContraseña.addEventListener('click', () => {
  });

  const parrafo = document.createElement('p');
  parrafo.textContent = '¿No tienes cuenta con nosotros?';
  parrafo.setAttribute('class', 'letras2');

  const botonRegistrate = document.createElement('button');
  botonRegistrate.setAttribute('class', 'invisible');
  botonRegistrate.textContent = '¡Registrate aquí!';
  botonRegistrate.setAttribute('id', 'registro');

  botonRegistrate.addEventListener('click', () => {
    onNavigate('/registro');
  });
  seccionGeneral.append(tabla, seccionLogin);

  // eslint-disable-next-line max-len
  seccionLogin.append(logoYummi, inputEmailLogin, inputContraseñaLogin, botonLogin, botonGoogle, botonContraseña, parrafo, botonRegistrate, btnmostrarcontraseña, modal());

  return seccionGeneral;
};
