import React, { Component } from 'react';

import Player from './Player';
import {sumCards} from './utils';

class PlayerContainer extends Component {

  constructor(props) {
    super(props)
    this.dealCard = this.dealCard.bind(this)
    this.state = {
      bank: 500,
      bet: 10, // How to handle doubling?
      bust: false
    }
  }

  checkTotal() {
    const total = sumCards(this.props.player.cards)
    const newState = {total}
    if (total > 21) {
      newState.bust = true
    } else {
      newState.bust = false
    }
    this.setState({
      ...newState
    })
  }

  dealCard() {
    this.props.dealCard(this.props.id)
    this.checkTotal()
  }

  render() {
    const {cards, active} = this.props.player
    const total = sumCards(cards)
    return (
     <Player
      id={this.props.id}
      cards={cards}
      active={active}
      total={total}
      bust={this.state.bust}
      hit={this.dealCard}
      stay={this.props.stay}
    />
    )
  }
}

export default PlayerContainer;
