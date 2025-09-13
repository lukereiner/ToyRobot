const prompt = require("prompt-sync")();

let userPrompt = prompt('Enter your command (PLACE, MOVE, LEFT, RIGHT, REPORT): ').toUpperCase();

const playGame = () => {
    let x = 0;
    let y = 0;
    let tally = 0;

    while (tally < 1) {
        switch (userPrompt) {
            case 'PLACE' :
                x = prompt('Input starting row (0-5): ')
                while (x < 0 || x > 5) {
                    x = prompt('Outside the table. Input starting row (0-5): ')
                }
                y = prompt('Input starting column (0-5): ')
                while (y < 0 || y > 5) {
                    y = prompt('Outside the table. Input starting column (0-5): ')
                }
                console.log(`Row: ${x}, Col: ${y}`)
                break;
            case 'MOVE':
                console.log('Move');
                break;
            case 'LEFT':
                console.log('Left');
                break;
            case 'RIGHT':
                console.log('Right');
                break;
            case 'REPORT':
                console.log('Report');
                break;
            default:
                console.log('Incorrect command...')
        }
        tally += 1;
    }
}

const promptLogic = (prompt) => {
    if (prompt.slice(0,5) === 'PLACE') {
        console.log('It is PLACE');
    } else if (prompt === 'MOVE') {
        console.log('It is MOVE');
    }
}

//promptLogic(userStartInput);

playGame();