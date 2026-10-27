
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "start";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // The beginning of the story
  start: {
    title: "Your Room",
    character: "MC",
    text: "It's late at night, and everyone in the mansion is asleep. You're lying in bed when you start thinking about the basement. There is one room down there that has been locked for as long as you can remember. Nobody in your family will tell you what is inside.\n\nYou decide to finally find out.",
    choices: [
      {
        text: "Go to the basement",
        nextScene: "basement"
      },
      {
        text: "Look around the house first",
        nextScene: "hallway"
      }

    ]
  },

  entrance: {
    title: "Location 1: Hallway",
    character: "MC",
    text: "You walk into the hallway and notice an old family painting on the wall. Something looks different.",
    choices: [
     
       {
          text: "Look behind the painting",
          action: function () {
            pickUpItem("key");
          },
          nextScene: "HallwayKey"
      }


         {
        text: "Ignore the painting and continue down the hallway",
        nextScene: "library"
      }
    ]
  },

hallwayKey: {
    title: "The Small Key",
    character: "MC",
    text: "You find a small key behind the painting and put it in your pocket.",
    choices: [
      {
        text: "Go to the basement",
        nextScene: "basement"
      },
      {
        text: "Go to the library",
        nextScene: "library"
      }
    ]
  },
  basement: {
    title: "Location 2: Basement",
    character: "MC",
    text: "You find a locked door with three locks. Nearby, there is an old box with a note inside.",
    choices: [
      {
        text: "Search the box",
        action: function () {
          pickUpItem("Second Key");
        },
        nextScene: "basementKey"
      },
      {
        text: "Go to the library",
        nextScene: "library"
      },
      {
        text: "Examine the locked door",
        nextScene: "lockedDoor"
      }
    ]
  },

  basementKey: {
    title: "The Second Key",
    character: "MC",
    text: "You find another key inside the box. The note says that the last lock needs a combination.",
    choices: [
      {
        text: "Go to the library",
        nextScene: "library"
      },
      {
        text: "Return to the locked door",
        nextScene: "lockedDoor"
      }
    ]
  },

  library: {
    title: "Location 3: Library",
    character: "MC",
    text: "You look through the library when an intruder suddenly breaks in!",
    choices: [
      {
        text: "Search the books",
        nextScene: "book"
      },
      {
        text: "Try to tackle the intruder",
        nextScene: "quiz"
      }
    ]
  },

  book: {
    title: "The Hollow Book",
    character: "MC",
    text: "You find a key inside a hollow book. A note says DON'T OPEN THE DOOR, with the combination 16 written beside it. The intruder sees you, so you run away.",
    choices: [
      {
        text: "Take the key and run",
        action: function () {
          pickUpItem("Third Key");
        },
        nextScene: "ritualRoom"
      }
    ]
  },

  quiz: {
    title: "The Intruder",
    character: "MC",
    text: "You try to tackle the intruder. Answer this question: What is the square root of 256?",
    choices: [
      {
        text: "16",
        nextScene: "fightSuccess"
      },
      {
        text: "14",
        action: function () {
          updateHealth(-100);
        },
        nextScene: "gameOver"
      },
      {
        text: "18",
        action: function () {
          updateHealth(-100);
        },
        nextScene: "gameOver"
      }
    ]
  },

  fightSuccess: {
    title: "The Escape",
    character: "MC",
    text: "You punch the intruder and break his nose, but he shoots your arm. You escape into a ritual room.",
    choices: [
      {
        text: "Continue",
        nextScene: "ritualRoom"
      }
    ]
  },

  ritualRoom: {
    title: "The Ritual Room",
    character: "MC",
    text: "You hide in a room filled with strange symbols. You find a ritual circle and a gun. The intruder is still chasing you.",
    choices: [
      {
        text: "Use your blood to start the ritual",
        nextScene: "satan"
      },
      {
        text: "Ignore the circle and look for a weapon",
        nextScene: "summon"
      }
    ]
  },

  satan: {
    title: "Satan Appears",
    character: "MC",
    text: "You use your blood to summon Satan. The room shakes as he appears.",
    choices: [
      {
        text: "Run toward the secret room",
        nextScene: "lockedDoor"
      },
      {
        text: "Grab the gun and shoot Satan",
        action: function () {
          pickUpItem("Gun");
        },
        nextScene: "shootSatan"
      }
    ]
  },

  summon: {
    title: "The Summoning",
    character: "MC",
    text: "The intruder enters and his blood falls onto the ritual circle. Satan appears and slaughters him.",
    choices: [
      {
        text: "Run toward the secret room",
        nextScene: "lockedDoor"
      },
      {
        text: "Grab the gun and shoot Satan",
        action: function () {
          pickUpItem("Gun");
        },
        nextScene: "shootSatan"
      }
    ]
  },

  shootSatan: {
    title: "Twenty Seconds",
    character: "MC",
    text: "You shoot Satan in the head, temporarily paralyzing him. You have time to escape!",
    choices: [
      {
        text: "Run to the locked door",
        nextScene: "lockedDoor"
      }
    ]
  },

  lockedDoor: {
    title: "Location 4: The Locked Door",
    character: "MC",
    text: "You reach the mysterious door. You need three keys and the combination from the note.",
    choices: [
      {
        text: "Try to unlock the door",
        action: unlockDoor
      },
      {
        text: "Enter the combination",
        nextScene: "combination"
      },
      {
        text: "Hide from Satan",
        nextScene: "gameOver"
      }
    ]
  },

  combination: {
    title: "The Final Lock",
    character: "MC",
    text: "Enter the combination from the note. What is the square root of 256?",
    choices: [
      {
        text: "16",
        nextScene: "secretRoom"
      },
      {
        text: "14",
        nextScene: "lockedDoor"
      },
      {
        text: "18",
        nextScene: "lockedDoor"
      }
    ]
  },

  secretRoom: {
    title: "Location 5: The Secret Room",
    character: "MC",
    text: "You enter the room and find a man chained to the wall. A golden sword lies beside him. You recognize him as Matthew the Hero.",
    choices: [
      {
        text: "Release Matthew",
        nextScene: "hero"
      },
      {
        text: "Offer Matthew to Satan",
        nextScene: "betray"
      }
    ]
  },

  hero: {
    title: "The Fallen Hero",
    character: "MC",
    text: "Matthew regains his powers and fights Satan, but Satan defeats him.",
    choices: [
      {
        text: "Accept Satan's offer",
        nextScene: "ending1"
      },
      {
        text: "Take the golden sword and fight",
        action: function () {
          pickUpItem("Golden Sword");
        },
        nextScene: "ending2"
      }
    ]
  },

  betray: {
    title: "The Betrayal",
    character: "MC",
    text: "You offer Matthew to Satan in exchange for your life. Satan accepts and kills the hero.",
    choices: [
      {
        text: "Join Satan",
        nextScene: "ending1"
      },
      {
        text: "Fight Satan with the golden sword",
        action: function () {
          pickUpItem("Golden Sword");
        },
        nextScene: "ending2"
      }
    ]
  },

  ending1: {
    title: "Ending 1: You Walk Away",
    character: "MC",
    text: "You join Satan and help him take over the world. Eventually, Satan betrays you and kills you.",
    choices: [
      {
        text: "Play Again",
        action: resetGame,
        nextScene: "start"
      }
    ]
  },

  ending2: {
    title: "Ending 2: The New Savior",
    character: "MC",
    text: "You use the golden sword to defeat Satan and save the world. You become the new savior!",
    choices: [
      {
        text: "Play Again",
        action: resetGame,
        nextScene: "start"
      }
    ]
  },

  gameOver: {
    title: "Game Over",
    character: "MC",
    text: "You fail to escape Satan. Your story ends here.",
    choices: [
      {
        text: "Try Again",
        action: resetGame,
        nextScene: "start"
      }
    ]
  }
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate field in the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character || "";

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let health = 100;

// Display current health
const healthDisplay = document.getElementById("health-display");

// Create a function to update health
function updateHealth(amount) {
  health += amount;
  healthDisplay.textContent = health;
}

// This refreshes the health display
updateHealth(0);


// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is.
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory
function pickUpItem(itemName) {
  // Add itemName to the inventory array
  // Show the updated inventory on the page
  if (!inventory.includes(itemName)) {
    inventory.push(itemName);
  }

  inventoryDisplay.textContent = inventory.join(", ");
}


// --------------------------------------------------
// CONDITIONAL
// Depending on how you want to implement the conditional logic, you may
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains the required items
// and if so shows the next scene.
function unlockDoor() {
  if (
    inventory.includes("Small Key") &&
    inventory.includes("Second Key") &&
    inventory.includes("Third Key")
  ) {
    updateScene("combination");
  } else {
    messageDisplay.textContent = "The door is locked. You need all three keys.";
  }
}

// Reset the game when the player chooses to play again
function resetGame() {
  health = 100;
  inventory = [];

  healthDisplay.textContent = health;
  inventoryDisplay.textContent = "";
  messageDisplay.textContent = "";
}