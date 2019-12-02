import React from 'react';

import cards from './cards.json';
import Card from './Card';

const CardContainer = ({cardId, hide}) => {
  const card = cards[cardId]
  return (
    <Card
      hide={hide}
      value={card && card.rank}
      suit={card && card.suit}
    />
  )
}

export default CardContainer;
