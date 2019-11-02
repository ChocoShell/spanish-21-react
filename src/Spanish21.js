import React, { Component } from 'react';

import './Spanish21.css';

import Player from './PlayerContainer';
import Dealer from './DealerContainer';
import Spanish21Shoe from './Spanish21ShoeContainer';

import {shuffle, getDecks} from './utils'

class Spanish21 extends Component {
  constructor(props) {
    super(props)
    this.dealRound = this.dealRound.bind(this)
    this.dealCard = this.dealCard.bind(this)
    this.state = {
      shoe: shuffle(getDecks(8)),
      players: [
        {bust: false, cards: []},
        {bust: false, cards: []},
        {bust: false, cards: []},
        {bust: false, cards: []},
        {bust: false, cards: []},
        {bust: false, cards: []}
      ],
      card: null // Remove this later
    }
  }
  dealRound() {
    this.state.players.map(
      player => player.cards = [this.dealCard(), this.dealCard(), this.dealCard()]
    )
    this.setState({players: this.state.players})
  }

  dealCard() {

    const card = this.state.shoe.pop()
    const shoe =  this.state.shoe.length === 0 ? shuffle(getDecks(8)) : this.state.shoe
    this.setState({shoe, card})
    console.log(card)
    return card
  }
  // Game should have min and max bet
  render() {
    return (
      <div className="game">
        <div className="dealerside">
          <Dealer />
          <Spanish21Shoe
            shoe={this.state.shoe}
            card={this.state.card}
            dealCard={this.dealCard}
          />
        </div>
        <div className="players">
          {
            this.state.players.map(
              (player, index) => {
                return (
                  <Player
                    key={index}
                    player={player}
                    id={index}
                  />
                )
              }
            )
          }
        </div>
        <div>
          <button onClick={this.dealRound}>
            Deal Round
          </button>
        </div>
      </div>
    );
  }
}

export default Spanish21;
