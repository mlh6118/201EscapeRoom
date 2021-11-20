'use strict'
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

(function foo(){

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
    }

  }, 1000);
})();


//what is the order of tests in the escape key?
// 1. Box 2.JIB 3.Book
//2 needed to start for logical test 
// For MVP 1.box 2.book
//escapekey needs to equal "2||4||6&&"





 let randomQuestion = Math.floor(Math.random()*db.length);
 console.log(randomQuestion);



let res = prompt(db[randomQuestion].question);



if(res == db[randomQuestion].answer) {

 escapekey += res;
}else{

  console.log('false');
}
console.log(escapekey);




let initial1 = prompt('What is your first initial?');
let initial2 = prompt('What is your middle initial (if you don\'t have one, select "x"');
let initial3 = prompt('What is the initial of your family name?');

let nameArr = [initial1, initial2, initial3];
let passwordNameArr = [];

for (let j=0; j<nameArr.length; j++){
 let randomName = Math.floor(Math.random() * nameArr.length);
 passwordNameArr.push(nameArr[randomName]);
}

console.log('nameArr: '+ nameArr, 'passwordNameArr: '+passwordNameArr)


let nameQuizAnswer = Math.floor(Math.random() * 10);
escapekey += nameQuizAnswer;


console.log(escapekey);

let roomExitTest = prompt('What is the password to leave?');
if(roomExitTest === escapekey){
 console.log('Congrats, you\'ve made it out')
}else{
 console.log('Sorry, wrong key!');
}


