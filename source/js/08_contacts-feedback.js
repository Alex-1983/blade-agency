'use strict';

(function() {

  var ESC_KEYCODE = 27;
  var contacts = document.querySelector(".contacts");
  var formBtn = contacts.querySelector(".form__btn");
  var openFeedbackBtn = contacts.querySelector(".contacts-feedback__link");
  var closeFeedbackBtn = contacts.querySelector(".contacts-feedback__close");


  var onKeydown = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closeFeedback(evt);
    }
  };

  var closeFeedback = function() {
    contacts.classList.remove("contacts-feedback--open");
    document.removeEventListener('keydown', onKeydown);
  };

  var openFeedback = function() {
    contacts.classList.add("contacts-feedback--open");
    document.addEventListener('keydown', onKeydown);
  };

  var onClickCloseBtn = function() {
    closeFeedback();
  };

  var onClickOpenBtn = function(evt) {
    evt.preventDefault();
    openFeedback();
  };

  openFeedbackBtn.addEventListener('click', onClickOpenBtn);
  closeFeedbackBtn.addEventListener('click', onClickCloseBtn);

})();
