import React from 'react';
import './Shoe.css';

import Card from 'Card'


const Shoe = props => {
  return (
    <div className="spanish21-shoe">
      <Card cardId={props.currentCard}/>
      <div>
        Cards Left: {props.cardsLeft}
      </div>
      <button className="btn btn-secondary" onClick={props.dealCard}>
        Deal Card
      </button>
    </div>
  )
}

export default Shoe;
