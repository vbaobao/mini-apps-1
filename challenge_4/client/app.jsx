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

  handleClick(e) {}

  checkHorizontalWin(player, row, board) {
    let run = 0;
    for (const col of board[row]) {
      if (run === 4) {
        return true;
      } else if (board[row][col] === player) {
        run++;
      } else {
        run = 0;
      }
    }
    return run => 4;
  }

  checkVerticalWin(player, col, board) {
    let run = 0;
    for (let i = 0; i < board.length; i++) {
      if (run === 4) {
        return true;
      } else if (board[i][col] === player) {
        run++;
      } else {
        run = 0;
      }
    }
    return false;
  }

  checkDiagLWin(player, position, board) {}

  checkDiagRWin(player, position, board) {}

  checkWin(player, position, board) {}

  resetGame() {}

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