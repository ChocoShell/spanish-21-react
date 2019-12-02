import React, { useContext } from 'react';

import CardContext from 'context/card-context';
import Shoe from './Shoe';


const ShoeContainer = () => {
  const {
    dealCard,
    shoe,
  } = useContext(CardContext)

  const currentCard = shoe[shoe.length-1]

  return (
    <Shoe
      dealCard={dealCard}
      cardsLeft={shoe.length}
      currentCard={currentCard}
    />
  )
}

export default ShoeContainer;
