import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card">
    {!props.hide &&
      <div className="card-content">
        <div className="value">
          {props.value}
        </div>
        <img
          className="card-suit"
          width="42px"
          src={`${process.env.PUBLIC_URL}/img/${props.suit}.png`}
          alt={props.suit && `${props.suit}`}
        />
      </div>
    }
    {props.hide &&
      <div className="card-content">Hidden Card</div>
    }
    </div>
  )
}

export default Card;
