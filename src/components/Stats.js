// Card.js
import React from 'react';

export function Stats (props) {
    return (
      <div className="total-clicks">
        <div>
          <span>Total Clicks &nbsp;</span><span>{props.totalClicks}</span>
        </div>
      </div>
    );
}

export default Stats;
