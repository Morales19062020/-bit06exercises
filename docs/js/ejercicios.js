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
//Pedir un número y mostrar los números pares desde 1 hasta n//
const $ejercicio5 = document.getElementById('ejercicio5');
const $multiplosDeDos = document.getElementById('ejercicio5')

$ejercicio5.addEventListener('submit', (addEventListener) => {
  event.preventDefault();


  const ejerc5num1 = $ejercicio5.ejerc5num1.value
  let pares = '';
  for (let i = 1; i <= ejerc5num1; i++) {
    if (i % 2 === 0) {
      pares += i + ', ';
    }
  }
  resultado5.placeholder = `N=${ejerc5num1}, pares:${pares}`;
})
// Pedir un número, mostrar el doble de n//
const $ejercicio6 = document.getElementById('ejercicio6');
const $multiplosDe = document.getElementById('ejercicio6')

$ejercicio6.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc6num1 = $ejercicio6.ejerc6num1.value
  const resultadof6 = ejerc6num1 * 2;
  resultado6.placeholder = `El doble de=${ejerc6num1}, es=${resultadof6}`;
})
//Pedir un número, mostrar el triple de n//
const $ejercicio7 = document.getElementById('ejercicio7');
const $triplede = document.getElementById('ejercicio7')

$ejercicio7.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc7num1 = $ejercicio7.ejerc7num1.value
  const resultadof7 = ejerc7num1 * 3;
  resultado7.placeholder = `El triple de=${ejerc7num1}, es=${resultadof7}`;

})
//Pedir un número, mostrar la mitad de n//
const $ejercicio8 = document.getElementById('ejercicio8');
const $lamitadde = document.getElementById('ejercicio8')

$ejercicio8.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc8num1 = $ejercicio8.ejerc8num1.value
  const resultadof8 = ejerc8num1 / 2;

  resultado8.placeholder = `La mitad de=${ejerc8num1}, es=${resultadof8}`;
})
//Pedir un número, mostrar la tercera parte de n//
const $ejercicio9 = document.getElementById('ejercicio9');
const $tercerapartede = document.getElementById('ejercicio9')

$ejercicio9.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc9num1 = $ejercicio9.ejerc9num1.value
  const resultadof9 = ejerc9num1 / 3;

  resultado9.placeholder = `La tercera parte de=${ejerc9num1}, es=${resultadof9}`;
})
//Pedir un número, mostrar el cuadrado de n//
const $ejercicio10 = document.getElementById('ejercicio10');
const $cuadradode = document.getElementById('ejercicio10')

$ejercicio10.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc10num1 = $ejercicio10.ejerc10num1.value
  const resultadof10 = ejerc10num1 * ejerc10num1;
  resultado10.placeholder = `El cuadrado de=${ejerc10num1}, es=${resultadof10}`;
})
//Pedir un número, mostrar n reducido en 5//
const $ejercicio11 = document.getElementById('ejercicio11');
const $reducidoen5 = document.getElementById('ejercicio11')

$ejercicio11.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc11num1 = $ejercicio11.ejerc11num1.value
  const resultadof11 = ejerc11num1 - 5;
  resultado11.placeholder = `${ejerc11num1} reducido en 5 es: ${resultadof11}`;

})
//Pedir un número, mostrar el doble de n más 4//
const $ejercicio12 = document.getElementById('ejercicio12');
const $doblemas4 = document.getElementById('ejercicio12')

$ejercicio12.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc12num1 = $ejercicio12.ejerc12num1.value
  const resultadof12 = ejerc12num1 * 2 + 4;
  resultado12.placeholder = `El doble de ${ejerc12num1} más 4 es: ${resultadof12}`;
})
//Pedir un número, mostrar si es positivo, negativo o si es cero//
const $ejercicio13 = document.getElementById('ejercicio13');
const $negpos = document.getElementById('ejercicio13')

$ejercicio13.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc13num1 = $ejercicio13.ejerc13num1.value

  resultado13.placeholder
  if (ejerc13num1 === 0) {
    resultado13.placeholder = 'Ingresó el número cero.';
  } else if (ejerc13num1 < 0) {
    resultado13.placeholder = 'Ingresó un número negativo.';
  } else {
    resultado13.placeholder = 'Ingresó un número positivo.';
  }
})
//Pedir un número, mostrar si es par, impar o si es cero//
const $ejercicio14 = document.getElementById('ejercicio14');
const $imppar = document.getElementById('ejercicio14')

$ejercicio14.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc14num1 = $ejercicio14.ejerc14num1.value

  resultado14.placeholder
  if (ejerc14num1 === 0) {
    resultado14.placeholder = ejerc14num1 + ' es cero.';
  } else if (ejerc14num1 % 2 === 0) {
    resultado14.placeholder = ejerc14num1 + ' es un número par.';
  } else {
    resultado14.placeholder = ejerc14num1 + ' es un número impar.';
  }
})
//Pedir un número, mostrar si es un número primo o no//
const $ejercicio15 = document.getElementById('ejercicio15');
const $primoono = document.getElementById('ejercicio15')

