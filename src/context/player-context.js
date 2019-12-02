import React from 'react';

const state = {
  players: [],
  activePlayer: 0,
}

const PlayerContext = React.createContext({
  ...state,
  setActivePlayer: playerId => {},
  setNextPlayer: () => {},
  setAllInactive: () => {},
});

export default PlayerContext;
