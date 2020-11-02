/**
 * DOM Adventure Game
 */

document.querySelector('#game');

const room1 = document.querySelector('.room1');

const leftP = document.querySelector('.leftP');
const rightP = document.querySelector('.rightP');

const leftB = document.querySelector('.leftB');
const rightB = document.querySelector('.rightB');

room1.textContent = 'This is the first room. Would you like to go left or right?';

function left() {
  room1.remove();
  leftB.remove();
  rightB.remove();

  leftP.textContent = "HI";

}

function right() {
  room1.remove();
  leftB.remove();
  rightB.remove();

  rightP.textContent = "BYE";

}
