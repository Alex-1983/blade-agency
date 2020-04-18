'use strict';

(function() {

  var ESC_KEYCODE = 27;
  var tickets = document.querySelector(".tickets");
  var ticketsBtn = tickets.querySelectorAll(".tickets__btn");
  var overlay = document.querySelector(".overlay");
  var closeFeedbackBtn = tickets.querySelector(".tickets-feedback__close");
  var body = document.querySelector("body");

  var onKeydown = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closeFeedback(evt);
    }
  };

  var closeFeedback = function() {
    tickets.classList.remove("tickets-feedback--open");
    overlay.classList.remove("overlay-show");
    body.classList.remove("no-scroll");
    overlay.removeEventListener('click', closeFeedback);
    document.removeEventListener('keydown', onKeydown);
  };

  var openFeedback = function() {
    tickets.classList.add("tickets-feedback--open");
    overlay.classList.add("overlay-show");
    body.classList.add("no-scroll");
    overlay.addEventListener('click', closeFeedback);
    document.addEventListener('keydown', onKeydown);
  };

  var onClickCloseBtn = function() {
    closeFeedback();
  };

  for (var i = 0; i < ticketsBtn.length; i++) {
    ticketsBtn[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      tickets.classList.add("tickets-feedback--open");
      openFeedback();
    })
  };

  closeFeedbackBtn.addEventListener('click', onClickCloseBtn);

})();
