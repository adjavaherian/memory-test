// Controls.js
import React from 'react';
import classnames from 'classnames';
import Restart from './Restart'

export const Controls = (props) => {
  console.log('props', props)
    return (
      <div className={classnames('controls', 'row')} >
        <div className="col-sm-6">
          <Restart restart={props.restart} />
        </div>
        <div className="col-sm-6"></div>
      </div>
    );
}

export default Controls;
