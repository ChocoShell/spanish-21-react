import React, { useContext } from 'react';

import PlayerContext from 'context/player-context';
import CardContext from 'context/card-context';

import Player from 'Player';
import Dealer from 'Dealer';
import Shoe from 'Shoe';

import './Spanish21.css';


const Spanish21 = () => {
  const {players: cardPlayers} = useContext(CardContext)
  const {players: playerPlayers} = useContext(PlayerContext)

  const players = cardPlayers.map((v, ind) => {
    return {...playerPlayers[ind], active: v.active}
  })

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


  // Dealer, Player, Shoe
  // Do components care about each other? Not really
  // Players can have player state, dealer can have dealer state
  // How do they get card from shoe's state?
  // https://stackoverflow.com/questions/54273673/react-setstate-callback-return-value/54273694#54273694
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