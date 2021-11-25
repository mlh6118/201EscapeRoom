'use strict'
console.log(window.location);


// if (window.location.pathname == '/gameOver.html') {
let winOrLose = document.getElementById('winOrLose');
let replayButton = document.getElementById('replay');


if (localStorage.getItem("win") == "true") {
  winOrLose.textContent = `Congrats on your win! Your points are ${localStorage.getItem('points')}`;
} else {
  winOrLose.textContent = "Sorry, you were not able to make it out in time. Please try again!";
}

replayButton.addEventListener('click', function () {

  localStorage.setItem("win", false);
  localStorage.setItem("points", 0);
  localStorage.setItem('initials', []);
  window.location.href = "/game.html";
});

let maxTableSize = 5;
// let table = document.getElementById('tbody');


console.log(document.getElementById('tbody').childElementCount);

let table = document.getElementById('tbody');

let newRow = document.createElement('tr');
let points = document.createElement('td');
let userName = document.createElement('td');

newRow.id = 'newRow';
points.id = 'points';
userName.id = 'initials';





function sortAndPlaceAWinner(points) {
  let player1Points = document.querySelector('#firstRow > td:nth-child(1)').textContent;
  let player1 = document.querySelector('#firstRow > td:nth-child(1)');
  let player2Points = document.querySelector('#secondRow > td:nth-child(1)').textContent;
  let player2 = document.querySelector('#secondRow > td:nth-child(1)');

  if (points < player1Points) {
    let row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let points = row.insertCell(0);
    let username = row.insertCell(1);


    points.textContent = `${localStorage.getItem('points')}`;
    userName.textContent = `${localStorage.getItem('initials')}`;

  }
}



// }

// if (window.location.pathname == '/index.html') {
//  localStorage.setItem("win", false);
// }