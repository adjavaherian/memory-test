// Card.js
import React from 'react';

export function Card (props) {
    return (
      <div className="card" data-id={props.id} onClick={(e)  => props.onClick(e)}>
        <div className="inside">
          <div className="back"><img src={props.img} /></div>
          <div className="front"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png" /></div>
        </div>
      </div>
    );
}

export default Card;
