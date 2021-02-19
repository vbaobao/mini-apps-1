import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Board from './Board.jsx';
import Score from './Score.jsx';
import History from './History.jsx';

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
      game: true,
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
        }
      },
      history: []
    };
  }

  componentDidMount() {
    axios.get('/history')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }

  setNextPlayer(player) {
    player === 1 ? this.setState({turn: 2}) : this.setState({turn: 1});
  }

  setWinner(player) {
    let newScore = {...this.state.score};
    newScore[player] = this.state.score[player] + 1;

    this.setState({
      game: false,
      winner: player,
      score: newScore,
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
      ],
      game: true
    });
  }

  saveGame() {
    axios.post('/savegame')
      .then((res) => {})
      .catch((err) => console.error(err));
  }

  loadGame() {
    //Get a saved game, can be resumed!
  }

  handleClick(e) {
    //When clicked grab column
    let selRow = Number(e.target.attributes.row.value);
    let selCol = Number(e.target.attributes.col.value);
    let currBoard = this.state.board;
    let player = this.state.turn;

    //In column, check for zeros from bottom up
    if (this.state.game) {
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
            this.setWinner(player);
          } else {
            //if not win, setNextPlayer
            this.setNextPlayer(player);
          };

          return;
        }
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
        <div class='container'>
          <div class='history'>
            <h2>History</h2>
            <History />
          </div>
          <div class='game'>
            <Score score={this.state.score} players={this.state.players}/>
            <Board board={this.state.board} players={this.state.players} handleClick={this.handleClick} />
            <div className='reset'>
              <button onClick={this.resetGame}>Reset Game</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));