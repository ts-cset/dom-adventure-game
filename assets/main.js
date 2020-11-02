/**
 * DOM Adventure Game
 */

document.querySelector('#game');

const room1 = document.querySelector('.room1');

const leftP = document.querySelector('.leftP');
const rightP = document.querySelector('.rightP');

const leftB = document.querySelector('.leftB');
const rightB = document.querySelector('.rightB');

const room2A = document.querySelector('.room2A');
const room2B = document.querySelector('.room2B');

room1.textContent = 'This is the first room. Would you like to go left or right?';

function left() {
  room1.remove();
  leftB.remove();
  rightB.remove();

  leftP.textContent = "Press l to got to the next room";

  document.addEventListener('keypress', newRoom);

  function newRoom(l) {
    leftP.remove();
    room2A.textContent = 'BYE';
  }



}

function right() {
  room1.remove();
  leftB.remove();
  rightB.remove();

  rightP.textContent = "Press e to go to the next room";

  document.addEventListener('keypress', newRoom);

  function newRoom(e) {
    rightP.remove();
    room2B.textContent = 'HI';
  }

}
