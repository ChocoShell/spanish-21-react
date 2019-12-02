import React, { useContext } from 'react';

import CardContext from 'context/card-context';
import PlayerContext from 'context/player-context';

import Player from './Player';

const PlayerContainer = ({id}) => {
  const {
    dealCardToPlayer,
    players: cardPlayers,
  } = useContext(CardContext)

  const {
    setNextPlayer,
    players: playerPlayers,
  } = useContext(PlayerContext)
  
  const {active} = playerPlayers[id]
  const {cards, bust, total} = cardPlayers[id]

  const dealCardToMe = () => dealCardToPlayer(id)
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
