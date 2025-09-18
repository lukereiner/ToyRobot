const prompt = require("prompt-sync")();

function startingPrompt(x, y, face, degrees, allowedDegrees, allowedFaces) {
  console.log("Enter the coordinates to PLACE the robot... ");
  x = prompt("Input starting row (0-5): ");
  while (x < 0 || x > 5) {
    x = prompt("Outside the table. Input starting row (0-5): ");
  }
  y = prompt("Input starting column (0-5): ");
  while (y < 0 || y > 5) {
    y = prompt("Outside the table. Input starting column (0-5): ");
  }
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
    x = prompt("Row (x) is outside the table. Enter a number (0-5): ");
  }
  console.log(`rowCheck complete! x is now ${x}`);
  return x;
}

function colCheck(y, allowedCols) {
  while (!allowedCols.includes(y)) {
    y = prompt("Column (y) is outside the table. Enter a number (0-5): ");
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

module.exports = { startingPrompt, rowCheck, colCheck, faceCheck };
