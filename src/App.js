import React, {useReducer} from 'react';

import Spanish21 from './Spanish21';
import {shuffle, getDecks} from './utils'

const Context = React.createContext();
const { Provider } = Context;



const initialState = {
  shoe: shuffle(getDecks(8)),
  players: [
    {active: false, cards: []},
  ],
  card: null, // Remove this later
  cardInd: 0,

}

const dealCardReducer = (state, action) => {
  switch (action.type) {
    case "DEAL_CARD": {
      const shoeCopy = state.shoe.slice()
      const card = shoeCopy.pop()
      const newShoe =  shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
      return {...state, shoe: newShoe, card}
    }
    case "DEAL_CARD_TO_PLAYER":
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
