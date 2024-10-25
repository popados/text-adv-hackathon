
let readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });

// Import the prompt-sync module
// const prompt = require('prompt-sync')();

// Get the user input
function getName(){rl.question('What is your name? ',(input) => {
    rl.question('choose up or down ', (direction) => {
        if (direction == 'right') {
            console.log('you are going right')
        }
        if(direction == 'down'){console.log('you are going down')} 
        if( direction == 'up'){console.log('you are going up')}
        else if (direction == 'left') {console.log('you are going left')}
    console.log(`your name is: ${input}`)
    // rl.close()
    rl.question('choose left or right: ', (direction) => {
        console.log(`you picked: ${direction}`)
        // rl.close()
            // console.log(`you picked: ${direction}`)
        rl.close()
    }
)})})

}

getName()
// prompt("What is your name?")

// Print the user input
// console.log(`Hey there ${name}!`);
// const readline = require('prompt-sync')();

// prompt("What is your name?")

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Enter Your Name: ', (input) =&gt; {
//     console.log(`Your Name is : ${input}`);
//     rl.close();
// });
