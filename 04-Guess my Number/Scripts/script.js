'use strict';
//----------------------------------------------------------------
//5
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 23;
document.querySelector('.message').textContent = 'Hello🚗 ';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value);*/
//-------------------------------------------------------------------
//-6
/*document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const result = Number(document.querySelector('.guess').value);
  console.log(typeof result);
  if (!result) {
    document.querySelector('.message').textContent = 'No Number 🚫';
  }
});*/
//--------------------------------------------------------------------
//7

let score = 20;
let random = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

//Reset Function
const reset = function () {
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    editHighScore(score);
  });
};
reset();

//Function to print Message
const editMessge = function (message) {
  document.querySelector('.message').textContent = message;
};
//Function to Edut score
const editScore = function (message) {
  if (score > 1) {
    editMessge(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = 0;
    editMessge('you lost the game ✋');
  }
};
//Correct Answer Function
const correctAnswer = function () {
  document.querySelector('body').style.backgroundColor = '#7a1117';
  document.querySelector('.number').style.width = '30rem';
  editScore('Correct Number 🎉🎉');
  document.querySelector('.number').textContent = random;
};
//Edit High Score
const editHighScore = function (score) {
  if (highScore > score) {
    document.querySelector('.highscore').textContent = highScore;
  } else if (highScore < score && score !== 20) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (highScore === 20) {
    document.querySelector('.highscore').textContent = highScore;
  }
};
//Logic of Code
document.querySelector('.check').addEventListener('click', function () {
  const vCheck = Number(document.querySelector('.guess').value);
  if (vCheck > 20 || vCheck < 0) {
    editMessge('Plz Choose between 1 and 20');
  } else {
    if (vCheck > random) {
      editScore('too High 👆');
    } else if (vCheck < random) {
      editScore('too Low 📪');
    } else {
      correctAnswer();
      editHighScore(score);
    }
  }
});
//Reset function
