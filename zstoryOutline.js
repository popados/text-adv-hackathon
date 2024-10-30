

// //The user wakes up in a room walking into the first room
let ENTRYHALL = true;
let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        console.log(ENTRYHALL.eerieSilence);
    } else if (random === 2) {
        console.log(ENTRYHALL.forgottenMystery);
    } else {
        console.log(ENTRYHALL.loomingDarkness);
    }
     //creating a selector to decide which room to go to
    //example only based on left room first, user will be able to choose.

    //user chooses to go to the left room
    let LABORATORY = true;
    if (LABORATORY) {
        let random = Math.floor(Math.random() * 3) + 1;
        if (random === 1) {
            console.log(LABORATORY.coldClinicalHorror);
        } else if (random === 2) {
            console.log(LABORATORY.macabreChaotic);
        } else {
            console.log(LABORATORY.shadowsOfSuffering);
        }
    }
    //after the scenario is read tehy are given a choice of four options
    //1. Hide
    //2. look around
    //3. go back
    //4. go forward

    //user will have to solve the puzzle based on the one seleceted form the randomizer
    //if the user solves the puzzle they will be able to find the Ivory key
    //if the user fails to solve the puzzle they will have to try again

    //if the user solves the puzzle they will be able to go back to the first room
    // insert code for user going back to first room --




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