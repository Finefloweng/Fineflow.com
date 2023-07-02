const swiper = new Swiper('.swiper', {
 
autoplay: {

delay: 3000,
disableOnInteraction: false,

},


  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-links");
  navBar.classList.toggle("active");
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});