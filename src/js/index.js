import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Rafał";
const age = 28;

/**alert("SIEMA!");**/
console.log(`siema! Nazywam się ${firstName} i mam ${age} lat`);

alert(`Siema! Nazywam się ${firstName} i mam ${age} lat`);




const hello = (firstName, age) => {
  console.log(
    `Witaj drogi odwiedzający! Nazywam się ${firstName} i mam ${age} lat`
  );
};

hello("Rafał", 28);

const button=document.querySelector('.action--js');
console.log(button)

button.addEventListener('click',() => {
const heading = document.querySelector(".header-h1--js");
heading.innerHTML = "test wpisu przez JS";
heading.classList.toggle('klasa-z-js')
});

const hamburger=document.querySelector('.hamburger--js');
  
hamburger.addEventListener('click',() => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});
