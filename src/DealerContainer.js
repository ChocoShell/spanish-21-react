import React, { useContext, useEffect } from 'react';

import Dealer from './Dealer';
import {sumCards} from './utils';
import RootContext from './context/root-context';

const useDealer = active => {
  const {dealCardsToDealer} = useContext(RootContext)

  useEffect(() => {
    if (active) {
      dealCardsToDealer()
    }
  }, [active])
}


const DealerContainer = ({id}) => {
  const {
    dealRound,
    setNextPlayer,
    ...context
  } = useContext(RootContext)

  const playerInfo = context.players[id]
  const {cards, active} = playerInfo

  useDealer(active)
  
  const total = sumCards(cards)
  const bust = total > 21

  return (
    <Dealer
      id={id}
      cards={cards}
      total={total}
      bust={bust}
      active={active}
      nextPlayer={setNextPlayer}
      dealRound={dealRound}
    />
  )
}

export default DealerContainer;
