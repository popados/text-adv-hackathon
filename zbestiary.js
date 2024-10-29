// Define each monster as an object with ASCII art, name, description, and hint
const monsters = [
 {
        name: "Sloth (Evil Bear)",
        ascii: `
        __         __
    _( o\\       /o )_
    (__  /      \\   __)
       / /  ..  \\ \\
      ( (   /\\   ) )
      \\  '--'--'  /
        '._._.._._.'
        `,
        description: "A slow but terrifying evil bear, lumbering toward you with heavy steps.",
        hint: "The bear is slow. Maybe running is the best choice."
    },
 {
        name: "Pride (Vampire)",
        ascii: `
      / \\    / \\
      (   '---'   )
       \\       /
        /) . . (\\
       ( (  -  ) )
     '-/  \\/  \\-'
        /      \\
      (_/\\/\\_) 
        `,
        description: "A proud vampire with an air of arrogance, distracted by its own reflection.",
        hint: "The vampire might be distracted by its reflection. Perhaps hiding could work."
    },
 {
        name: "Greed (Slug)",
        ascii: `
       __
     /' o\`\\
    :       :
    \`-. .-'
      | |
     (   )
      \`\"'
        `,
        description: "A greedy, sluggish creature that craves everything in its path but is quite weak.",
        hint: "This creature doesn’t seem strong. Maybe it’s best to fight it."
    },
 {
        name: "Wrath (Red Hulk)",
        ascii: `
        ________
        /          \\
       |  >    <    |
       |   --o--     |
       |     --        |
     /_\\________/_\\
        `,
        description: "A giant creature seething with rage that grows stronger as it gets angrier.",
        hint: "Running might be wise, as fighting it would only make it angrier."
    },
 {
        name: "Greed (Thousand Eyes)",
        ascii: `
          ____
      ( O O O )
    ( O O O O )
   ( O O O O O )
   \`-----------\`
        `,
        description: "A creature with a thousand eyes, though it can’t see everything at once.",
        hint: "Perhaps hiding would be effective since it can’t focus on everything at once."
    },
 {
    name: "Experiment Gone Wrong",
    ascii: `
            ,     ,
         (  o o  )
       / \\_X_/ \\
      /    \\_/    \\
     /                \\
    (_/             \\_)
      \\             /
          '--._.--'
    `,
    description: "An experiment that should have never seen the light of day. Its twisted form staggers toward you, a grotesque blend of animal and machine, with a disturbing look in its eyes.",
    hint: "It looks unpredictable and unstable. Perhaps keeping your distance would be wise."
    }
  ];

// Function to display a monster with ASCII art and hints
function encounterMonster(monster) {
    console.log(`You encounter: ${monster.name}`);
    console.log(monster.ascii);
    console.log(monster.description);
    console.log(`Hint: ${monster.hint}`);
}

// Example encounters with each monster
// for( const monster of monsters){
//   encounterMonster(monster)
// }



// encounterMonster(monsters.slothBear);
// encounterMonster(monsters.vampire);
// encounterMonster(monsters.slug);
// encounterMonster(monsters.redHulk);
// encounterMonster(monsters.thousandEyes);
