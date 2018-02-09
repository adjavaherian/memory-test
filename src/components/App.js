require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardClick } from '../actions/game-actions';
import Card from './Card';
import Stats from './Stats';

export class App extends Component {
  constructor(props) {
    super(props);
    this.cardClick = props.cardClick.bind(this);
  }
  componentDidMount() {}
  render() {
    console.log('game', this.props.state);
    return (
      <div className="game">
        <div className="game">
          {this.props.shuffled.map((id, i) => {
            return <Card {...this.props.cards[id]} key={i} id={id} onClick={this.cardClick} />
          })}
        </div>
        <Stats totalClicks={this.props.totalClicks} />
     </div>

    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  cards: state.cards,
  shuffled: state.shuffled,
  totalClicks: state.totalClicks,
  state: state
});

const mapDispatchToProps = {
  cardClick
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
