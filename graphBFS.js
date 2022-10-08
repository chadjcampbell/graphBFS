function buildGameBoard() {
  let gameBoard = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      gameBoard.push([i, j]);
    }
  }
  return gameBoard;
}

const gameBoard = buildGameBoard();

const knightSteps = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, -1],
];

function validMoves(cell) {
  let validMoves = [];
  knightSteps.forEach((move) => {
    let thisMove = [cell[0] + move[0], cell[1] + move[1]];
    //TODO - CHECK IF IN GAMEBOARD, PUSH TO VALIDMOVES ARRAY
    console.log(thisMove);
  });
  return validMoves;
}
