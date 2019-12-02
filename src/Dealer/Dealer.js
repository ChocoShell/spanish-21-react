import React from 'react';
import './Dealer.css';

import Card from 'Card';

const Dealer = props => {
  return (
    <div className="dealer" id={props.id}>
      <div>
       {props.active &&
          <div>
            Dealer: {props.total} {props.bust && "BUSTED"}
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
      <div>
        <button className="btn btn-primary" onClick={props.nextPlayer}>Go to next player</button>
        <button className="btn btn-info" onClick={props.dealRound}>Deal Round</button>
      </div>
    </div>
  )
}

export default Dealer;
