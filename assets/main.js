/* DOM Adventure Game */

let username;

// connecting document parts to the script
let game = document.querySelector("#game");
let startingUp = document.querySelector("#starting-up");
let nameInput = document.querySelector("#player-name");
let startButton = document.querySelector("button.start-game");
let gameButtons = document.querySelector("#game-buttons");

// the billion buttons
let askButton = document.querySelector("#ask");
let noOneButton = document.querySelector("#no-one");
let silentButton = document.querySelector("#silent");
let tellMeButton = document.querySelector("#tell-me");
let typeButton = document.querySelector("#type");
let getShotButton = document.querySelector("#get-shot");
let revealButton = document.querySelector("#reveal");

game.innerHTML = `
	<p>Welcome to The Interrogation.</p>

	<p>The choices you make in this game determine the outcome. You are given multiple choices on how to proceed. You can only choose one.</p>

	<p>Select your path by clicking on its associated button.</p>
	`;

// the game starts
function startGame() {
	startingUp.remove("#player-name", ".start-game");
	askButton.style.visibility = "visible";
	noOneButton.style.visibility = "visible";
	silentButton.style.visibility = "visible";
	game.innerHTML = `
	<p>The room is small. No windows. Grey walls. The lights in the ceiling are harsh and cold. You are sitting in a small, uncomfortable chair at a nondescript black table.</p>

	<p>There is a young man seated across from you, regarding you with a look that is both intense and completely unreadable.</p>

	<p>"`+username+`," he says, and it sounds inexplicably wrong, the way his voice crawls over your name like a spider studying its prey. Your jaw tightens a little.</p>

	<p>His expression does not change, which somehow makes everything worse.</p>

	<p>Your head aches dully.</p>

	<p>"Who sent you?" he asks.</p>
	`;
}

function ask() {
	event.preventDefault();
	askButton.style.visibility = "hidden";
	silentButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	typeButton.style.visibility = "hidden";
	revealButton.style.visibility = "hidden";
	getShotButton.style.visibility = "hidden";
	noOneButton.style.visibility = "visible";
	revealButton.innerHTML = `"I don't know what you're talking about."`;
	revealButton.style.visibility = "visible";
	game.innerHTML = `
	<p>"Don't play with me," the man says coolly. "You know full well what's going on." He leans forward slightly, and you have an immediate urge to recoil, but you fight it down.</p>

	<p>But he seems to notice. He narrows his eyes. "You may have gotten past the gate guards," he says softly, "but you will not get past me."</p>

	<p>The headache has not worsened, but it still lingers.</p>

	<p>"I've seen others like you," the man continues, his eyes cold as they search yours. "Funnily enough, they all say the same shit at first. They don't know what happened, they don't remember anything, they don't think they're the right person."</p>

	<p>An unpleasant smile spreads slowly across his face. It does not reach his eyes. "I'll ask you again. Who. Sent. You."</p>

	<p>A sharp stab of pain lances through your head, and you wince, but it's gone as soon as it arrives.</p>
	`;
}

function noOne() {
	event.preventDefault();
	getShotButton.innerHTML = "Yes.";
	getShotButton.style.visibility = "visible";
	tellMeButton.style.visibility = "visible";
	askButton.style.visibilty = "hidden";
	noOneButton.style.visibility = "hidden";
	silentButton.style.visibilty = "hidden";
	typeButton.style.visibilty = "hidden";
	revealButton.style.visibility = "hidden";

	game.innerHTML = `
	<p>"Am I supposed to believe you came of your own volition?" The man narrows his eyes. "No instructions, no overseer, no purpose?" He leans forward, forcing you to hold his gaze.</p>
	`;
}

function silent() {
	event.preventDefault();
	silentButton.style.visibility = "hidden";
	typeButton.style.visibility = "visible";
	getShotButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	askButton.style.visibility = "hidden";
	noOneButton.style.visibility = "hidden";
	revealButton.style.visibility = "hidden";
	game.innerHTML = `
	<p>The man watches you, and the more he stares, the more uncomfortable it becomes. His eyes bore holes into your skull, and it almost hurts to hold his gaze, but you do it anyway.</p>

	<p>Your headache is getting worse.</p>

	<p>The man smirks horribly, and you flinch.</p>

	<p>"Your type normally can't shut up," he murmurs. "I'm impressed."</p>
	`;
}

function tellMe() {
	event.preventDefault();
	revealButton.innerHTML = `"Where?"`;
	revealButton.style.visibility = "visible";
	getShotButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	askButton.style.visibilty = "hidden";
	noOneButton.style.visibility = "hidden";
	silentButton.style.visibilty = "hidden";
	typeButton.style.visibilty = "hidden";
	game.innerHTML = `
	<p>The man's eyebrows shoot up, and he gives a surprised bark of a laugh. "Really?" He's grinning.</p>

	<p>You swallow.</p>

	<p>He scoffs. "You sure change tacks fast for how convincing everyone says you are." He leans forward a little. "You're not even trying, are you?"</p>

	<p>"I don't know what you're talking about."</p>

	<p>"Oh, yes, you do." The man's smirk makes your skin crawl. "You were there."</p>
	`;
}

