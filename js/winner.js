'use strict'
console.log(window.location);

// if (window.location.pathname == '/gameOver.html') {
 let winOrLose = document.getElementById('winOrLose');
 let replayButton = document.getElementById('replay');


 if (localStorage.getItem("win") == "true") {
  winOrLose.textContent = `Congrats on your win! Your points are ${localStorage.getItem('points')}`;
 } else {
  "Sorry for your loss";
 }

 replayButton.addEventListener('click', function () {

  localStorage.setItem("win", false);
  localStorage.setItem("points", 0);
  window.location.href = "/game.html";
 });

// }

// if (window.location.pathname == '/index.html') {
//  localStorage.setItem("win", false);
// }