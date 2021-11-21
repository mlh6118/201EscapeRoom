'use strict'

if (localStorage.getItem("win") === true) {
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

let res = '';
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

let randomQuestion = '';

book.addEventListener('click', function () {
  randomQuestion = Math.floor(Math.random() * db.length);
  console.log(randomQuestion);
  res = db[randomQuestion].question;

  let bookModal = new PromptModal('book');

});

let passwordNameArr = [];

blocks.addEventListener('click', function () {
  let helloWorld = new PromptModal('blocks');


  let nameArr = [];
  let enter = document.getElementById('enter');
  // console.log(enter);


  let x = enter.addEventListener('click', function (e) {
    // console.log(e);
    e.preventDefault();
    // alert('I was pressed');
    let inputValue1 = document.getElementById('letter1').value;
    let inputValue2 = document.getElementById('letter2').value;
    let inputValue3 = document.getElementById('letter3').value;
    // console.log(inputValue1, inputValue2, inputValue3);
    nameArr = [inputValue1, inputValue2, inputValue3];



    console.log('nameArr:' + nameArr)


    for (let j = nameArr.length; j--;) {
      let randomName = Math.floor(Math.random() * nameArr.length);
      console.log('j: ' + j, 'randomName: ' + randomName, 'nameArr :' + nameArr, 'nameArr.length: ' + nameArr.length);
      // passwordNameArr.(nameArr[randomName]);
      let newLetter = nameArr.splice(randomName, 1);
      passwordNameArr.push(newLetter);
    }

    console.log('nameArr: ' + nameArr, 'passwordNameArr: ' + passwordNameArr)


    let formFinished = document.getElementById('formdiv');
    let modalbox = document.getElementById('modal');
    modalbox.removeChild(formFinished);


    let letter1 = document.createElement('div');
    letter1.id = 'letter1';
    modalbox.appendChild(letter1);

    let letter2 = document.createElement('div');
    letter2.id = 'letter2';
    modalbox.appendChild(letter2);

    let letter3 = document.createElement('div');
    letter3.id = 'letter3';
    modalbox.appendChild(letter3);

    let block1 = new Block(letter1, passwordNameArr);
    let block2 = new Block(letter2, passwordNameArr);
    let block3 = new Block(letter3, passwordNameArr);




  });

  // let nameQuizAnswer = Math.floor(Math.random() * 10);
  // escapekey += nameQuizAnswer;
  // console.log(escapekey);

});


function Block(dom, passwordNameArr) {

  // Sets up the DOM for adding to the page.
  this.dom = dom;
  this.passwordNameArr = passwordNameArr;

  function renderBlock() {
    dom.textContent = passwordNameArr[0];
    dom.classList.add('block');
  };

  renderBlock();

  // Change star image when clicked.
  dom.onclick = function (event) {
    if (dom.textContent == passwordNameArr[0]) {
      dom.textContent = passwordNameArr[1];
    }
    else if (dom.textContent == passwordNameArr[1]) {
      dom.textContent = passwordNameArr[2];
    }
    else if (dom.textContent == passwordNameArr[2]) {
      dom.textContent = passwordNameArr[0];
    }
    blockLetterCheck();
  };
}


// Function to check the stars.
function blockLetterCheck() {
  let blockdom1 = document.getElementById('letter1');

  let blockdom2 = document.getElementById('letter2');
  let blockdom3 = document.getElementById('letter3');
  console.log('HERE :' + passwordNameArr);
  // let jackBoxOpenClose = document.getElementById('jack-in-the-box');
  // alert('You have entered starSizeCheck');
  if (blockdom1.textContent == passwordNameArr[0] && blockdom2.textContent == passwordNameArr[1] && blockdom3.textContent == passwordNameArr[2]) {
    alert('You are correct');


    let blockRandomNum = Math.floor(Math.random() * 10);
    escapekey += blockRandomNum;
    refreshEscapeKey(escapekey);
    console.log(escapekey);

    // Change the jack in the box image.
    // jackBoxOpenClose.src = "imgs/openJack.png";

  }
}



















jib.addEventListener('click', function () {
  // alert('click\'d buddy');
  let helloWorld = new PromptModal('jib');
  let starimg1 = new Star(star1);
  let starimg2 = new Star(star2);
  let starimg3 = new Star(star3);

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
    if (dom.className == 'small') {
      dom.src = 'imgs/mediumStar.png';
      dom.classList.remove('small');
      dom.classList.add('medium');
    }
    else if (dom.className == 'medium') {
      dom.src = 'imgs/largeStar.png';
      dom.classList.remove('medium');
      dom.classList.add('large');
    }
    else if (dom.className == 'large') {
      dom.src = 'imgs/smallStar.png';
      dom.classList.remove('large');
      dom.classList.add('small');
    }
    starSizeCheck();
  };
}

// Function to check the stars.
function starSizeCheck() {

  // let jackBoxOpenClose = document.getElementById('jack-in-the-box');
  // alert('You have entered starSizeCheck');
  if (star1.className === 'small' && star2.className === 'large' && star3.className === 'medium') {
    alert('You are correct');


    let starRandomNum = Math.floor(Math.random() * 10);
    escapekey += starRandomNum;
    refreshEscapeKey(escapekey);
    console.log(escapekey);
    let parent = document.getElementById('modal').parentElement;
    let modal = document.getElementById('modal');
    parent.removeChild(modal);

    // Change the jack in the box image.
    // jackBoxOpenClose.src = "imgs/openJack.png";

  }
}












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







// // Create new Star objects.
// let star1 = new Star(starImage1);
// let star2 = new Star(starImage2);
// let star3 = new Star(starImage3);

// // console.log(star1.dom.className);

function refreshEscapeKey(escapekey) {
  let balloons = document.getElementById('balloons');
  balloons.textContent = escapekey;
}