function reveal() {
	event.preventDefault();
	revealButton.style.visibility = "hidden";
	getShotButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	askButton.style.visibilty = "hidden";
	noOneButton.style.visibility = "hidden";
	silentButton.style.visibilty = "hidden";
	typeButton.style.visibilty = "hidden";
	let restart = document.createElement("input");
	restart.type = "submit";
	restart.style.visibility = "visible";
	restart.value = "Restart?"
	gameButtons.appendChild(restart);
	game.innerHTML = `
	<p>The man does not respond. Instead, he pulls out a tablet. Hits play on a video.</p>

	<p>It looks like a security feed from the top of a building. It's night time there, and there are cars driving by in the street. You don't recognize this town.</p>

	<p>And then something changes--the air looks like it's rippling, and then you appear on the sidewalk.</p>

	<p>You stand among the milling crowd of people, eyes vacant as though you're in a trance. You stand like this for so long that people glance back at you as they pass, but you do not move. You do not register your surroundings.</p>

	<p>But then you do move. You cut through a group of people and step off the curb, walking into the middle of the lane. A large truck blares its horn as it approaches, unable to brake quickly enough, but instead of jumping out of the way, you turn to face it.</p>

	<p>The truck vanishes. It's like it drives through an invisible barrier, and then it's just... gone.</p>

	<p>Someone screams. Your head snaps toward the sound, and you can swear your face is rippling, and then the feed is obliterated in a flash of white.</p>

	<p>But the light doesn't stop. It grows brighter, brighter than any digital screen could handle, and the light bores into your eyes, into your skull, and then everything is gone.</p>

	<p>END</p>
	`;
}

function myType() {
	event.preventDefault();
	revealButton.style.visibility = "hidden";
	getShotButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	askButton.style.visibilty = "hidden";
	noOneButton.style.visibility = "hidden";
	silentButton.style.visibilty = "hidden";
	typeButton.style.visibilty = "hidden";
	let restart = document.createElement("input");
	restart.type = "submit";
	restart.value = "Restart?";
	restart.style.visibility = "visible";
	gameButtons.appendChild(restart);
	game.innerHTML() = `
	<p>The man crosses his arms over his chest. "I've dealt with a lot of you before. Acting confused. Saying they don't remember what happened." His smirk widens. "Insisting they're the wrong person."</p>

	<p>"Maybe there's truth to those claims."</p>

	<p>The smirk vanishes. "Or maybe you're not as clever as you think."</p>

	<p>It happens in less than a second--He reaches for his belt, draws out a gun.</p>

	<p>You don't even have time to blink before the bullet enters your skull.</p>

	<p>END</p>
	`;
};

function getShot() {
	event.preventDefault();
	revealButton.style.visibility = "hidden";
	getShotButton.style.visibility = "hidden";
	tellMeButton.style.visibility = "hidden";
	askButton.style.visibilty = "hidden";
	noOneButton.style.visibility = "hidden";
	silentButton.style.visibilty = "hidden";
	typeButton.style.visibilty = "hidden";
	let restart = document.createElement("input");
	restart.type = "submit";
	restart.style.visibility = "visible";
	restart.value = "Restart?"
	gameButtons.appendChild(restart);

	game.innerHTML = `
	<p>The man does not respond. His glare hardens into ice. It's almost like the room itself has gotten colder.</p>

	<p>And then his expression suddenly shifts--it softens. He leans back in his chair, crossing his arms over his chest. His brow is furrowed, but now it's more from contemplation than impatience.</p>

	<p>"You came out of the bar," he says. "You spoke with her, and you told her she had to leave."</p>

	<p>Despite having no idea what he's talking about, you nod.</p>

	<p>"So you were helping her. Is that right?"</p>

	<p>What?</p>

	<p>"Yes," you reply. "I wanted her to be safe." You don't know where the words are coming from, but he seems to buy into them.</p>

	<p>"So...." The man finally breaks eye contact. He seems to be in deep thought. "So it wasn't you."</p>

	<p>Shit, did you kill someone?</p>

	<p>"...No."</p>

	<p>Slowly, the man turns his head back toward you. He stares. You stare back.</p>

	<p>The man smirks. "You're clever."</p>

	<p>It is not a compliment. Not when he says it that way, his eyes darkening with fury even as his grin widens. It's a horrendous thing to watch, and time seems to slow to a crawl as though wanting to draw out the torture.</p>

	<p>Your head throbs.</p>

	<p>The man pulls out a gun, his expression vanishing into an eerie blankness.</p>

	<p>As he aims at your forehead, your whole face pulses, like something is pressing out from within your sinuses, your eyes, your skull--something struggling to escape.</p>

	<p>Something flashes across the man's eyes. Fear. He is afraid. His finger spasms around the trigger, pulling tight.</p>

	<p>The bullet bores into your brain as the thing escapes through your eyes, and you die in a flash of blinding light.</p>

	<p>END</p>
	`;
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
askButton.addEventListener("click", ask);
noOneButton.addEventListener("click", noOne);
silentButton.addEventListener("click", silent);
typeButton.addEventListener("click", myType);
tellMeButton.addEventListener("click", tellMe);

revealButton.addEventListener("click", reveal);
getShotButton.addEventListener("click", getShot);
