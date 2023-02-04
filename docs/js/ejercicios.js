"use strict";
//Ejercicio1
const $exer1Form = document.getElementById('exer1Form');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

$exer1Form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Hola, ${$exer1Form.name.value}!`, 'success');
});

const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
}
//Pedir edad al usuario//
const $form = document.getElementById('form');
  
$form.addEventListener('submit', mayor);

function mayor (event) {
  event.preventDefault();
  const $edad = document.getElementById('edad');
  const edad = $edad.value;

  if (edad == null || edad.length == 0){
    document.getElementById('resultado'). innerHTML='Escribe tu edad por favor';
  } else if (edad >= 18 && edad <= 100) {
    document.getElementById('resultado'). innerHTML='Felicidades!. Eres mayor de edad!';
  } else if (edad <= 17) {
     document.getElementById('resultado'). innerHTML='Aun eres menor de edad! :(';
  };
}
  