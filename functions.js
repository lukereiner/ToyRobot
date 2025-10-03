const prompt = require("prompt-sync")();

function rowCheck(x, allowedRows) {
  while (!allowedRows.includes(x)) {
    x = parseInt(
      prompt("Row (x) is outside the table. Enter a number (0-5): ")
    );
  }
  return x;
}

function colCheck(y, allowedCols) {
  while (!allowedCols.includes(y)) {
    y = parseInt(
      prompt("Column (y) is outside the table. Enter a number (0-5): ")
    );
  }
  return y;
}

function faceCheck(face, allowedFaces) {
  while (!allowedFaces.includes(face)) {
    face = prompt("Not a valid face. Enter NORTH, SOUTH, EAST, or WEST: ")
      .trim()
      .toUpperCase();
  }
  return face;
}

// Moves robot one (1) unit forward in the direction it is currently facing
function moveCommand(x, y, face) {
  let newX = x;
  let newY = y;

  if (face === "NORTH") {
    if (y === 5) {
      console.log(`You cannot move any further ${face}`);
    } else {
      newY += 1;
    }
  } else if (face === "EAST") {
    if (x === 5) {
      console.log(`You cannot move any further ${face}`);
    } else {
      newX += 1;
    }
  } else if (face === "SOUTH") {
    if (y === 0) {
      console.log(`You cannot move any further ${face}`);
    } else {
      newY -= 1;
    }
  } else if (face === "WEST") {
    if (x === 0) {
      console.log(`You cannot move any further ${face}`);
    } else {
      newX -= 1;
    }
  }

  return [newX, newY];
}

function degreesCheck(prompt, degrees, allowedDegrees) {
let newDegrees = degrees;

    if (prompt === 'LEFT') {
        newDegrees = (degrees - 90 + 360) % 360;
    } else if (prompt === 'RIGHT') {
        newDegrees = (degrees + 90) % 360;
    }

    const newFace = allowedDegrees[newDegrees];
    return [newFace, newDegrees];
}


module.exports = { rowCheck, colCheck, faceCheck, moveCommand, degreesCheck };
