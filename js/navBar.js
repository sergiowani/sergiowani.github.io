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
      // Prevenir el comportamiento predeterminado del enlace
      event.preventDefault();
      
      // Obtener el hash del enlace
      let hash = item.querySelector('a').getAttribute('href');

      // Cerrar el menú
      navLinks.classList.remove('show');

      // Ir directamente a la sección correspondiente sin scroll
      if (hash && document.querySelector(hash)) {
        document.querySelector(hash).scrollIntoView({
          behavior: 'auto'
        });
      }
    });
  });
});