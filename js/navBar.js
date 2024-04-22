let toggleNav = () => {
  let navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
  let navLinks = document.querySelector('.nav-links');
  let burger = document.querySelector('.burger');

  burger.addEventListener('click', function () {
    toggleNav();
  });

  let navListItems = document.querySelectorAll('.nav-links li');

  navListItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      // Obtener el hash del enlace
      let hash = item.querySelector('a').getAttribute('href');

      // Verificar si el enlace es interno o externo
      if (!hash.startsWith('http')) {
        // Prevenir el comportamiento predeterminado del enlace interno
        event.preventDefault();

        // Cerrar el menú
        navLinks.classList.remove('show');

        // Ir directamente a la sección correspondiente sin scroll
        if (hash && document.querySelector(hash)) {
          document.querySelector(hash).scrollIntoView({
            behavior: 'auto'
          });
        }
      }
    });
  });
});
