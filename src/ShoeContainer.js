import React, { useContext } from 'react';

import RootContext from './context/root-context';
import Shoe from './Shoe';


const ShoeContainer = () => {
  const {
    dealCard,
    shoe,
  } = useContext(RootContext)

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
