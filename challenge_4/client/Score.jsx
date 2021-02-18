import React from 'react';

function Score(props) {
  return(
    <div>
      <div>
        <img src={props.players['1'].image} />
        <p>
          <span>{props.players['1'].name} </span>
          {props.score['1']}
        </p>
      </div>
      <div>
        <img src={props.players['2'].image} />
        <p>
          <span>{props.players['2'].name} </span>
          {props.score['2']}
        </p>
      </div>
    </div>
  );
};

export default Score;