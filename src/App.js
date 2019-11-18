import React, {useReducer} from 'react';

import RootContext from './context/root-context';
import Spanish21 from './Spanish21';

import {shuffle, getDecks} from './utils';


const store = {
  shoe: shuffle(getDecks(8)),
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
}

// const dealCardReducer = (state, action) => {
//   switch (action.type) {
//     case "DEAL_CARD": {
//       const shoeCopy = state.shoe.slice()
//       shoeCopy.pop()
//       const newShoe =  shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
//       return {...state, shoe: newShoe}
//     }
//     case "DEAL_CARD_TO_PLAYER": {
//       const players = [...state.players]
//       const shoe = [...state.shoe]
//       const playerId = action.payload.playerId

//       players[playerId] = {
//         ...players[playerId],
//         cards: [
//           ...players[playerId].cards,
//           shoe.pop()
//         ]
//       }
//       return {...state, players, shoe}
//     }
//     case "DEAL_CARD_TO_DEALER":
//     default:
//       throw new Error();
//   }
// }

function App() {
  return (
    <RootContext.Provider value={store}>
      <Spanish21 />
    </RootContext.Provider>
  )
}

export default App;
