import React from 'react';
import './Dealer.css';

import Card from './CardContainer';

const Dealer = props => {
  return (
    <div className="dealer" id={props.id}>
      {props.bust && "BUSTED"}
      { !props.bust &&
        <div>
          <div>
            Dealer: {props.total}
          </div>
          {
            props.cards.map(
              (card, index) => {
                return <Card key={index} cardId={card}/>
              }
            )
          }
        </div>
      }
      {props.active &&
        <div>
        Dealer is Active
        </div>
      }
      <div>
        <button onClick={props.nextPlayer}>Go to next player</button>
        <button onClick={props.dealRound}>Deal Round</button>
      </div>
    </div>
  )
}

export default Dealer;
