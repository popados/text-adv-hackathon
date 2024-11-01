import { laboratoryPuzzles } from "./zlaboratory.js";
import {ENTRYHALL} from "./zscenes.js";
import {LABORATORY} from "./zscenes.js";
import {DUNGEON} from "./zscenes.js";
import {monsters} from "./zbestiary.js";

//all functions will be called at bottom of the page

console.log(getRandomNumber);

// //The user wakes up in a room walking into the first room
let startingRoom = true;



// console.log("entryhall: ", ENTRYHALL); 
let randomNum = getRandomNumber(); 
    console.log("randomNum: ", randomNum)
    console.log("first sentence: ", ENTRYHALL[getRandomNumber()].firstSentence);
     //creating a selector to decide which room to go to
    //example only based on left room first, user will be able to choose.

    //user chooses to go to the left room
    let enterLab = true;
    if (enterLab) {
        console.log("sentence" + LABORATORY[getRandomNumber()].firstSentence);
    };

    //after the scenario is read tehy are given a choice of four options
    //1. Hide
    //2. look around
    //3. go back
    //4. go forward
    // function selection(command) {
    //     let response = 'What would you like to do?';
    //     switch (command) {
    //         case 'Hide':
    //             response = 'You hide in the shadows, waiting for the danger to pass.';
    //             break;
    //         case 'look around':
    //             response = 'You look around the room, searching for clues.';
    //             break;
    //         case 'go back':
    //             response = 'You decide to go back to the previous room.';
    //             break;
    //         case 'go forward':
    //             response = 'You move forward, ready to face whatever lies ahead.';
    //             break;
    //         default:
    //             response = 'Please enter a valid command.';
    //     }
    //     return response;
    // }

    //user will have to solve the puzzle based on the one seleceted form the randomizer
    console.log(laboratoryPuzzles[getRandomNumber()].Start);
//if the user solves the puzzle they will be able to find the Ivory key
console.log(laboratoryPuzzles[getRandomNumber()].Objective);
    //if the user fails to solve the puzzle they will have to try again
    console.log("You have failed to solve the puzzle, try again.");
    console.log(laboratoryPuzzles[getRandomNumber()].Hint);
    //if the user solves the puzzle they will be able to go back to the first room

    // insert code for user going back to first room --

    //user selects "go back"
    // --- here
    // Once they return to the first room they will notice that something has changed and will not be able to see the reasoning behind it


    //they can choose to examine the pedastol next or go to the right room next.
    //if they examine the pedastol they will be able to insert the Ivory key and unlock the first lock

    //if they go to the right room they will have to solve the encounter in the right room to get the Ebony key

    //in the right room they will have to look around to find out the problem in the room 
    // the problem being the missing monster.

    //if they find the monster they will have to fight it to get the Ebony key
    // if they are able to find a note before finding the monster tehy will be given a choice to sneakily take the key or aggressively take the key.

    // if they sneak then they will be able to get out of the room without fighting the monster.

    //finally they will be able to go back to the first room and insert the Ebony key into the pedastol and unlock the second lock.

    //as they open the door they will have one last encounter that is randomized from the bestiary

    //they will have a choice of 3 options, fight, run or hide.
let finalRoom = true;
if (finalRoom) {
    console.log("You have made it to the final room, you must face the final encounter.");
    console.log(monsters[getRandomNumber()]);
    console.log("You have three options, fight, run or hide.");
};

    //insert functions below here: ___________

    function getRandomNumber() {
       const randomChoice = Math.floor(Math.random() * 3);
       return randomChoice;
    }

  import inquirer from 'inquirer';

// Set up the solution variable for comparison
const solution = 'ABC'; // Adjust this to whatever sequence you need

// Function to prompt the user three times and combine responses
async function askSequence() {
  let combinedInput = '';
  for (let i = 1; i <= 3; i++) {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'button',
        message: "'Button ${i}: Which button will you press?`",
      },
    ]);
    combinedInput += answer.button;
  }
  if (combinedInput === solution) {
    console.log('\nCorrect sequence! You solved the puzzle!');
  } else {
    console.log('\nIncorrect sequence. Try again.');
  }
}
askSequence();