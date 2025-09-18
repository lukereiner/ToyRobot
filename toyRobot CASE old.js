const prompt = require("prompt-sync")();
const { startingPrompt } = require("./functions");

const myTestPrompt = "PLACE*"

let regexPattern = myTestPrompt.replace(/\*/g, ".*");
let regex = new RegExp(regexPattern, "i");

let test1 = 'PLACE';
let test2 = 'PLACE x,y,f';

console.log(regex.test(test2));

/* let userPrompt = prompt(
  "Enter your command (PLACE, MOVE, LEFT, RIGHT, REPORT): "
).toUpperCase(); */

const playGame = () => {
  let x = 0;
  const allowedRows = ["0", "1", "2", "3", "4", "5"];
  let y = 0;
  const allowedCols = ["0", "1", "2", "3", "4", "5"];
  let face;
  const allowedFaces = ["NORTH", "EAST", "SOUTH", "WEST"];
  let degrees;
  const allowedDegrees = { NORTH: 0, EAST: 90, SOUTH: 180, WEST: 270 };
  let tally = 0;

  // STARTING COMMAND TO PLACE ROBOT
  [x, y, face, degrees] = startingPrompt(
    x,
    y,
    face,
    degrees,
    allowedDegrees,
    allowedFaces
  );

  console.log(
    `toyRobot.js Row: ${x}, Col: ${y}, Face: ${face}, Degrees: ${degrees}`
  );

  while (tally < 2) {
    let userPrompt = prompt(
      "Enter your command (PLACE, MOVE, LEFT, RIGHT, REPORT): "
    ).toUpperCase();

    switch (userPrompt) {
      case regex.test("PLACE*"):
        x = prompt("Input starting row (0-4): ");
        while (x < 0 || x > 4) {
          x = prompt("Outside the table. Input starting row (0-4): ");
        }
        y = prompt("Input starting column (0-4): ");
        while (y < 0 || y > 4) {
          y = prompt("Outside the table. Input starting column (0-4): ");
        }
        console.log(`Row: ${x}, Col: ${y}`);
        break;
      case "MOVE":
        console.log("Move");
        break;
      case "LEFT":
        console.log("Left");
        break;
      case "RIGHT":
        console.log("Right");
        break;
      case "REPORT":
        console.log("Report");
        break;
      default:
        console.log("Incorrect command...");
    }
    tally += 1;
  }
};

const moveCommand = (currentX, currentY, currentFace) => {
  // Check current position with user prompt against table

  while (!allowedRows.includes(currentX)) {
    x = prompt("Outside the table. Cannot move, change your direction. ");
  }
};

playGame();
