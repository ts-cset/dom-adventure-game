function bearRoom() {
    document.getElementById("bear").innerHTML = "There is a bear in here!!!!It's sitting in front of another door eating from a pot of honey.How are you going to move the bear?"
let input= document.createElement("input");
input.type="text";
let bear2= input.value;
document.getElementById("bear").appendChild(input);
if (bear2 === "take honey") {
  // Stop this scene and send them to the death scene
  var h = document.createElement("p")                // Create a <p> element
var t = document.createTextNode("Bad call. The angry bear slaps your face off.");     // Create a text node
h.appendChild(t);
document.getElementById("bear").appendChild(h);
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
  };

  function pitTrap(){
    document.getElementById("trap").innerHTML = "The door swings open to utter darkness.You step through, but your foot can't find the floor.It's a big pit. And you're falling AAAAAAAAHHHHHHHHHhhhhhhhhhhhh....."
  };
  function killer(){
    document.getElementById("kill").innerHTML = "You stumble around the room for days and die of starvation"
  };
