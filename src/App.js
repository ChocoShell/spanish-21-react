import React, {useReducer} from 'react';

import Spanish21 from './Spanish21';
import {shuffle, getDecks} from './utils'

const Context = React.createContext();
const { Provider } = Context;



const initialState = {
  shoe: shuffle(getDecks(8)),
  players: [
    {active: false, cards: []},
    {active: false, cards: []},
    {active: false, cards: []},
    {active: false, cards: []},
    {active: false, cards: []},
    {active: false, cards: []},
    {active: false, cards: []},
  ],
  cardInd: 0,

}

const dealCardReducer = (state, action) => {
  switch (action.type) {
    case "DEAL_CARD": {
      const shoeCopy = state.shoe.slice()
      shoeCopy.pop()
      const newShoe =  shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
      return {...state, shoe: newShoe}
    }
    case "DEAL_CARD_TO_PLAYER": {
      const players = [...state.players]
      const shoe = [...state.shoe]
      const playerId = action.payload.playerId

      players[playerId] = {
        ...players[playerId],
        cards: [
          ...players[playerId].cards,
          shoe.pop()
        ]
      }
      return {...state, players, shoe}
    }
    case "DEAL_CARD_TO_DEALER":
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(dealCardReducer, initialState);
  const store = {
    dispatch,
    state,
    getState: () => state,
  }
  return (
    <Provider value={store}>
      <Spanish21 />
    </Provider>
  )
}

export { Context, App as default };
