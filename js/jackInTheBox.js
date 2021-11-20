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

// Constructor for Stars.
function Star (dom) {

  // Sets up the DOM for adding to the page.
  this.dom = dom;

  this.renderStars = function() {
    dom.src = 'imgs/smallStar.png';
    dom.classList.add('small');
  };

  this.renderStars();

  // Change star image when clicked.
  dom.onclick = function(event) {
    if (dom.className == 'modal-content small') {
      dom.src = 'imgs/mediumStar.png';
      dom.classList.remove('small');
      dom.classList.add('medium');
    }
    else if (dom.className == 'modal-content medium') {
      dom.src = 'imgs/largeStar.png';
      dom.classList.remove('medium');
      dom.classList.add('large');
    }
    else if (dom.className == 'modal-content large') {
      dom.src = 'imgs/smallStar.png';
      dom.classList.remove('large');
      dom.classList.add('small');
    }
    starSizeCheck();
  };
}

// Create new Star objects.
let star1 = new Star(starImage1);
let star2 = new Star(starImage2);
let star3 = new Star(starImage3);

// console.log(star1.dom.className);

// Function to check the stars.
function starSizeCheck() {
  // alert('You have entered starSizeCheck');
  if (star1.dom.className === 'modal-content small' && star2.dom.className === 'modal-content large' && star3.dom.className === 'modal-content medium') {
    alert('You are correct');
    // Change the jack in the box image.
    jackBoxOpenClose.src = "imgs/openJack.png";
  }
}
