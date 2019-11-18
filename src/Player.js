import React from 'react';
import './Player.css';

import Card from './CardContainer';

const Player = props => {
  let message;
  if (props.active) {
    if (props.bust) {
      message = <div>BUSTED</div>
    } else {
      message = <button onClick={props.dealCard}> Hit </button>
    }
  }
  return (
    <div className="player" id={props.id}>      
      <div className="player-header">
        <div>
          Player {props.id}: {props.total}
        </div>
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
