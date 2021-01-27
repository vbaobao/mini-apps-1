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
var updateBoardDOM = (updateCell, player) => {
  updateCell.textContent = player;
  console.log('Board updated.');
};

var updateScoreDOM = () => {
  let winsX = document.querySelectorAll('.wins-x');
  let winsO = document.querySelectorAll('.wins-o');
  winsX.textContent = '';
  winsO.textContent = '';
  winsX.textContent = score.x;
  winsO.textContent = score.o;
  console.log('Scoreboard updated.');
};

// Global variables are not recommended, but using them for game
// as it will reset the game score on reload
// player object tracks how many points each player has
var players = ['X','O'];
var turn = 0;
var score = {
  x: 0,
  o: 0
};

var startGame = (turn) => {
  let playing = true;
  let board = new Board();
  updateBoardDOM();
  updateScoreDOM();

  while(true) {
    // Apply click listeners to DOM
    // set up click listeners on the board
    // click event to updateBoard(event,board)
    // Update board after each click
    // Check winner after each click
    // if win, alert winner, update score
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
      cell.addEventListener('click', e => {
        console.log('clicked');
      });
    });
  }
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
// Create start game click listener