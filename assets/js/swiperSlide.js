//SWIPER ANIMATION ONE SLIDE CAROUSEL

window.onload = () => {
  var swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 2500,
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
