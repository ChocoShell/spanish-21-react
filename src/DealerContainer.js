import React, { Component } from 'react';

import Dealer from './Dealer';
import {sumCards} from './utils';

class DealerContainer extends Component {
  render() {
    const {cards, active} = this.props.info
    const total = sumCards(cards)
    const bust = total > 21
    return (
      <Dealer
        id={0}
        cards={cards}
        total={total}
        bust={bust}
        active={active}
      />
    )
  }
}

export default DealerContainer;
