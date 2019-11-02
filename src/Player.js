import React from 'react';
import './Player.css';

import Card from './CardContainer';

const Player = props => {
  return (
    <div className="player" id={props.id}>
      {props.bust && "BUSTED"}
      { !props.bust &&
        <div>
          <div>
            Player {props.id}: {props.total}
          </div>
          {
            props.cards.map(
              (card, index) => {
                return <Card key={index} card={card}/>
              }
            )
          }
        </div>
      }
    </div>
  )
}

export default Player;
