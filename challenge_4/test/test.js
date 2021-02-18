var assert = require('assert');

function checkHorizontalWin(player, position, board) {
  let run = 0;
  let row = position[0];
  for (const col of board[row]) {
    if (col === player) {
      run++;
      if (run === 4) return true;
    } else {
      run = 0;
    }
  }
  return run >= 4;
}

function checkVerticalWin(player, position, board) {
  let run = 0;
  let col = position[1];
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === player) {
      run++;
      if (run === 4) return true;
    } else {
      run = 0;
    }
  }
  return false;
}

function checkDiagLWin(player, position, board) {
  let startPosition;
  if (position[0] > position[1]) {
    startPosition = [position[0] - position[1], 0];
  } else {
    startPosition = [0, position[1] - position[0]];
  }

  let run = 0;
  let row = startPosition[0];
  let col = startPosition[1];
  for (row, col; row < board.length && col < board[0].length; row++, col++) {
    if (board[row][col] === player) {
      run++;
      if (run === 4) return true;
    } else {
      run = 0;
    }
  }

  return false;
}

function checkDiagRWin(player, position, board) {
  let startPosition;

  // Check if x is closer to 0, or y is closer to largest y of board
  if(position[0] < (6 - position[1])) {
    startPosition = [0, position[0] + position[1]];
  } else {
    startPosition = [position[1] - (6 - position[0]), 6];
  }

  let run = 0;
  let row = startPosition[0];
  let col = startPosition[1];
  for (row, col; row < board.length && col < board[0].length; row++, col--) {
    if (board[row][col] === player) {
      run++;
      if (run === 4) return true;
    } else {
      run = 0;
    }
  }
  return false;

}

function checkWin(player, position, board) {
  let horizontal = checkHorizontalWin(player, position, board);
  let vertical = checkVerticalWin(player, position, board);
  let diagonalL = checkDiagLWin(player, position, board);
  let diagonalR = checkDiagRWin(player, position, board);
  console.log(`H:${horizontal} V:${vertical} DL:${diagonalL} DR:${diagonalR}`);
  return (horizontal || vertical || diagonalL || diagonalR);
}

describe('Check Win Conditions', () => {

  it('should be able to detect a mid horizontal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,1,1,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkHorizontalWin(1, [2, 1], board), true);
  });

  it('should be able to detect a bottom horizontal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,1,1,0,0,0]
    ];

    assert.equal(checkHorizontalWin(1, [5, 0], board), true);
  });

  it('should be able to detect a top horizontal win', () => {
    let board = [
      [1,1,1,1,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkHorizontalWin(1, [0,0], board), true);
  });

  it('should be able to detect a vertical win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkVerticalWin(1, [4, 2], board), true);
  });

  it('should be able to detect a left diagonal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [1,0,0,0,0,0,0],
      [0,1,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkDiagLWin(1, [3, 2], board), true);
  });

  it('should be able to detect a right diagonal win', () => {
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0],
      [0,0,0,0,1,0,0],
      [0,0,0,1,0,0,0],
      [0,0,1,0,0,0,0]
    ];

    assert.equal(checkDiagRWin(1, [2, 5], board), true);
  });

  it('should be able to realize when there is not a win', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,0,1,1,1,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkWin(1, [2, 3], board), false);
  });

  it('should have a functional check that uses all win cases', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [1,1,0,1,1,1,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0]
    ];

    assert.equal(checkWin(1, [2, 3], board), true);
  });

  it('should not detect a clear board as a win', () => {
    //test uses assert
    let board = [
      [0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ];

    assert.equal(checkWin(1, [1, 2], board), false);
  });

});