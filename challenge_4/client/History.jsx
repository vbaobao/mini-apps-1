import React from 'react';

function History(props) {
  let buttons = props.history.length !== 0
    ? props.history.map((game) => {
      return (
        <button key={game.id} gameid={game.id} onClick={props.handleClick}>{game.name}</button>);
    })
    : <p>No games history</p>;
  return (
    <div>
      {buttons}
    </div>
  );
}

export default History;