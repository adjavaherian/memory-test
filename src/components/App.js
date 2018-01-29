require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards } from '../actions/game-actions';
// const init = require('../actions/init');
import Card from './Card';

export class App extends Component {
  componentDidMount() {
    console.log('get', this.props.cards);
  }
  render() {
    return (
      <div className="game">
        {this.props.cards.map((card, i) => {
          return <Card {...card} key={i} />
        })}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  cards: state.game.cards,
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
