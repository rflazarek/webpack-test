




const hamburger=document.querySelector('.hamburger--js');
  
hamburger.addEventListener('click',() => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});

let isDark = false;
const switchModes = document.querySelector('.mode--js');
switchModes.addEventListener('click', () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#fefefe");
    document.documentElement.style.setProperty("--text-color", "#333333");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#333333");
    document.documentElement.style.setProperty("--text-color", "#fefefe");
    isDark = true;
  }
});