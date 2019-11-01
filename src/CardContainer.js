import React, { Component } from 'react';

import Card from './Card';

class CardContainer extends Component {
  render() {
    console.log(this.props.card)
    return (
      <Card
        value={this.props.card && this.props.card.Value}
        suit={this.props.card && this.props.card.Suit}
      />
    )
  }
}

export default CardContainer;
