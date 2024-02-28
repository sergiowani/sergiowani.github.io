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
    item.addEventListener('click', function () {
      navLinks.classList.remove('show');
    });
  });
});