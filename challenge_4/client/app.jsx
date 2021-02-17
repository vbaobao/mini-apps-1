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
      turn: p1,
      winner: null
    };
  }

  handleClick(e) {}

  checkHorizontal() {}

  checkVertical() {}

  checkDiagL() {}

  checkDiagR() {}

  checkWin() {}

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