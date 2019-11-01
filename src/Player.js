import React from 'react';
import './Player.css';

const Player = props => {
  return (
    <div className="player" id={props.id}>
      Player {props.id} goes here
    </div>
  )
}

export default Player;
