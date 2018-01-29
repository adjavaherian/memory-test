require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions/game-actions';
// const init = require('../actions/init');
import Card from './Card';

export class App extends Component {
  componentDidMount() {
    console.log('get', this.props);
  }
  render() {
    return (
      <div className="game">
        <Card />
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  game: state.game
});

const mapDispatchToProps = {
  getCards
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
