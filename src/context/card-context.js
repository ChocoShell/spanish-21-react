import React from 'react';

const state = {
  shoe: null,
  cardInd: 0,
  players: [],
}

const CardContext = React.createContext({
  ...state,
  dealCard: () => {},
  dealCardToPlayer: playerId => {},
  dealCardsToDealer: () => {},
  dealRound: () => {},
});

export default CardContext;
