import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Score from './Score.jsx';

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
      score: { 1: 0, 2: 0 },
      players: {
        1: {
        image: './img/green.png',
        name: 'Green'
        },
        2: {
          image: './img/purple.png',
          name: 'Purple'
        }}
    };
  }

  setNextPlayer(player) {
    player === 1 ? this.setState({turn: 2}) : this.setState({turn: 1});
  }

  setWinner(player) {
    let currentScore = this.state.score[player];
    this.setState({
      winner: player,
      score: {player: currentScore++},
      turn: player
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
    let selRow = Number(e.target.attributes.row.value);
    let selCol = Number(e.target.attributes.col.value);
    let currBoard = this.state.board;
    let player = this.state.turn;

    //In column, check for zeros from bottom up
    for (let row = currBoard.length - 1; row >= 0; row--) {
      let checkCol = currBoard[row][selCol];
      if (checkCol === 0) {
        //Update board to have player value
        let newBoard = [...currBoard];
        newBoard[row][selCol] = player;
        this.setState({board: newBoard});

        //checkWin condition
        if (this.checkWin(player, [row, selCol], newBoard)) {
          //if win, setWinner and setNextPlayer to winner
          alert(`${this.state.players[player].name} wins!`);
          this.setWinner(player);
          this.resetGame();
        } else {
          //if not win, setNextPlayer
          this.setNextPlayer(player);
        };

        return;
      }
    }
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
    let horizontal = this.checkHorizontalWin(player, position, board);
    let vertical = this.checkVerticalWin(player, position, board);
    let diagonalL = this.checkDiagLWin(player, position, board);
    let diagonalR = this.checkDiagRWin(player, position, board);
    return (
      horizontal || vertical || diagonalL || diagonalR
    );
  }

  render() {
    return (
      <div>
        <h1>Let's Play Connect Four</h1>
        <Score score={this.state.score} players={this.state.players}/>
        <Board board={this.state.board} players={this.state.players} handleClick={this.handleClick} resetGame={this.resetGame} />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));