'use strict' ;

const $form = document.getElementById('form');
const $legend = document.getElementsByTagName('legend')[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');



const formulario = {
    username: null,
    password: null,
    accept: null,
};

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }


$form.username.addEventListener('input', (addEventListener)=>{
    formulario.username = event.target.value;
} );

$form.password.addEventListener('input', (addEventListener)=>{
    formulario.password = event.target.value;
} );

$form.accept.addEventListener('change', (addEventListener)=>{
    formulario.accept = event.target.checked;
})

$form.addEventListener('submit', (addEventListener)=> {
    event.preventDefault();
    console.log(formulario);
    
    if (checkFormulario() === true) {
        checkPermitido(formulario)
    } else {
        $legend.classList.add('text-danger');
        alert('Por favor revise sus datos. Todos los campos * son obligatorios!', 'danger');
    }

});

function checkFormulario() {
    if(formulario.username && formulario.password && formulario.accept ) {
        return true;}
    else {
        return false;}
    }

function checkPermitido(obj) {
    const permitido = {
        username: 'bit',
        password: 2023,
        accept: true,
    };

if (
    obj.username === permitido.username &&
    parseInt(obj.password) === permitido.password &&
    obj.accept === permitido.accept ) {
    window.open('https://morales19062020.github.io/bit06exercises/ejercicios.html', '_self');   
}else{
    alert('Acceso Denegado. Datos incorrectos. ', 'warning');; 
}

}