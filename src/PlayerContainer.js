import React, { Component } from 'react';

import Player from './Player';

class PlayerContainer extends Component {
  state = {
    bank: 500,
    bet: 10 // How to handle doubling?
  }

  render() {
    return (
     <Player id={this.props.id}/>
    )
  }
}

export default PlayerContainer;
