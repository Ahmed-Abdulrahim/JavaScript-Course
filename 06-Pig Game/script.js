'use strict';
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const roolDice = document.querySelector('.btn--roll');
const newDice = document.querySelector('.btn--new');
const holdDice = document.querySelector('.btn--hold');
const Score0 = document.getElementById('current--0');
const score1 = document.getElementById('current--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let Score = 0;
//Add Roll Functionality
roolDice.addEventListener('click', function () {
  //Genarting random Number
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  //remove Class Hidden to Show th Dice Images
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;
  //Add Logic
  if (diceNumber !== 1) {
    Score += diceNumber;
    Score0.textContent = Score;
  } else {
    Score = 0;
    Score0.textContent = Score;
  }
});
