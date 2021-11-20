'use strict'

if(localStorage.getItem("win") === true){
  localStorage.setItem("win", false);
  localStorage.setItem("points", 0);
  window.location.href = "/index.html";
}


let db = [

  {
    question: "What is 1+1"
    , answer: 2
  }
  , {
    question: "What is 2+2"
    , answer: 4
  }
  , {
    question: "What is 3+3"
    , answer: 6
  }
];

let escapekey = '';



let roomTotalTime = 130;

  const countdown = setInterval(function () {

    let seconds = 60;
    let minutes = 60;

    let minutesLeft = Math.trunc(roomTotalTime / minutes)

    let secondsLeft = Math.trunc(roomTotalTime % minutes)

    //Forget CUP, let's modify directly for time
    if (minutesLeft < 10) {
      document.querySelector('#minutes').innerHTML = '0' + minutesLeft;
    } else {
      document.querySelector('#minutes').innerHTML = minutesLeft;
    }

    if (secondsLeft < 10) {
      document.querySelector('#seconds').innerHTML = '0' + secondsLeft;
    } else {
      document.querySelector('#seconds').innerHTML = secondsLeft;
    }

    roomTotalTime--;

    if (roomTotalTime <= 0) {
      clearInterval(countdown);
      alert('Game Over.');
      localStorage.setItem("win", false);
      window.location.href = "/gameOver.html";
    }

  }, 1000);


//what is the order of tests in the escape key?
// 1. BOOK 2. JIB 3. Blocks
//2 needed to start for logical test 
// For MVP 1.box 2.book
//escapekey needs to equal "2||4||6&&"

//Treasure Box escapes

//selectors
let book = document.getElementById('book');
let jib = document.getElementById('jib');
let blocks = document.getElementById('blocks');
let chest = document.getElementById('chest');


book.addEventListener('click', function () {
  let randomQuestion = Math.floor(Math.random() * db.length);
  console.log(randomQuestion);
  let res = prompt(db[randomQuestion].question);



  if (res == db[randomQuestion].answer) {
    escapekey += res;
  } else {
    console.log('false');
  }
  console.log(escapekey);

});






blocks.addEventListener('click', function () {
  let initial1 = prompt('What is your first initial?');
  let initial2 = prompt('What is your middle initial (if you don\'t have one, select "x"');
  let initial3 = prompt('What is the initial of your family name?');

  let nameArr = [initial1, initial2, initial3];
  let passwordNameArr = [];

  for (let j = 0; j < nameArr.length; j++) {
    let randomName = Math.floor(Math.random() * nameArr.length);
    passwordNameArr.push(nameArr[randomName]);
  }

  console.log('nameArr: ' + nameArr, 'passwordNameArr: ' + passwordNameArr)


  let nameQuizAnswer = Math.floor(Math.random() * 10);
  escapekey += nameQuizAnswer;

});




// here be bugs without server side programming anything can be cheated.
chest.addEventListener('click', function () {
  console.log(escapekey);
  let roomExitTest = prompt('What is the password to leave?');
  if (roomExitTest === escapekey) {
    console.log('Congrats, you\'ve made it out');
    localStorage.setItem("win", true);
    localStorage.setItem("points", roomTotalTime);
    window.location.href = "/gameOver.html";
  } else {
    console.log('Sorry, wrong key!');
  }

});






// Constructor for Stars.
function Star(dom) {

  // Sets up the DOM for adding to the page.
  this.dom = dom;

  this.renderStars = function () {
    dom.src = 'imgs/smallStar.png';
    dom.classList.add('small');
  };

  this.renderStars();

  // Change star image when clicked.
  dom.onclick = function (event) {
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

// // Create new Star objects.
// let star1 = new Star(starImage1);
// let star2 = new Star(starImage2);
// let star3 = new Star(starImage3);

// // console.log(star1.dom.className);

// // Function to check the stars.
// function starSizeCheck() {
//   // alert('You have entered starSizeCheck');
//   if (star1.dom.className === 'modal-content small' && star2.dom.className === 'modal-content large' && star3.dom.className === 'modal-content medium') {
//     alert('You are correct');
//     // Change the jack in the box image.
//     jackBoxOpenClose.src = "imgs/openJack.png";
//   }
// }