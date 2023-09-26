'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎁 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Method
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there no is input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    //players win the game
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '😊 Correct Number!';
    displayMessage('😊 Correct Number!');

    //Show Secret no
    document.querySelector('.number').textContent = secretNumber;

    //When player win the game change color
    document.querySelector('body').style.backgroundColor = '#96bb7c';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (score !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High' : '📈 Too low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📈 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😥 You lost the game';
      displayMessage('😥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
       //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
*/
});

///////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler.

2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables.

3. Restore the initial conditions of the message, number, score and guess input
fields.

4. Also restore the original background color (#222) and number width (15rem).
*/

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing..';
  //displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //color and width
  document.querySelector('body').style.backgroundColor = ' #433520';
  document.querySelector('.number').style.width = '15rem';
});
