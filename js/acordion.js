'use strict'

const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')


// Cuando haga click en etiqueta h2
//Quitar la clase activo de todos los bloque
//Vamos a añadir la clase activo al bloque con la posicion del h2

h2.forEach( (cadaH2, i) => {
    h2[i].addEventListener('click', ()=> {

      bloque.forEach( (cadaBloque, i) => {
          bloque[i].classList.remove('activo')
      });
      bloque[i].classList.add('activo')
    });
});