let hamburger = document.querySelector('.hamburger');
let navCollapse = document.querySelector('.nav-collapse')
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
})

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    }
  }
});