// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-unresolved
import { serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { guardarReceta } from '../../lib/firestore.js';
import { getAuth } from '../../lib/Imports-firebase-store.js';

export const crearPost = () => {
  const formPublicacion = document.createElement('form');
  formPublicacion.setAttribute('id', 'formPublicacion');
  const labelReceta = document.createElement('label');
  labelReceta.setAttribute('id', 'labelReceta');
  labelReceta.textContent = 'Receta:';
  const inputReceta = document.createElement('input');
  inputReceta.setAttribute('id', 'inputReceta');
  inputReceta.setAttribute('type', 'text');
  inputReceta.setAttribute('placeholder', 'Aquí va el nombre de tu receta');
  const labelIngredientes = document.createElement('label');
  labelIngredientes.setAttribute('id', 'labelIngredientes');
  labelIngredientes.textContent = 'Ingredientes:';
  const inputIngredientes = document.createElement('textarea');
  inputIngredientes.setAttribute('id', 'inputIngredientes');
  inputIngredientes.setAttribute('placeholder', 'Aquí la lista de ingredientes');
  const labelProcedimiento = document.createElement('label');
  labelProcedimiento.setAttribute('id', 'labelProcedimiento');
  labelProcedimiento.textContent = 'Procedimiento:';
  const inputProcedimiento = document.createElement('textarea');
  inputProcedimiento.setAttribute('id', 'inputProcedimiento');
  inputProcedimiento.setAttribute('placeholder', 'Aquí el procedimiento');
  inputProcedimiento.setAttribute('type', 'text');
  const labelCategoria = document.createElement('label');
  labelCategoria.setAttribute('id', 'labelCategoria');
  labelCategoria.textContent = 'Categoría:';
  const selectCategoria = document.createElement('select');
  selectCategoria.setAttribute('id', 'selectCategoria');
  const catSalado = document.createElement('option');
  catSalado.textContent = 'Salado';
  catSalado.setAttribute('value', 'Salado');
  const catSaladoImg = document.createElement('IMG');
  catSaladoImg.src = '../images/buebito.png';
  catSaladoImg.setAttribute('class', 'catSaladoImg');
  catSalado.appendChild(catSaladoImg);
  const catDulce = document.createElement('option');
  catDulce.textContent = 'Dulce';
  catDulce.setAttribute('value', 'Dulce');
  const catDulceImg = document.createElement('IMG');
  catDulceImg.src = '../images/Dulce.png';
  catDulce.appendChild(catDulceImg);
  const catVegano = document.createElement('option');
  catVegano.textContent = 'Vegano';
  catVegano.setAttribute('value', 'Vegano');
  const catVeganoImg = document.createElement('IMG');
  catVeganoImg.src = '../images/PolloVegano.png';
  selectCategoria.append(catSalado, catDulce, catVegano);
  const btnActualizar = document.createElement('button');
  btnActualizar.textContent = 'Actualizar';
  btnActualizar.setAttribute('id', 'btnActualizar');
  const btnPublicar = document.createElement('button');
  btnPublicar.textContent = 'Publicar';
  btnPublicar.setAttribute('id', 'btnPostear');
  const autentificacion = getAuth();
  const usuario = autentificacion.currentUser;
  const fecha = serverTimestamp();
  const fechaI = new Date();
  const fechaIString = `${fechaI.getDate()}/${fechaI.getMonth() + 1}/${fechaI.getFullYear()}`;
  const meGusta = [];
  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    guardarReceta(
      fecha,
      usuario.photoURL,
      usuario.displayName || usuario.email,
      fechaIString,
      inputReceta.value,
      inputIngredientes.value,
      inputProcedimiento.value,
      selectCategoria.value,
      usuario.uid,
      meGusta,
    );
    formPublicacion.style.visibility = 'hidden';
    formPublicacion.style.opacity = '0';
  });
  const cerrarModal = document.createElement('button');
  cerrarModal.setAttribute('id', 'cerrarModal');
  const Xmodal = document.createElement('IMG');
  Xmodal.src = './images/CerrarModal.png';
  cerrarModal.appendChild(Xmodal);
  cerrarModal.addEventListener('click', (e) => {
    e.preventDefault();
    formPublicacion.style.visibility = 'hidden';
  });

  // eslint-disable-next-line max-len
  formPublicacion.append(cerrarModal, labelReceta, inputReceta, labelIngredientes, inputIngredientes, labelProcedimiento, inputProcedimiento, labelCategoria, selectCategoria, btnActualizar, btnPublicar);
  return formPublicacion;
};
