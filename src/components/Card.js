// Card.js
import React from 'react';
import classnames from 'classnames';

export function Card (props) {
    const inside = classnames('inside', { picked: props.picked });
    return (
      <div className="card" data-id={props.id} onClick={() => props.onClick(props.id)}>
        <div className={inside}>
          <div className="back"><img src="./images/back_.jpg" /></div>
          <div className="front"><img src={props.img} /></div>
        </div>
      </div>
    );
}

export default Card;
