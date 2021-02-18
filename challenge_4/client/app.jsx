import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      turn: 1,
      winner: null
    };
  }

  setNextPlayer(player) {
    player === 1 ? this.setState({turn: 2}) : this.setState({turn: 1});
  }

  setWinner(player) {
    this.setState({winner: player});
  }

  handleClick(e) {
    //When clicked grab column
    //In column, check for zeros from bottom up
    //Update board to have player value
    //checkWin condition
  }

  checkHorizontalWin(player, position, board) {
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

  checkVerticalWin(player, position, board) {
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

  checkDiagLWin(player, position, board) {
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

  checkDiagRWin(player, position, board) {
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

  checkWin(player, position, board) {
    let horizontal = checkHorizontalWin(player, position, board);
    let vertical = checkVerticalWin(player, position, board);
    let diagonalL = checkDiagLWin(player, position, board);
    let diagonalR = checkDiagRWin(player, position, board);
    return (
      horizontal || vertical || diagonalL || diagonalR
    );
  }

  resetGame() {
    this.setState(
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    );
  }

  saveGame() {
    //This will send a POST request to save game results
  }

  render() {
    return (
      <div>
        <h1>Let's Play Connect Four</h1>
        <Board board={this.state.board} />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));