'use strict';

(function() {
  var participants = document.querySelector(".participants");
  var participantsSlider = participants.querySelector(".swiper-container");
  var pagination = participants.querySelector(".slider__pagination");
  var pagination = participants.querySelector(".swiper-pagination");
  var buttonPrevious = participants.querySelector(".slider__btn--prev");
  var buttonNext = participants.querySelector(".slider__btn--next");

  var participants = new Swiper(participantsSlider, {
    slidesPerView: 3,
    spaceBetween: 48,
    loop: true,

    breakpoints: {

      1040: {
        slidesPerView: 'auto',
        spaceBetween: 46,
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
