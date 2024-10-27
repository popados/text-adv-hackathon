// //PUZZLE 1: NUMBER COMBINATION
// Premise: The player finds a safe in the corner of the laboratory. This is clearly a three digit combination. 
// Objective: Need to find the papers that have the numbers on it, there are three with numbers. Two, Five, and Seven. 
// Hint: There are papers all over the floor aside from the normal text they are all written in red,five blue,seven, and green,two. a fourth paper says RGB holds the key 
// Solution: The user needs to examine the safe and enter the combination 527
const numPuzzleLookaround = "The heavy safe in the corner has a three-digit combination lock, waiting for the right numbers to be entered. Among the scattered papers, three catch your eye with colorful writing,A paper with the word 'five' written in blue ink. Another with 'seven' scrawled in green. And a third with 'two' written boldly in red. Nearby, you notice a fourth paper with a note that reads, 'RGB holds the key.' The room is filled with the faint smell of chemicals, and there’s an unsettling silence that hangs in the air."
const numberPuzzle = "As you enter the laboratory, your eyes fall on a heavy safe in the corner, its metal face bearing a three-digit combination lock. Strewn across the floor are crumpled papers, most faded or worn, but three catch your eye with brightly colored numbers scrawled across them: 'five' in blue, 'seven' in green, and 'two' in red. Another paper lies nearby, with a cryptic note scribbled on it: 'RGB holds the key.'"
const puzzleOneNumberNotes = "You look around at the papers and discover three numbers written down"
const puzzleOneNumbers = "It would seem that the numbers 2 5 and 7"
const moreNumbers = "The two is written in green, the seven is written in blue, and five is written in red"
const combination = "527"


// PUZZLE 2: BUTTON SEQUENCE MEMORY
// Premise: There’s a locked cabinet with three large buttons in different colors: red, blue, and green. A nearby note reads, “The order is as easy as RGB.”
// Objective: The player must press the buttons in the order specified by the note.
// Hint: The note explicitly gives the sequence: “RGB.”
// Solution: The player presses the buttons in this order (Red, Green, Blue), and the cabinet unlocks, revealing the key.
const buttonPuzzle = "The cold light in the room illuminates a sturdy cabinet bolted to the wall, secured by a simple mechanism with three large buttons. Each button is a different color: red, green, and blue. A handwritten note is stuck beside the cabinet, reading, 'The order is as easy as RGB.;"
const correctButtonOrder = "RGB"
let promptOne = "Which button do you press first?"
let promptTwo = "Which button do you press second?"
let promptThree = "Which button do you press third?"
let buttonSubmission = [promptOne + promptTwo + promptThree]
if (buttonSubmission === correctButtonOrder) {
    "You were able to open the cabinet with the correct order, Inside you find an Ivory key with an intricate design. Beside it there is a note that reads 'If you play with the toys gently they will give you what they want, otherwise you are in for a surprise'. The note looks as if it was hastily scrawled as if a last lesson to those who need it."
} else {
    "Nothing happens, it would seem you have the wrong connection."
}


// PUZZLE 3: LIGHT ACTIVATION PUZZLE 
// Premise: The player encounters three light switches labeled “R,” “G,” and “B” next to a locked box that says, “Only full light reveals the key.”
// Objective: The player must activate all three switches to create the “full light.”
// Hint: The note nearby says, “All three will reveal the way.”
// Solution: When the player turns on all three switches (R, G, B), the full light is created, and a compartment opens, showing the key.
const lightPuzzle = "At the far end of the lab, a small locked box catches your attention. Above it, three light switches labeled “R,” “G,” and “B” are set into the wall. Beside the box is a scribbled note, saying, “Only full light reveals the key.” The hint is simple, but you can tell that flipping the switches in the right combination might illuminate more than just the room."
const lightPuzzleButtons = "RGB"


//BUTTONS
const Red = "R"
const Blue = "B"
const Green = "G"