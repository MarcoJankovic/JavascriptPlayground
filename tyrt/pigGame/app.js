'use strict';

// Selecting elements //
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting conditions //
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let score = 0;
let currentScore = 0;


// rolling dice funtionallity //
btnRoll.addEventListener('click', function () {

    // 1. Generate random dice nr 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore; // change later

    } else {

    }

});

