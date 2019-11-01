import React, { Component } from 'react';

import Dealer from './Dealer';

class DealerContainer extends Component {
  render() {
    return (
     <Dealer id={this.props.id}/>
    )
  }
}

export default DealerContainer;
