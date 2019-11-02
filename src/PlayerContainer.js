import React, { Component } from 'react';

import Player from './Player';
import {sumCards} from './utils';

class PlayerContainer extends Component {
  state = {
    bank: 500,
    bet: 10 // How to handle doubling?
  }

  render() {
    const {cards, bust} = this.props.player
    const total = sumCards(cards)
    return (
     <Player
      id={this.props.id}
      cards={cards}
      total={total}
      bust={bust}
    />
    )
  }
}

export default PlayerContainer;
