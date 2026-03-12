const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});