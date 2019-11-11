import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="value">
          {props.value}
        </div>
        <img src={`${process.env.PUBLIC_URL}/${props.suit}.png`} alt={props.suit && `${props.suit}`}/>
      </div>
    </div>
  )
}

export default Card;