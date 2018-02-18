require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardClick, restart } from '../actions/game-actions';
import Card from './Card';
import Stats from './Stats';
import Controls from './Controls';
import UserForm from './UserForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.cardClick = props.cardClick.bind(this);
    this.restart = props.restart.bind(this);
    this.saveForm = () => {
      console.log('save form');
    }
  }
  componentDidMount() {}
  render() {
    console.log('game', this.props.state);
    return (
      <div className="wrap container">
        {/* <div className="game">
          {this.props.shuffled.map((id, i) => {
            return <Card {...this.props.cards[id]} key={i} id={id} onClick={this.cardClick} />
          })}
        </div> */}
        <UserForm {...this.props} saveForm={this.saveForm} />
        <Controls restart={this.restart} />
        <Stats totalClicks={this.props.totalClicks} />
     </div>

    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  cards: state.game.cards,
  shuffled: state.game.shuffled,
  totalClicks: state.game.totalClicks,
  state: state.game
});

const mapDispatchToProps = {
  cardClick,
  restart
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
