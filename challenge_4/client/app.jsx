import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setNextPlayer = this.setNextPlayer.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.saveGame = this.saveGame.bind(this);

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
      winner: null,
      score: { 1: 0, 2: 0 }
    };
  }

  setNextPlayer(player) {
    player === 1 ? this.setState({turn: 2}) : this.setState({turn: 1});
  }

  setWinner(player) {
    let currentScore = this.state.score[player];
    this.setState({
      winner: player,
      score: {player: currentScore++}
    });
  }

  resetGame() {
    this.setState({
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    });
  }

  saveGame() {
    //This will send a POST request to save game results
  }

  handleClick(e) {
    //When clicked grab column
    let selRow = e.target.attributes.row.value;
    let selCol = e.target.attributes.col.value;

    //In column, check for zeros from bottom up
    for (let row = this.state.board.length - 1; row >= 0; row--) {
      let checkCol = this.state.board[row][selCol];
      if (checkCol === 0) {
        //Update board to have player value
        let newBoard = [...this.state.board];
        newBoard[row][selCol] = this.state.turn;
        this.setState({board: newBoard});
        return;
      }
    }
    //checkWin condition
    //if win, setWinner and setNextPlayer to winner
    //if not win, setNextPlayer
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

  render() {
    return (
      <div>
        <h1>Let's Play Connect Four</h1>
        <Board board={this.state.board} handleClick={this.handleClick} resetGame={this.resetGame} score={this.state.score}/>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));