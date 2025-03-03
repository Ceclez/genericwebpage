    //// SELECCIÓN DE ELEMENTOS
const enlaceHeader = document.querySelector('ul') ;
const newListElement = document.createElement('li') ;
const newAnchor = document.createElement('a') ;
const subTitle = document.querySelector('h2') ;

    // Establece atributos ↓↓
newListElement.setAttribute('class', 'newListElement') ;
    // Añade un texto ↓↓
newAnchor.textContent = 'Nuevo elemento' ;
newAnchor.style.fontSize = '1.6rem' ;

    // Añade el nuevo elemento ↓↓
enlaceHeader.appendChild(newListElement) ;
newListElement.appendChild(newAnchor) ;

    //Capturar ancho de pantalla ↓↓
const screenWidth = window.innerWidth ;
if (screenWidth < 575) {
    if (newListElement) {
        newListElement.remove() ;
    } 
}


subTitle.addEventListener('click', () => {
    if (subTitle.style.textDecoration !== 'underline') {
        subTitle.style.textDecoration = 'underline' ;
    } else {
        subTitle.style.textDecoration = 'none' ;
    }
})


    //// SELECCIÓN DE ENCABEZADO Y FUNCIÓN DE CAMBIO DE COLOR
const header = document.querySelector('main h1') ;

header.addEventListener('click', () => {
    hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
    newColor = '#' ;

    for (let i = 0; i < 6; i++) {
        newColor += hex[randomColor()] ;
    }

    function randomColor() {
        return Math.floor(Math.random() * hex.length) ;
    }

    header.style.backgroundColor = newColor ;
})


    //// OTROS MÉTODOS JS
//---- Atributos ----//
const paraAnchor = document.querySelector('section a') ;
paraAnchor.setAttribute('target', '_blank') ;
paraAnchor.setAttribute('href', 'https://codepen.io/Jes-s-Cece-a/pen/NPWrLdw') ; 

console.log(paraAnchor.getAttribute('href')) ;
console.log(paraAnchor.hasAttribute('href')) ;
//paraAnchor.removeAttribute('href') ; // Remueve el atributo 'href'


//---- Clases ----//
console.log(enlaceHeader.firstElementChild) ; // Devuelve el primer elemento de la lista 'ul'
console.log(enlaceHeader.lastElementChild) ; // Devuelve el último elemento de la lista 'ul'

//newAnchor.classList.add('blue') ; // Añade la clase 'blue del CSS al último elemento de la lista
//newAnchor.classList.replace('blue', 'green') ; // Reemplaza la clase 'blue' por la clase 'green'
//newAnchor.classList.remove('green') ; // Elimina la clase 'green' del último elemento de la lista
//button.style ; // Devuelve un objeto con todas las propiedades CSS posibles de aplicar

const button = document.querySelector('section a') ;
button.addEventListener('click', () => {
    button.innerText = 'Link' ; // Cambia el texto del botón
    button.classList.toggle('blueButton') ;
})


//---- Eventos para el 'aside' ----//
const buyLogo = document.querySelector('header .buy-logo') ;
const aside = document.querySelector('aside') ;
const closeIcon = document.querySelector('aside .close-icon') ;
let count = 1 ;

buyLogo.addEventListener('click', () => {
    if (count === 0) {
        aside.style.animation = 'asideAnimation2 500ms ease-in-out forwards' ;
        count++ ;
    } else {
        aside.style.animation = 'asideAnimation1 500ms ease-in-out forwards' ;
        count-- ;
    }
})

closeIcon.addEventListener('click', () => {
    aside.style.animation = 'asideAnimation2 500ms ease-in-out forwards' ;
    count++ ;
})


//---- Eventos para borrar elementos de la lista ----//
const trashIcon = document.querySelectorAll('.trashIcon') ;
let safeArticles = [] ;

trashIcon.forEach((e => { //'forEach' recorre cada ícono
    e.addEventListener('click', () => { // Se le añade un evento clic
        const deletedItem = e.closest('li') ; // Se guarda cada elemento padre (a) en una variable
        deletedItem.remove() ;
        safeArticles.push(deletedItem) ;
    }) ;
})) ;


//---- Eventos para agregar elementos borrados de la lista ----//
const buyButton = document.querySelector('aside button') ;
const articlesList = document.querySelector('aside ul') ;

buyButton.addEventListener('click', () => {
    if (safeArticles.length > 0) {
        let result = safeArticles.shift() ;
        articlesList.appendChild(result) ;
    }
})


//---- Evento de doble clic y 'mouse-in n' out'----//
const mainTitle = document.querySelector('header h1') ;

mainTitle.addEventListener('dblclick', () => {
    if (mainTitle.textContent === '¡Clicado!') {
        mainTitle.textContent = 'Web Genérica' ;
    } else {
        mainTitle.textContent = '¡Clicado!' ;
    }
}) ;

mainTitle.addEventListener('mouseenter', () => {
    mainTitle.style.color = '#ff0000' ;
})

mainTitle.addEventListener('mouseleave', () => {
    mainTitle.style.color = '#fff' ;
})

mainTitle.addEventListener('click', () => {
    mainTitle.style.color = '#0000ff' ;
})

/*
//---- Acceder a atributos personalizados (NO INCLUIDO EN EL DOM) ----//

//-- HTML: 
// <div id="user" data-id="123" data-name="John"></div> JavaScript:
// Acceder al valor del atributo de datos 'id' 
var userId = document.getElementById('user').dataset.id ; 
// Acceder al valor del atributo de datos 'name' 
var userName = document.getElementById('user').dataset.name ;


//---- Crear un nuevo fragmento de documento (NO INCLUIDO EN EL DOM) ----// 
var fragment = document.createDocumentFragment(); 
// Crear y agregar múltiples elementos al fragmento 
for (var i = 0; i < 10; i++) { 
    var newDiv = document.createElement('div') ; 
    newDiv.textContent = 'Elemento ' + i ;  
    fragment.appendChild(newDiv) ; 
} 
//Agregar el fragmento al DOM 
document.getElementById('container').appendChild(fragment) ; 
// El fragmento se agregará al DOM, pero no se mostrará en el árbol de elementos


//---- Eventos personalizados (NO INCLUIDO EN EL DOM) ----//
//JavaScript: Definir un nuevo evento personalizado 
var customEvent = new Event('custom') ; 
// Disparar el evento personalizado en un elemento específico 
document.dispatchEvent(customEvent) ; 
//Asignar un controlador de eventos al evento personalizado 
document.addEventListener('custom', function() { 
    console.log('Se disparó el evento personalizado') ; 
}) ;
*/