import React, {useReducer} from 'react';

import RootContext from './context/root-context';
import Spanish21 from './Spanish21';

import {shuffle, getDecks} from './utils';


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
      this.setActivePlayer(
        (this.state.activePlayer + 1) % 
        this.state.players.length
      )
    }

    this.dealCard = () => {
      this.setState(
        state => {
          const shoeCopy = state.shoe.slice()
          const newShoe = shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
          shoeCopy.pop()
          return {...state, shoe: newShoe}
        }
      )
    }
    this.dealCardToPlayer = playerId => {
      this.setState(
        state => {
          const players = [...state.players]
          const shoe = [...state.shoe]

          players[playerId] = {
            ...players[playerId],
            cards: [
              ...players[playerId].cards,
              shoe.pop()
            ]
          }
          return {...state, players, shoe}
        }
      )
    }

    this.state = {
      shoe: [],
      cardInd: 0,
      players: [
        {active: false, cards: []},
        {active: false, cards: []},
        {active: false, cards: []},
        {active: false, cards: []},
        {active: false, cards: []},
        {active: false, cards: []},
        {active: false, cards: []},
      ],
      activePlayer: 0,
      dealCard: this.dealCard,
      dealCardToPlayer: this.dealCardToPlayer,
      setActivePlayer: this.setActivePlayer,
      setNextPlayer: this.setNextPlayer
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