$ejercicio15.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc15num1 = $ejercicio15.ejerc15num1.value

  if (ejerc15num1 < 2) {
    resultado15.placeholder = 'Error, debes ingresar un número mayor que 1';
    return;
    console.log('Esta línea NO se ejecutará porque está después de RETURN');
  }
  let contador = 0;
  for (let i = 1; i <= ejerc15num1; i++) {
    if (ejerc15num1 % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    resultado15.placeholder = `El ${ejerc15num1}, es primo`;
  } else {
    resultado15.placeholder = `El ${ejerc15num1}, no es primo`;
  }
})
//Pedir dos números, mostrar el resto de la división//
const $ejercicio16 = document.getElementById('ejercicio16');
const $residuores = document.getElementById('ejercicio16')

$ejercicio16.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc16num1 = $ejercicio16.ejerc16num1.value
  const ejerc16num2 = $ejercicio16.ejerc16num2.value

  const resultadof16 = ejerc16num1 % ejerc16num2;
  resultado16.placeholder = `${ejerc16num1} mod ${ejerc16num2} = ${resultadof16}`;
})
//Pedir dos números, mostrar si el primer número es divisible por el segundo//
const $ejercicio17 = document.getElementById('ejercicio17');
const $divisible = document.getElementById('ejercicio17')

$ejercicio17.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc17num1 = $ejercicio17.ejerc17num1.value
  const ejerc17num2 = $ejercicio17.ejerc17num2.value

  const resultado = ejerc17num1 % ejerc17num2;
  resultado === 0
    ? resultado17.placeholder = `${ejerc17num1} SI es divisible por ${ejerc17num2}`
    : resultado17.placeholder = `${ejerc17num1} NO es divisible por ${ejerc17num2}`;
  /* if (resultado === 0) {
    alert(`${numero1} SI es divisible por ${numero2}`);
  } else {
    alert(`${numero1} NO es divisible por ${numero2}`);
  } */
})
//Pedir dos números y el nombre de una operación, mostrar el resultado//
const $ejercicio18 = document.getElementById('ejercicio18');
const $operacion = document.getElementById('ejercicio18')

$ejercicio18.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc18num1 = $ejercicio18.ejerc18num1.value
  const ejerc18num2 = $ejercicio18.ejerc18num2.value
  const operacion = $ejercicio18.operacion.value

  switch (operacion) {
    case 'sumar':
      resultado18.placeholder = `${ejerc18num1} + ${ejerc18num2} = ${ejerc18num1 + ejerc18num2}`;
      break;
    case 'restar':
      resultado18.placeholder = `${ejerc18num1} - ${ejerc18num2} = ${ejerc18num1 - ejerc18num2}`;
      break;
    case 'multiplicar':
      resultado18.placeholder = `${ejerc18num1} x ${ejerc18num2} = ${ejerc18num1 * ejerc18num2}`;
      break;
    case 'dividir':
      resultado18.placeholder = `${ejerc18num1} / ${ejerc18num2} = ${ejerc18num1 / ejerc18num2}`;
      break;
    default:
      resultado18.placeholder = `La operación "${operacion}" no existe en esta función.`;
      break;
  }
})
//Pedir un número, mostrar la suma total desde 1 hasta n//
const $ejercicio19 = document.getElementById('ejercicio19');
const $sumahasta = document.getElementById('ejercicio19')

$ejercicio19.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc19num1 = $ejercicio19.ejerc19num1.value

  let resultadof19 = 0;

  let i = 1;
  while (i <= ejerc19num1) {
    resultadof19 += i;
    i++;
  }
  resultado19.placeholder = 'La suma total es: ' + resultadof19;
})
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n//
const $ejercicio20 = document.getElementById('ejercicio20');
const $sumapares = document.getElementById('ejercicio20')

$ejercicio20.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc20num1 = $ejercicio20.ejerc20num1.value

  let resultadof20 = 0;

  for (let i = 1; i <= ejerc20num1; i++) {
    if (i % 2 === 0) {
      resultadof20 = resultado20 + i;
    }
  }

  resultado20.placeholder = 'La suma total de los pares es: ' + resultadof20;
})
//Pedir un número, mostrar la suma de los números impares desde 1 hasta n//
const $ejercicio21 = document.getElementById('ejercicio21');
const $sumaimpa = document.getElementById('ejercicio21')

$ejercicio21.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc21num1 = $ejercicio21.ejerc21num1.value

  let resultadof21 = 0;

  for (let i = 1; i <= ejerc21num1; i++) {
    if (i % 2 !== 0) {
      resultadof21 = resultado21 + i;
    }
  }

  resultado21.placeholder = 'La suma total de los impares es: ' + resultadof21;
})
//Pedir un número, mostrar multiplos de 3 desde 1 hasta n//
const $ejercicio22 = document.getElementById('ejercicio22');
const $multiplo3 = document.getElementById('ejercicio22')

$ejercicio22.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc22num1 = $ejercicio22.ejerc22num1.value

  let i = 1;
  while (i <= ejerc22num1) {
    if (i % 3 === 0) {
      resultado22.placeholder = ' multiplos de 3 desde 1 hasta' + ejerc22num1; + i;
    } i++;
  }

})
//Pedir un número, mostrar los números desde n hasta 0//
const $ejercicio23 = document.getElementById('ejercicio23');
const $desde0 = document.getElementById('ejercicio23')

$ejercicio23.addEventListener('submit', (addEventListener) => {
  event.preventDefault();

  const ejerc23num1 = $ejercicio23.ejerc23num1.value

  for (let i = ejerc23num1; i > -1; i--) {
    resultado23.placeholder = ' multiplos de 3 desde 1 hasta' + ejerc23num1;
  }
})