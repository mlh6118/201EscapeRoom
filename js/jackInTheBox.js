'use strict';

// Global variables.
let starImage1 = document.getElementById('star1');
let starImage2 = document.getElementById('star2');
let starImage3 = document.getElementById('star3');
let jackBoxOpenClose = document.getElementById('jack-in-the-box');

// Get the Jack in the Box modal
let modal = document.getElementById('jackModal');

// Get the button that opens the modal
let buttonJackModal = document.getElementById('jackButton');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('closeJack')[0];

// When the user clicks on the Jack in the Box button, open the modal
buttonJackModal.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks n <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


