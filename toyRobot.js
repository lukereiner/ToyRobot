const prompt = require("prompt-sync")();
const {
  startingPrompt,
  rowCheck,
  colCheck,
  faceCheck,
} = require("./functions");

const myTestPrompt = "PLACE*";

let regexPattern = myTestPrompt.replace(/\*/g, ".*");
let regex = new RegExp(regexPattern, "i");

let test1 = "PLACE";
let test2 = "PLACE x,y,f";

console.log(regex.test(test2));

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

  //   console.log(
  //     `toyRobot.js Row: ${x}, Col: ${y}, Face: ${face}, Degrees: ${degrees}`
  //   );

  while (tally < 1) {
    let userPrompt = prompt(
      "Enter your command (PLACE, MOVE, LEFT, RIGHT, REPORT): "
    ).toUpperCase();

    if (regex.test(userPrompt)) {
      let parts = userPrompt.slice(6).split(",");
      x = parts[0].trim();
      x = rowCheck(x, allowedRows);

      y = parts[1].trim();
      y = colCheck(y, allowedCols);

      face = parts[2].trim().toUpperCase();
      face = faceCheck(face, allowedFaces);

      degrees = allowedDegrees[face];
      console.log(`x: ${x}, y: ${y}, face: ${face}, degrees: ${degrees}`);
    } else if (userPrompt === "MOVE") {
      console.log("User input MOVE");
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
