import React, { Component } from 'react';

import Spanish21Shoe from './Spanish21Shoe';


class Spanish21ShoeContainer extends Component {
  render() {
    return (
      <Spanish21Shoe
        dealCard={this.props.dealCard}
        cardsLeft={this.props.shoe.length}
        currentCard={this.props.card}
      />
    )
  }
}

export default Spanish21ShoeContainer;
