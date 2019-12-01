import React, { Component, useContext } from 'react';

import RootContext from './context/root-context';

import './Spanish21.css';

import Player from './PlayerContainer';
import Dealer from './DealerContainer';
import Shoe from './ShoeContainer';


const Spanish21 = () => {
  const {
    shoe,
    players,
    activePlayer,
    // Functions
    dealCard,
    dealCardToPlayer,
    dealRound,
    setNextPlayer,
  } = useContext(RootContext)

  // reducer(state, action) {
  //   switch (action.type) {
  //     case 'getCardFromShoe': {
  //       const shoeCopy = this.state.shoe.slice()
  //       const card = shoeCopy.pop()
  //       const newShoe =  shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
  //       return {...state, shoe: newShoe}
  //     }
  //     default:
  //       throw new Error();
  //   }
  // }

  // getCardFromShoe() {
  //   const shoeCopy = this.state.shoe.slice()
  //   const card = shoeCopy.pop()
  //   const newShoe =  shoeCopy.length === 0 ? shuffle(getDecks(8)) : shoeCopy
  //   this.setState({shoe: newShoe})
  //   return card
  // }
  //<Dealer />
  // <div className="dealerside">    
  //         <Shoe
  //           shoe={shoe}
  //           card={card}
  //           dealCard={card}
  //         />
  //       </div>
  //       <div className="players">
  //         {
  //           players.map(
  //             (player, index) => {
  //               return (
  //                 <Player
  //                   key={index}
  //                   player={player}
  //                   id={index}
  //                 />
  //               )
  //             }
  //           )
  //         }
  //       </div>
  //       <div>
  //         <button onClick={this.dealRound}>
  //           Deal Round
  //         </button>
  //       </div>

  // Game should have min and max bet
  return (
    <div className="game">
      <div>
        <Dealer id={0} />
        <div className="dealerside">    
          <Shoe />
        </div>
        <div className="players">
          {
            players.slice(1).map(
              (_, index) => <Player key={index+1} id={index+1} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Spanish21;