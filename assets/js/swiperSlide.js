//SWIPER ANIMATION ONE SLIDE CAROUSEL

window.onload = () => {
  var swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 9000,
      speed: 1000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
};
