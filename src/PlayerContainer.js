import React, { Component } from 'react';

import Player from './Player';
import {sumCards} from './utils';

class PlayerContainer extends Component {

  constructor(props) {
    super(props)
    this.dealCard = this.dealCard.bind(this)
    this.state = {
      bank: 500,
      bet: 10 // How to handle doubling?
    }
  }

  // state = {
  //   bank: 500,
  //   bet: 10 // How to handle doubling?
  // }

  dealCard() {
    this.props.dealCard(this.props.id)
  }

  render() {
    const {cards, active} = this.props.player
    const total = sumCards(cards)
    const bust = total > 21
    return (
     <Player
      id={this.props.id}
      cards={cards}
      active={active}
      total={total}
      bust={bust}
      dealCard={this.dealCard}
    />
    )
  }
}

export default PlayerContainer;
