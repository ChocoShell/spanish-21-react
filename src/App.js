import React, {useReducer} from 'react';

import RootContext from './context/root-context';
import Spanish21 from './Spanish21';

import {shuffle, getDecks, sumCards} from './utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.setActivePlayer = playerId => {
      this.setState(
        state => {
          const players = state.players.map(
            player => ({
              ...player,
              active: false
            })
          )
          players[playerId].active = true

          return {...state, players, activePlayer: playerId}
        }
      )
    }

    this.setNextPlayer = () => {
      const {activePlayer, players} = this.state
      const nextPlayerId = (activePlayer + 1) % players.length
      this.setActivePlayer(nextPlayerId)
      if (nextPlayerId === 0) {
        this.dealCardsToDealer()
      }
    }

    this.dealCardNoState = oldShoe => {
        const shoe = oldShoe.length === 0 ? shuffle(getDecks(8)) : oldShoe
        const card = shoe.pop()
        return {card, shoe}
    }

    this.dealCard = () => {
      this.setState(
        state => {
          const shoeCopy = [...state.shoe]
          const newShoe = shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
          newShoe.pop()
          return {...state, shoe: newShoe}
        }
      )
    }

    this.dealCardToPlayer = playerId => {
      this.setState(
        state => {
          // Make copies of players and show
          const players = [...state.players]
          const shoeCopy = [...state.shoe]
          // Show logic to reshuffle if shoe is empty
          const newShoe = shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
          // Adding shoe card to player card array
          const newCards = [
            ...players[playerId].cards,
            newShoe.pop()
          ]
          const total = sumCards(newCards)
          const bust = total > 21
          // If player goes bust, go to next player.
          if (bust) {
            this.setNextPlayer()
          }

          players[playerId] = {
            ...players[playerId],
            cards: newCards,
            total,
            bust
          }
          return {...state, players, shoe: newShoe}
        }
      )
    }

    this.dealCardsToDealer = () => {
      const dealer = this.state.players[0]
      if (dealer.total < 17) {
        const newCards = [...dealer.cards]
        var stateShoe = [...this.state.shoe]
        while(sumCards(newCards) < 17) {
          const {shoe, card} = this.dealCardNoState(stateShoe)
          stateShoe = shoe
          newCards.push(card)
        }
        this.setState(
          state => {
            const players = [...state.players]
            const total = sumCards(newCards)
            const bust = total > 21
            players[0] = {
              ...players[0],
              cards: newCards,
              total,
              bust
            }
            return {
              ...state,
              players,
              shoe: stateShoe
            }
          }
        ) 
      } 
    }

    this.resetRound = () => {
      this.setState(state => {
          for (var i = 0; i < state.players.length; i++) {
            state.players[i].cards = []
          }
          return {players: state.players}
        }
      )
    }

    this.dealRound = () => {
      this.resetRound()
      this.setActivePlayer(1)
      for (var j = 0; j < 2; j++) {
        for (var i = 0; i < this.state.players.length; i++) {
          this.dealCardToPlayer(i)
        }
      }
    }

    this.state = {
      shoe: [],
      cardInd: 0,
      players: [
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
        {active: false, total: 0, bust: false, cards: []},
      ],
      activePlayer: 0,
      dealCard: this.dealCard,
      dealCardToPlayer: this.dealCardToPlayer,
      setActivePlayer: this.setActivePlayer,
      setNextPlayer: this.setNextPlayer,
      dealRound: this.dealRound,
    }
  }

  render () {
    return (
      <RootContext.Provider value={this.state}>
        <Spanish21 />
      </RootContext.Provider>
    )
  }
}

export default App;
