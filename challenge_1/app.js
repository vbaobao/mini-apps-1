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
var player = {
  x: 0,
  o: 0
};
var lastWinner = player.x;

var startGame = () => {};

var updateBoardDOM = () => {};

var updateScoreDOM = () => {};

class Board {
  constructor(starter) {
    this.board = new Array(9).fill(0);
  }

  // Board methods
  checkWinner() {}

  updateBoard(player, index) {}

  alertWinner(player) {}

  clearBoard() {}
}

// Initialize game below