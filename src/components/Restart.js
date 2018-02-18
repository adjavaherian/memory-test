// Card.js
import React from 'react';

export const Restart = (props) => {
    console.table('props', props)
    return (
      <button className="restart" onClick={() => props.restart()}>
        <span>Restart</span>
      </button>
    );
}

export default Restart;
