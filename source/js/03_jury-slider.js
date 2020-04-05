'use strict';

(function() {
  var jury = document.querySelector("#jury");
  var jurySlider = jury.querySelector(".swiper-container");
  var pagination = jury.querySelector(".slider__pagination");
  var pagination = jury.querySelector(".swiper-pagination");
  var buttonPrevious = jury.querySelector(".slider__btn--prev");
  var buttonNext = jury.querySelector(".slider__btn--next");

  var jurySwiper = new Swiper(jurySlider, {
    slidesPerView: 3,
    spaceBetween: 48,
    loop: true,

    breakpoints: {

      1040: {
        slidesPerView: 'auto',
        spaceBetween: 39,
        loopedSlides: 6,

        loopFillGroupWithBlank: true,
        updateOnWindowResize: true,
      },
    },

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    },

    pagination: {
      el: pagination,
      clickable: true,
    }

  });

})();
