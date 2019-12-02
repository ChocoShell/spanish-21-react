import React from 'react';
import './Player.css';

import Card from 'Card';

const Player = props => {
  let message;
  if (props.bust) {
    message = <h4>BUSTED</h4>
  } else if (props.active) {
    message = (
      <div>
        <button className="btn btn-success" onClick={props.hit}> Hit </button>
        <button className="btn btn-danger" onClick={props.stay}> Stay </button>
      </div>
    )
  }
  return (
    <div className="player" id={props.id}>      
      <div className="player-header">
        <h4>
          Player {props.id}: {props.total}
        </h4>
        {message}
      </div>
      <div className="cards">
        {
          props.cards.map(
            (card, index) => {
              return <Card key={index} cardId={card}/>
            }
          )
        }
      </div>
    </div>
  )
}

export default Player;
