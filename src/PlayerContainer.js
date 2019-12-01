import React, { useContext } from 'react';

import Player from './Player';
import {sumCards} from './utils';
import RootContext from './context/root-context';

const PlayerContainer = ({id}) => {
  const {
    dealCard,
    setNextPlayer,
    players,
  } = useContext(RootContext)
  const {cards, active, bust, total} = players[id]
  const dealCardToMe = () => dealCard(id)
  return (
    <Player
      id={id}
      cards={cards}
      active={active}
      bust={bust}
      total={total}
      hit={dealCardToMe}
      stay={setNextPlayer}
    />
  )
}

export default PlayerContainer;
