import React from 'react';
import './Player.css';

import Card from './CardContainer';

const Player = props => {
  return (
    <div className="player" id={props.id} cards={props.cards}>
      {props.bust && "BUSTED"}
      { !props.bust &&
        <div>
          Player {props.id} goes here
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
