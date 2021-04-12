//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  moves = {
    upRight: [-1, 1],
    downRight: [-1, -1],
    downLeft: [1, -1],
    upLeft: [1, 1],
  };

  #white;
  #black;

  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
    if (this.queensShareSquare()) throw "Queens cannot share the same space";
  }

  set white([row, column]) {
    //validate
    if (!this.positionIsValid(row, column))
      throw "Queen must be placed on the board";
    //set
    this.#white = [row, column];
  }

  get white() {
    return this.#white;
  }

  set black([row, column]) {
    //validate
    if (!this.positionIsValid(row, column))
      throw "Queen must be placed on the board";
    //set
    this.#black = [row, column];
  }

  get black() {
    return this.#black;
  }

  numIsValid(num) {
    return num >= 0 && num <= 7;
  }

  // is queen on the board
  positionIsValid(row, column) {
    return this.numIsValid(row) && this.numIsValid(column);
  }

  // do queens share a square
  queensShareSquare(white = this.white, black = this.black) {
    return this.squaresMatch(white, black);
  }

  containsQueen(colour, position) {
    return this.squaresMatch(this[colour], position);
  }

  squaresMatch(square1, square2) {
    return JSON.stringify(square1) === JSON.stringify(square2);
  }

  toString() {
    const board = [];
    for (let row = 0; row < 8; row += 1) {
      const rowArray = [];
      for (let column = 0; column < 8; column += 1) {
        this.fillCell([row, column], rowArray);
      }
      board.push(rowArray.join(" "));
    }
    return board.join("\n");
  }

  fillCell(position, rowArray) {
    if (this.containsQueen("white", position)) rowArray.push("W");
    else if (this.containsQueen("black", position)) rowArray.push("B");
    else rowArray.push("_");
  }

  get canAttack() {
    return (
      this.shareRow() ||
      this.shareColumn() ||
      Object.values(this.moves).some((direction) => {
        return this.movePiece(this.white[0], this.white[1], direction);
      })
    );
  }

  shareRow() {
    return this.white[0] === this.black[0];
  }

  shareColumn() {
    return this.white[1] === this.black[1];
  }

  movePiece(row, column, direction) {
    row += direction[0];
    column += direction[1];
    if (!this.positionIsValid(row, column)) return false;
    if (this.queensShareSquare([row, column])) return true;
    return this.movePiece(row, column, direction);
  }
}
