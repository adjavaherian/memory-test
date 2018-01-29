// Card.js
import React, { Component } from 'react';

export class Card extends Component {

  render () {
      return (
        <div className="card" data-id="{this.props.id}">
          <div className="inside">
            <div className="front"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png" /></div>
            <div className="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png" alt="" /></div>
          </div>
        </div>
      );
  }
}

Component.defaultProps = {

}

export default Card;
