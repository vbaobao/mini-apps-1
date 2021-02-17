import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Let's Play Connect Four</h1>
        <Board />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));