import React from 'react';
import './Player.css';

import Card from './CardContainer';

const Player = props => {
  return (
    <div className="player" id={props.id}>    
      <div className="player-header">
        <div>
          Player {props.id}: {props.total}
        </div>
        {props.bust && 
          <div>BUSTED</div>
        }
        { !props.bust &&
          <button onClick={props.dealCard}> Hit </button>
        }
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
