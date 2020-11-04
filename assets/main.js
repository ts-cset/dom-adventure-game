


document.getElementById("game");
// If the player dies, show this scene
const death = function(cause) {
  // Print their cause of death, and then a final message
  console.log(cause);
  console.log("\nGood try. Play Again?");
};


// The final scene, the player has almost won!
const goldRoom = function() {
  // What does the scene look like?
  console.log("\nThis room has a big pile of gold.");

  // Ask for user input, then convert the answer to a number value
  const choice = Number(prompt("\nHow much do you take?\n"));

  // Choice couldn't be converted to a number, so they typed a bad answer
  if (Number.isNaN(choice)) {
    // Stop this scene and send them to the death scene
    return death("Jeeze, learn to type a number...");
  }

  // Choice was over 100, which is far too greedy
  if (choice > 100) {
    // Stop this scene and send them to the death scene
    return death("You took too much and couldn't carry it, unable to escape!");
  }

  // The player made it all the way through the game
  console.log("Hurray! You Win!!!");
};


// Uh oh, a dangerous scene. What will they do?!
const bearRoom = function() {
  // What does the scene look like?
  console.log("\nThere is a bear in here.");
  console.log("It's sitting in front of another door eating from a pot of honey.");
  console.log("\nHow are you going to move the bear?");

  // Create a boolean variable to track where the bear
  let bearMoved = false;

  // This looks like an infinite loop, but it's not because of the return statements
  while (true) {
    // Ask for input
    const choice = prompt("");

    // Create branches for each choice
    if (choice === "take honey") {
      // Stop this scene and send them to the death scene
      return death("Bad call. The angry bear slaps your face off.");
    } else if (choice === "taunt bear") {
      if (!bearMoved) {
        // First time taunting the bear
        console.log("The bear moved, you can go through the door now.");
        bearMoved = true;
      } else {
        // Second time taunting the bear
        return death("The bear get's pissed and chews your leg off.");
      }
    } else if (bearMoved && choice === "open door") {
      // Stop this scene and send them to the gold room
      return goldRoom();
    } else {
      // Unknown input, run the loop again
      console.log("I don't know what that means.");
    }
  }
};
//grab the gun scene
const gun=function(){
  console.log("The killer wakes up scared and shoots you");
  return death();
};
// sneak out of the room scene
// The player survived
const outofroom=function(){
  console.log(" Congrats, you survived");
}
//killer scene
const killer=function(){
  console.log("There is someone sleeping on the floor");
  console.log(" The person has a gun!!!!!!");
  console.log("\n\ What would you do?");

  //create boolean value to track the killer
  let killermoved= false

  //create branch for choices
  while(true){
    const choice=prompt("");
    //
    if(choice==="run"){
      return death("\n\ Oh no, you woke up the killer!!!");
    } else if (choice=== "Try to steal gun"){
      return gun();
    } else if (choice==="sneak out"){
      return outofroom();
     } else{
      console.log("I dont know what that is!")
    }
  }
};

// Shouldn't have taken the left door...
const pitTrap = function() {
  // What does the scene look like?
  console.log("\nThe door swings open to utter darkness.");
  console.log("You step through, but your foot can't find the floor.");
  console.log("It's a big pit. And you're falling.");
  console.log("\n\tAAAAAAAAHHHHHHHHHhhhhhhhhhhhh.....\n");

  // Stop this scene and send them to the death scene
  return death("Sorry, you picked the wrong door and fell to your death");
};


// The player starts here
const Start = function() {
  // What does this scene look like?
  console.log("You awake in a dimly lit room.");
  console.log("There are three doors");

  // Ask for input
  const choice = document.getElementById("door");

  // Create branches for each choice
  if (choice === "first") {
    return bearRoom();
  } else if (choice === "second") {
    return pitTrap();

  } else if (choice=== "third"){
    return killer();
  }
  else {
    return death("You stumble around the room for days and die of starvation");
  }
};


// Start The Game!
Start();
