const prompt = require("prompt-sync")();

//let name = prompt("What is your name? ");
//console.log(`Hello, ${name}!`);

const direction = "^";
const robot = "*";
const tableCharacter = '░';

class Table {
  constructor(table) {
    this._table = table;
  }

  static generateTable() {
    let newTable = [];
    for (let i = 0; i < 5; i++) {
      newTable.push([]);
      for (let j = 0; j < 5; j++) {
        newTable[i].push(tableCharacter);
      }
    }
    newTable[4][0] = robot;
    return newTable;
  }

  playMove() {
    let x = 4;
    let y = 1;
    console.log(this._table);
  }

  print() {
    for (let row of this._table) {
        console.log(row.join(' '));
    }
  }
}

const makeTable = Table.generateTable();
myTable = new Table(makeTable);
myTable.playMove();