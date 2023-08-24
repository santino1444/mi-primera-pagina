//botón del menú para dispositivos móviles
const menuBtn = document.querySelector('.menu-btn');

//enlaces del menú
const navLinks = document.querySelector('.nav-links');

//evento al botón del menú
menuBtn.addEventListener('click', () => {
   // Alternar la clase active a los enlaces del menú
   navLinks.classList.toggle('active');
});
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
