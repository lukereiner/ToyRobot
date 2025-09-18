const prompt = require("prompt-sync")();

function startingPrompt(x, y, face, degrees, allowedRows, allowedCols, allowedDegrees, allowedFaces) {
  console.log("Enter the coordinates to PLACE the robot... ");
  x = parseInt(prompt("Input starting row (0-5): "));
  while (!allowedRows.includes(x)) {
    x = parseInt(prompt("Row (x) is outside the table. Enter a number (0-5): "));
  }
  console.log(typeof x);
  y = parseInt(prompt("Input starting column (0-5): "));
  while (!allowedCols.includes(y)) {
    y = parseInt(prompt("Column (y) is outside the table. Enter a number (0-5): "));
  }
  console.log(typeof y)
  face = prompt(
    "Input the direction the robot faces (North, South, East, West): "
  ).toUpperCase();
  degrees = allowedDegrees[face];
  while (!allowedFaces.includes(face)) {
    face = prompt(
      "Incorrect direction. Input NORTH, SOUTH, EAST, OR WEST: "
    ).toUpperCase();
    degrees = allowedDegrees[face];
  }

  // LOG STARTING COORDINATES
  console.log(`Row: ${x}, Col: ${y}, Face: ${face}, Degrees: ${degrees}`);
  return [x, y, face, degrees, allowedDegrees, allowedFaces];
}

function rowCheck(x, allowedRows) {
  while (!allowedRows.includes(x)) {
    x = parseInt(prompt("Row (x) is outside the table. Enter a number (0-5): "));
  }
  console.log(`rowCheck complete! x is now ${x}`);
  return x;
}

function colCheck(y, allowedCols) {
  while (!allowedCols.includes(y)) {
    y = parseInt(prompt("Column (y) is outside the table. Enter a number (0-5): "));
  }
  console.log(`colCheck complete! y is now ${y}`);
  return y;
}

function faceCheck(face, allowedFaces) {
  while (!allowedFaces.includes(face)) {
    face = prompt("Not a valid face. Enter NORTH, SOUTH, EAST, or WEST: ").trim().toUpperCase();
  }
  console.log(`faceCheck complete! face is now ${face}`);
  return face;
}

// Moves robot one (1) unit forward in the direction it is currently facing
// NORTH -> Y + 1
// EAST -> X + 1
// SOUTH -> Y - 1
// WEST -> X - 1
function moveCommand(x, y, face) {
    let newX = x;
    let newY = y;
  // Check current position with user prompt against table
  if (face === 'NORTH') {
    if (y === 5) {
        console.log(`You cannot move any higher ${face}`);
    } else {
        newY += 1;
        //return [newX, newY]
    }
  }
  return [ newX, newY];

  /* while (!allowedRows.includes(currentX)) {
    x = prompt("Outside the table. Cannot move, change your direction. ");
  } */
};

module.exports = { startingPrompt, rowCheck, colCheck, faceCheck, moveCommand };
