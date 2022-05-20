const hamMenu = document.querySelector('.navigation__menu');
const navMenu = document.querySelector('.navigation__links');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const navLink = document.querySelectorAll('.navigation__link');
  navLink.forEach((e) => e.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    navMenu.classList.remove('active');
  }));