// Observar un evento cuando el Usuario Haga Click
/*
document.querySelector('#Submit').addEventListener('click', boton);

function boton(event){
    event.preventDefault();
    let elemento;
    elemento = event.target;
    console.log(submit.value);
};

// cambiar un elemento cuando un Usuario Haga Click
document.querySelector('#heading').addEventListener('click',cambio)

function cambio(event){
    event.target.innerText = 'Texto Cambiado';
};
*/
// variables
const busqueda = document.querySelector('#heading');
document.querySelector('#submit').addEventListener('keypress', dato);

function dato(event){
    document.querySelector('#heading').innerText = busqueda.value;
    console.log(dato.value);
};