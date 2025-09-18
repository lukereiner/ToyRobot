const prompt = require("prompt-sync")();
const {
  startingPrompt,
  rowCheck,
  colCheck,
  faceCheck,
  moveCommand,
  degreesCheck
} = require("./functions");

const myTestPrompt = "PLACE*";

let regexPattern = myTestPrompt.replace(/\*/g, ".*");
let regex = new RegExp(regexPattern, "i");

let test1 = "PLACE";
let test2 = "PLACE x,y,f";

// console.log(regex.test(test2));

const playGame = () => {
  let x;
  const allowedRows = [0, 1, 2, 3, 4, 5];
  let y;
  const allowedCols = [0, 1, 2, 3, 4, 5];
  let face;
  const allowedFaces = ["NORTH", "EAST", "SOUTH", "WEST"];
  let degrees;
  const allowedDegrees = { 0: "NORTH", 90: "EAST", 180: "SOUTH", 270: "WEST" };
  let tally = 0;

  // STARTING COMMAND TO PLACE ROBOT
  [x, y, face, degrees] = startingPrompt(
    x,
    y,
    face,
    degrees,
    allowedRows,
    allowedCols,
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
      x = parseInt(parts[0].trim());
      x = rowCheck(x, allowedRows);

      y = parseInt(parts[1].trim());
      y = colCheck(y, allowedCols);

      face = parts[2].trim().toUpperCase();
      face = faceCheck(face, allowedFaces);

      degrees = Object.keys(allowedDegrees).find(key => allowedDegrees[key] === face);
      console.log(`x: ${x}, y: ${y}, face: ${face}, degrees: ${degrees}`);
    } else if (userPrompt === "MOVE") {
      [ x, y ] = moveCommand(x, y, face);
      console.log(`Row: ${x}, Col: ${y}, face: ${face}, degrees: ${degrees}`);
    } else if (userPrompt === 'LEFT' || userPrompt === 'RIGHT') {
        [ face, degrees ] = degreesCheck(userPrompt, face, degrees, allowedDegrees);
        console.log(`Row: ${x}, Col: ${y}, face: ${face}, degrees: ${degrees}`);
    }

    tally += 1;
  }
};



playGame();
