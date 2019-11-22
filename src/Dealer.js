import React from 'react';
import './Dealer.css';

import Card from './CardContainer';

const Dealer = props => {
  return (
    <div className="dealer" id={props.id}>
      {props.bust && "BUSTED"}
      { !props.bust &&
        <div>
         {props.active &&
            <div>
              Dealer: {props.total}
            </div>
          }
          {!props.active &&
            <div>
              Dealer: Hidden
            </div>
          }
          <div className="dealer-cards">
          {
            props.cards.map(
              (card, index) => {
                return <Card key={index} cardId={card} hide={index === 0 && !props.active}/>
              }
            )
          }
          </div>
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
