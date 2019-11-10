import React, { Component } from 'react';

import cards from './cards.json';

import Card from './Card';

class CardContainer extends Component {
  render() {
    console.log(`"Shoe: ${this.props.card}"`)
    const card = cards[this.props.cardId]
    return (
      <Card
        value={card && card.rank}
        suit={card && card.suit}
      />
    )
  }
}

export default CardContainer;
