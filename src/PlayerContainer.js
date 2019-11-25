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

  dealCard() {
    this.props.dealCard(this.props.id)
  }

  render() {
    const {cards, active, bust, total} = this.props.player
    return (
     <Player
      id={this.props.id}
      cards={cards}
      active={active}
      total={total}
      bust={bust}
      hit={this.dealCard}
      stay={this.props.stay}
    />
    )
  }
}

export default PlayerContainer;
