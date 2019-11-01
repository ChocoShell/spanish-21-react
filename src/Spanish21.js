import React, { Component } from 'react';

import logo from './logo.svg';
import './Spanish21.css';

import PlayerContainer from './PlayerContainer';
import DealerContainer from './DealerContainer';
import ShoeContainer from './ShoeContainer';


class Spanish21 extends Component {
  // Game should have min and max bet
  render() {
    return (
      <div className="game">
        <div className="dealerside">
          <DealerContainer />
          <ShoeContainer />
        </div>
        <div className="players">
          <PlayerContainer
            id={1}
          />
          <PlayerContainer
            id={2}
          />
          <PlayerContainer
            id={3}
          />
          <PlayerContainer
            id={4}
          />
          <PlayerContainer
            id={5}
          />
          <PlayerContainer
            id={6}
          />
        </div>
      </div>
    );
  }
}

export default Spanish21;
