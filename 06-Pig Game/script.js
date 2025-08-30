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

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;
//active Player
let activePlayer = 0;
//Add Roll Functionality
roolDice.addEventListener('click', function () {
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
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle th class if found remove it and the oppiste
    active0.classList.toggle('player--active');
    active1.classList.toggle('player--active');
  }
});
