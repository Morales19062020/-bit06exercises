"use strict";
//Ejercicio Saludar//
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
//Pon tu Edad//
const $mayorDeEdad = document.getElementById('form2');
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

$mayorDeEdad.addEventListener('submit', (e) => {
  e.preventDefault();
  mayordeedad();
});


function mayordeedad() {
  const $edad = document.getElementById('edad').value;
  if ($edad >= 18) {
    alert2('Eres mayor de edad',  'success');
} else if($edad <= 18){
    alert2('No eres mayor de edad',  'success');
  
} else {
  alert2('Debes ingresar tu edad')

}
}
const alert2 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');
  
    alertPlaceholder2.append(wrapper)
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
//Multiplicacion//
const $ejercicio3 = document.getElementById('ejercicio3');
const $multiplicacion = document.getElementById('ejercicio3')

$ejercicio3.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc3num1 = $ejercicio3.ejerc3num1.value
  const ejerc3num2 = $ejercicio3.ejerc3num2.value

  resultado3.placeholder = ejerc3num1 * ejerc3num2;

});
//Division//
const $ejercicio4 = document.getElementById('ejercicio4');
const $division = document.getElementById('ejercicio4')

$ejercicio4.addEventListener('submit', (addEventListener) => {
  event.preventDefault();
  const ejerc4num1 = $ejercicio4.ejerc4num1.value
  const ejerc4num2 = $ejercicio4.ejerc4num2.value
  resultado4.placeholder = ejerc4num1 / ejerc4num2;
}); 
