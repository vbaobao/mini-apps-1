import React from 'react';

function Board(props) {
  //Map through rows, with mapping each column to build table
  let boardDOM = props.board.map((row) => {
    return (
      <tr key={row}>
        {row.map((col) => <td key={[row, col]}>{col}</td>)}
      </tr>
    );
  });

  return (
    <table>
      {boardDOM}
    </table>
  );
}

export default Board;