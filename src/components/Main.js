require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
const init = require('../actions/init');

class AppComponent extends React.Component {
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div className="game"></div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
