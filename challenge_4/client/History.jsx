import React from 'react';

function History(props) {
  let buttons = props.history.length !== 0
    ? props.history.map((game) => {
      return (
        <button key={game.id} gameId={game.id} onClick={props.handleClick}>
          <span>{game.p1_name}</span>{game.p1_score} <span>{game.p2_name}</span>{game.p2_score}
        </button>);
    })
    : <p>No games history</p>;
  return (
    <div>
      {buttons}
    </div>
  );
}

export default History;