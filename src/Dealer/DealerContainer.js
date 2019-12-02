import React, { useContext, useEffect } from 'react';

import {sumCards} from 'utils';
import PlayerContext from 'context/player-context';
import CardContext from 'context/card-context';

import Dealer from './Dealer';

const useDealer = active => {
  const {dealCardsToDealer} = useContext(CardContext)

  useEffect(() => {
    if (active) {
      dealCardsToDealer()
    }
  // Adding dealCardsToDealer to have exhaustive depdendencies
  }, [active, dealCardsToDealer])
}

const DealerContainer = ({id}) => {
  const {
    setNextPlayer,
    setActivePlayer,
    ...context1
  } = useContext(PlayerContext)

  const {
    dealRound,
    ...context2
  } = useContext(CardContext)

  const {active} = context1.players[id]
  const {cards} = context2.players[id]

  useDealer(active)
  
  const total = sumCards(cards)
  const bust = total > 21

  const dealRoundClick = () => {
    setActivePlayer(1)
    dealRound()
  }

  return (
    <Dealer
      id={id}
      cards={cards}
      total={total}
      bust={bust}
      active={active}
      nextPlayer={setNextPlayer}
      dealRound={dealRoundClick}
    />
  )
}

export default DealerContainer;
