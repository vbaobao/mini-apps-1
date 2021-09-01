import React from 'react';

function Board(props) {
  //Map through rows, with mapping each column to build table
  let boardDOM = props.board.map((row, i) => {
    return (
      <tr key={i} row={i}>
        {row.map((col, j) =>
          <td key={[i, j]} row={i} col={j} onClick={props.handleClick}>
            {col === 0
              ? ''
              : <img src={props.players[col].image} />
            }
          </td>)}
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        {boardDOM}
      </tbody>
    </table>
  );
}

export default Board;