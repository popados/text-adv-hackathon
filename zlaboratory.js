const laboratoryPuzzles = {
    numberComboPuzzle: {
        Premise: "The player finds a safe in the corner of the laboratory. This is clearly a three digit combination.", 
        Objective: "Need to find the papers that have the numbers on it, there are three with numbers. Two, Five, and Seven.", 
        Hint: "There are papers all over the floor aside from the normal text they are all written in red,five blue,seven, and green,two. a fourth paper says RGB holds the key", 
        Solution: "The user needs to examine the safe and enter the combination 527",
        Start: "The heavy safe in the corner has a three-digit combination lock, waiting for the right numbers to be entered. Among the scattered papers, three catch your eye with colorful writing,A paper with the word 'five' written in blue ink. Another with 'seven' scrawled in green. And a third with 'two' written boldly in red. Nearby, you notice a fourth paper with a note that reads, 'RGB holds the key.' The room is filled with the faint smell of chemicals, and there’s an unsettling silence that hangs in the air.",
        lookAround: "The heavy safe in the corner has a three-digit combination lock, waiting for the right numbers to be entered. Among the scattered papers, three catch your eye with colorful writing,A paper with the word 'five' written in blue ink. Another with 'seven' scrawled in green. And a third with 'two' written boldly in red. Nearby, you notice a fourth paper with a note that reads, 'RGB holds the key.' The room is filled with the faint smell of chemicals, and there’s an unsettling silence that hangs in the air."
    },
    lightActivationPuzzle: {
        Premise: "The player encounters three light switches labeled 'R,' 'G,' and 'B' next to a locked box that says, 'Only full light reveals the key.'",
        Objective: "The player must activate all three switches to create the 'full light.'",
        Hint: "The note nearby says, 'All three will reveal the way.'",
        Solution: "When the player turns on all three switches (R, G, B), the full light is created, and a compartment opens, showing the key.",
        Start: "The cold light in the room illuminates a sturdy cabinet bolted to the wall, secured by a simple mechanism with three large buttons. Each button is a different color: red, green, and blue.",
        lookAround: "You see a small room with a locked cabinet, on the side of the cabinet there is a handwritten note is stuck beside the cabinet, reading, 'The order is as easy as RGB "
    },
    buttonMemorySecquence: {
        Premise: "There’s a locked cabinet with three large buttons in different colors: red, blue, and green. A nearby note reads, 'The order is as easy as RGB.'",
        Objective: "The player must press the buttons in the order specified by the note",
        Hint: "The note explicitly gives the sequence: 'RGB.'",
        Solution: "The player presses the buttons in this order (Red, Green, Blue), and the cabinet unlocks, revealing the key.",
        Start: "At the far end of the lab, a small locked box catches your attention. Above it, three light switches labeled “R,” “G,” and “B” are set into the wall. Beside the box is a scribbled note, saying, “Only full light reveals the key.” The hint is simple, but you can tell that flipping the switches in the right combination might illuminate more than just the room.",
        lookaround: "You see the buttons on the lock blinking and you get a sense that there might be a pattern, however with the flashes and the sparks in the room you are unable to tell. ",
    },
}
