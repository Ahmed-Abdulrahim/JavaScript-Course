'use strict';
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const roolDice = document.querySelector('.btn--roll');
const newDice = document.querySelector('.btn--new');
const holdDice = document.querySelector('.btn--hold');
const playerScore0 = document.getElementById('current--0');
const playerScore1 = document.getElementById('current--1');
const active0 = document.querySelector('.player--0');
const active1 = document.querySelector('.player--1');

//Declare Variable
let totalScore, currentScore, activePlayer, gameOver;
//init function
const init = function () {
  diceElement.classList.add('hidden');
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  playerScore0.textContent = 0;
  playerScore1.textContent = 0;
  totalScore = [0, 0];
  currentScore = 0;

  activePlayer = 0;
  active0.classList.remove('player--winner');
  active1.classList.remove('player--winner');
  active0.classList.remove('player--winner');
  active0.classList.add('player--active');
  active1.classList.remove('player--active');
  gameOver = false;
};
init();
//SwitchPlayer
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle th class if found remove it and the oppiste
  active0.classList.toggle('player--active');
  active1.classList.toggle('player--active');
};
//Add Roll Functionality
roolDice.addEventListener('click', function () {
  if (!gameOver) {
    //Genarting random Number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    //remove Class Hidden to Show th Dice Images
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;
    //Add Logic
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
//hold Dice Functionality

holdDice.addEventListener('click', function () {
  if (!gameOver) {
    // Save the currnetScore to total
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    // check if value >=100
    if (totalScore[activePlayer] >= 100) {
      // Add class Winner to Change bgColor
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--Player');
      //hide The Image Dice
      diceElement.classList.add('hidden');
      gameOver = true;
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

newDice.addEventListener('click', init);
