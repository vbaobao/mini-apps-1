/*
 * FUNCTIONS NEEDED FOR GAME MECHANICS
 * GAME/GLOBAL
 * - global vars: x wins, o wins, last winner
 * - method to start game (same as reset), start with x the first time
 *   then most recent winner, creates new board
 * - method to increase score on DOM
 * - method to update board on DOM (player click listener here)
 *
 * BOARD CLASS
 * - constructor: board is array of arrays
 * - method to update board
 * - method to check winner
 * - method to alert winner
 * - method to clear board
 */

 // DOM Manipulation
var updateBoardDOM = (updateCell, playerSymbol) => {
  console.log(playerSymbol);
  updateCell.textContent = playerSymbol;
};

var updateScoreDOM = (score) => {
  let winsX = document.querySelector('.wins-x');
  let winsO = document.querySelector('.wins-o');
  winsX.textContent = '';
  winsO.textContent = '';
  winsX.textContent = 'X: ' + score.X;
  winsO.textContent = 'O: ' + score.O;
};

// Global variables are not recommended, but using them for game
// as it will reset the game score on reload
// player object tracks how many points each player has
var players = ['X','O'];
var turn = 0;
var score = {
  X: 0,
  O: 0
};

var startGame = () => {
  let board = new Board();
  // Apply DOM with new board
  for (let cell of board.getBoard()) {
    updateBoardDOM(cell, players[turn]);
  }
  updateScoreDOM(score);

  let cells = document.querySelectorAll('td');
    cells.forEach((cell, i) => {
      cell.addEventListener('click', e => {
        // Check if spot was already clicked
        if (!board.checkDuplicate(i)) {
          // Update board
          board.updateBoard(players[turn], i);
          // Update DOM with position clicked
          updateBoardDOM(cell, players[turn]);
          // Check winner
          if (board.checkWinner()) {
            // If won, alert winner restart game
            board.alertWinner(players[turn]);
            startGame();
          }
        }
      });
    });
};

var nextTurn = () => {};

class Board {
  constructor() {
    this.board = new Array(9).fill(0);
  }

  // Board methods
  getBoard() {
    return [...this.board];
  };

  checkDuplicate(dataIndex) {
    // Check if the board is alread filled in that position.
    return this.board[dataIndex] === 0 ? false : true;
  }

  checkWinner() {
    let horizontal = [[0,1,2],[3,4,5],[6,7,8]];
    let vertical = [[0,3,6],[1,4,7],[2,5,8]];
    let diagonal = [[0,4,8],[2,4,6]];
    let wins = [...horizontal,...vertical,...diagonal];
    // If win, alert message
    for (let match of wins) {
      // Check if listed indexes have the same value in board array
      if (this.board[match[0]] !== 0
        && this.board[match[0]] === this.board[match[1]]
        && this.board[match[1]] === this.board[match[2]]) {
        return this.board[match[0]];
      }
    }
    return null;
  }

  updateBoard(playerSymbol, dataIndex) {
    // update board's array
    this.board[dataIndex] = playerSymbol;
  }

  alertWinner(playerSymbol) {
    setTimeout(() => { alert(`${playerSymbol} has won!`); }, 0);
    score[playerSymbol] += 1;
  }
}

// Initialize game below
// Create start game click listener
startGame();