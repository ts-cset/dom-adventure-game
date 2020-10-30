/* DOM Adventure Game */

let username;

// connecting document parts to the script
let game = document.querySelector("#game");
let startingUp = document.querySelector("#starting-up");
let nameInput = document.querySelector("#player-name");
let playerChoice = document.querySelector(".radio-form-section input[type='radio'] checked");
let startButton = document.querySelector("button.start-game");
let continueButton = document.querySelector("button.continue");
let allChoices = document.querySelector("fieldset.radio-form-section");
let choice1 = document.querySelector("#choice-1");
let choice2 = document.querySelector("#choice-2");
let choice3 = document.querySelector("#choice-3");

game.innerHTML = `
	<p>Welcome to The Interrogation.</p>

	<p>The choices you make in this game determine the outcome. You are given multiple choices on how to proceed. You can only choose one.</p>

	<p>Select your path by clicking on its associated button, and then click CONTINUE.</p>
	`;

// the game starts
function startGame() {
	startingUp.remove("#player-name", ".start-game");
	allChoices.style.visibility = "visible";
	continueButton.style.visibility = "visible";
	game.innerHTML = `
	<p>The room is small. No windows. Grey walls. The lights in the ceiling are harsh and cold. You are sitting in a small, uncomfortable chair at a nondescript black table.</p>

	<p>There is a young man seated across from you, regarding you with a look that is both intense and completely unreadable.</p>

	<p>"`+username+`," he says, and it sounds inexplicably wrong, the way his voice crawls over your name like a spider studying its prey. Your jaw tightens a little.</p>

	<p>His expression does not change, which somehow makes everything worse.</p>

	<p>Your head aches dully.</p>

	<p>"Who sent you?" he asks.</p>
	`;
	console.log(choice1.value);
	console.log(playerChoice); // figure out how to store VALUE as player choice!!
}



// While player doesn't have a name, make the name input visible.
// When player has acceptable name, make name input invisible for rest of game.
// When Start is clicked, save the text input as the player's name (username).
function setUsername() {
	if (nameInput.value == "") {
		nameInput.placeholder = "Enter a valid name";
	} else {
		username = nameInput.value;
		event.preventDefault();
		startGame();
	}
}

startButton.addEventListener("click", setUsername);
