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
    face = prompt("Input the direction the robot faces (North, South, East, West): ").toUpperCase();
    degrees = allowedDegrees[face];
    while (!allowedFaces.includes(face)) {
        face = prompt("Incorrect direction. Input NORTH, SOUTH, EAST, OR WEST: ").toUpperCase();
        degrees = allowedDegrees[face];
    };

     // LOG STARTING COORDINATES
    console.log(`Row: ${x}, Col: ${y}, Face: ${face}, Degrees: ${degrees}`);
    return [x, y, face, degrees, allowedDegrees, allowedFaces]
   
};



module.exports = {startingPrompt};
