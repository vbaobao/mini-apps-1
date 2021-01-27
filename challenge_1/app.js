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

// Global variables are not recommended, but using them for game
// as it will reset the game score on reload
// player object tracks how many points each player has
var score = {
  x: 0,
  o: 0
};
var players = ['X','O'];
var lastWinner = 0;

var startGame = (lastWinner) => {
  // new Board
  // set up click listeners on the board
  // click event to updateBoard
  // update dom
  // check if win
};

var updateBoardDOM = () => {};

var updateScoreDOM = () => {};

class Board {
  constructor(starter) {
    this.board = new Array(9).fill(0);
  }

  // Board methods
  checkWinner() {
    let horizontal = [[0,1,2],[3,4,5],[6,7,8]];
    let vertical = [[0,3,6],[1,4,7],[2,5,8]];
    let diagonal = [[0,4,8],[2,4,6]];
    let wins = [...horiztonal,...vertical,...diagonal];
    // If win, alert message
    for (let match of wins) {
      // Check if listed indexes have the same value in board array
      if (this.board[match[0]] === this.board[match[1]] && this.board[match[1]] === this.board[match[2]]) {
        return this.board[match[0]];
      }
    }
    return null;
  }

  updateBoard(player, index) {
    // update board's array
    this.board[index] = players[player];
    console.log('Board updated.');
  }

  alertWinner(player) {
    alert(`${player} has won!`);
  }
}

// Initialize game below