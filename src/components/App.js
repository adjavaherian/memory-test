require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCards, cardClick } from '../actions/game-actions';
import Card from './Card';

export class App extends Component {
  constructor(props) {
    super(props);
    this.cardClick = props.cardClick.bind(this);
  }
  componentDidMount() {}
  render() {
    console.log(this.props.game);
    return (
      <div className="game">
        {this.props.cards.map((card, i) => {
          return <Card {...card} key={i} onClick={this.cardClick} />
        })}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  cards: state.game.cards,
  totalClicks: state.game.totalClicks,
  game: state
});

const mapDispatchToProps = {
  getCards,
  cardClick
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
