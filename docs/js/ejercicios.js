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
//Suma de numeros//
const $ejercicio1 = document.getElementById('ejercicio1');
const $sumar = document.getElementById('ejercicio1')


$ejercicio1.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc1num1 = parseInt($ejercicio1.ejerc1num1.value)
  const ejerc1num2 = parseInt($ejercicio1.ejerc1num2.value)

  resultado1.placeholder = ejerc1num1 + ejerc1num2;
});
//Resta de numeros//
const $ejercicio2 = document.getElementById('ejercicio2');
const $restar = document.getElementById('ejercicio2')

$ejercicio2.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc2num1 = $ejercicio2.ejerc2num1.value;
  const ejerc2num2 = $ejercicio2.ejerc2num2.value;

  resultado2.placeholder = ejerc2num1 - ejerc2num2;

});
