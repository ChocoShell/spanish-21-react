import React, { Component } from 'react';

import RootContext from './context/root-context';

import './Spanish21.css';

import Player from './PlayerContainer';
import Dealer from './DealerContainer';
import Spanish21Shoe from './Spanish21ShoeContainer';


class Spanish21 extends Component {
// const Spanish21 = () => {



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
  //         <Spanish21Shoe
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
  render () {
    return (
      <RootContext.Consumer>
        {({shoe, players, dealCard, dealCardToPlayer, setNextPlayer, activePlayer, dealRound}) => (
          <div className="game">
            <div>
              <Dealer
                info={players[0]}
                nextPlayer={setNextPlayer}
                dealRound={dealRound}
              />
              <div className="dealerside">    
                <Spanish21Shoe
                  shoe={shoe}
                  card={shoe[shoe.length-1]}
                  dealCard={dealCard}
                />
              </div>
              {activePlayer}
              <div className="players">
                {
                  players.slice(1).map(
                    (player, index) => {
                      return (
                        <Player
                          key={index+1}
                          player={player}
                          id={index+1}
                          dealCard={() => dealCardToPlayer(index+1)}
                        />
                      )
                    }
                  )
                }
              </div>
            </div>
          </div>
        )}
      </RootContext.Consumer>
    );
  }
}

Spanish21.contextType = RootContext;

export default Spanish21;
