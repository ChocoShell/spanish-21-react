import React, { useContext } from 'react';
import './Spanish21Shoe.css';

import Card from './CardContainer.js'


const Spanish21Shoe = props => {
  return (
    <div className="spanish21-shoe">
      <Card cardId={props.currentCard}/>
      <div>
        Cards Left: {props.cardsLeft}
      </div>
      <button onClick={props.dealCard}>
        Deal Card
      </button>
    </div>
  )
}

export default Spanish21Shoe;
