import React from 'react';

const state = {
  shoe: null,
  cardInd: 0,
  players: [],
}

const RootContext = React.createContext({
  ...state,
  dealCard: () => {},
  dealCardToPlayer: i => {}
});

export default RootContext;
