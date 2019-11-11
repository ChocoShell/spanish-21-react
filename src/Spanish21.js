import React, { Component, useContext } from 'react';
import { Context } from './App.js';

import './Spanish21.css';

import Player from './PlayerContainer';
import Dealer from './DealerContainer';
import Spanish21Shoe from './Spanish21ShoeContainer';

import {shuffle, getDecks} from './utils'

// class Spanish21 extends Component {
const Spanish21 = () => {
  // constructor(props) {
  //   super(props)
  //   // this.dealRound = this.dealRound.bind(this)
  // //   this.state = {
  // //     shoe: shuffle(getDecks(8)),
  // //     players: [
  // //       {bust: false, cards: []},
  // //       {bust: false, cards: []},
  // //       {bust: false, cards: []},
  // //       {bust: false, cards: []},
  // //       {bust: false, cards: []},
  // //       {bust: false, cards: []}
  // //     ],
  // //     card: null, // Remove this later
  // //     cardInd: 0
  // //   }
  // }

  // dealRound() {
  //   this.resetRound()
  //   for (var j = 0; j < 2; j++) {
  //     for (var i = 0; i < this.state.players.length; i++) {
  //       this.dealCardToPlayer(i)
  //     }
  //   }
  // }

  // resetRound() {
  //   console.log("Reset Call")
  //   this.setState(state => {
  //       for (var i = 0; i < state.players.length; i++) {
  //         state.players[i].cards = []
  //       }
  //       console.log(state.players)
  //       return {players: state.players}
  //     }
  //   )
  // }

  // dealCardToPlayer(playerId){
  //   const players = [...this.state.players];
  //   players[playerId] = {
  //     ...players[playerId],
  //     cards: [
  //       ...players[playerId].cards,
  //       this.getCardFromShoe()
  //     ]
  //   }
  //   this.setState({players});
  // }

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
  const { dispatch, state } = useContext(Context);
  const { shoe, players } = state;
  return (
    <div className="game">
      <Dealer info={players[0]} />
      <div className="dealerside">    
        <Spanish21Shoe
          shoe={shoe}
          card={shoe[shoe.length-1]}
          dealCard={() => dispatch({type: 'DEAL_CARD'})}
        />
      </div>
      <div className="players">
        {
          players.slice(1).map(
            (player, index) => {
              return (
                <Player
                  key={index}
                  player={player}
                  id={index}
                />
              )
            }
          )
        }
      </div>
    </div>
  );
}

export default Spanish21;
