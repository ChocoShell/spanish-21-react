import React from 'react';

const state = {
  shoe: null,
  cardInd: 0,
  players: [],
  activePlayer: 0,
}

const RootContext = React.createContext({
  ...state,
  dealCard: () => {},
  dealCardToPlayer: playerId => {},
  setActivePlayer: playerId => {},
});

export default RootContext;
