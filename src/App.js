import React from 'react';

import PlayerContext from 'context/player-context';
import CardContext from 'context/card-context';

import {shuffle, getDecks, sumCards} from 'utils';

import Spanish21 from 'Spanish21';


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
    }

    this.dealCard = () => {
      // pops and returns last card
      let card
      return new Promise(resolve => {
        this.setState(
          state => {
            const shoeCopy = [...state.shoe]
            const newShoe = shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
            card = newShoe.pop()
            return {...state, shoe: newShoe}
          },
          () => resolve(card)
        )
      })
    }

    this.dealCardToPlayer = async (playerId) => {
      const card = await this.dealCard()
      this.setState(
        state => {
          // Make copies of players and show
          const players = [...state.players]
          
          // Adding shoe card to player card array
          const newCards = [
            ...players[playerId].cards,
            card
          ]

          // Next target for hook
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
          return {...state, players}
        }
      )
    }

    this.dealCardsToDealer = async () => {
      const dealer = this.state.players[0]
      // Too much logic here? Have to think about refactor.
      if (dealer.total < 17) {
        const newCards = [...dealer.cards]
        while(sumCards(newCards) < 17) {
          const card = await this.dealCard()
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
              players
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
      dealCardsToDealer: this.dealCardsToDealer,
    }
  }

  render () {
    const {
      shoe,               // card
      cardInd,            // card
      players,            // both
      activePlayer,       // player
      dealCard,           // card
      dealCardToPlayer,   // card
      setActivePlayer,    // player
      setNextPlayer,      // player
      dealRound,          // card
      dealCardsToDealer,  // card
    } = this.state

    const playerState = {
      activePlayer,
      players,
      setActivePlayer,
      setNextPlayer,
    }
    const cardState = {
      shoe,
      cardInd,
      players,
      dealCard,
      dealCardToPlayer,
      dealRound,
      dealCardsToDealer,
    }
    return (
      <PlayerContext.Provider value={playerState}>
        <CardContext.Provider value={cardState}>
          <Spanish21 />
        </CardContext.Provider>
      </PlayerContext.Provider>
    )
  }
}

export default App;
