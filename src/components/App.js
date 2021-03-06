require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restart, saveUser, setuid } from '../actions/game-actions';

import Game from './Game';
import Stats from './Stats';
import Controls from './Controls';
import Form from './UserForm';
import SavedMessages from './SavedMessages';
import classnames from 'classnames';

function checkURL (cb) {
  if (window) {
    const url = new URL(window.location);
    const uid = url.searchParams.get('uid');
    console.log('uid', uid);
    cb(uid);
  }
}

export const Congrats = ({ totalClicks }) => {
  return (
    <p>
      Congrats!  You completed the game in {totalClicks} clicks
    </p>
  )
}

export const Instructions = () => {
  return (
    <p>Click on the tiles below to flip a card and start the memory game.
      This is not a timed test, but we'll be recording the number of clicks until all tiles are matched.
      This is an anonymous submission, but if you'd like to track your results over time, fill out the form
      and we'll get you a unique Id that you can use to track future games.
    </p>
  )
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.restart = props.restart.bind(this);
    this.saveUser = props.saveUser.bind(this);
    this.setuid = props.setuid.bind(this);
    this.rowClasses = classnames('row');
    checkURL(this.setuid);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="wrap container">
        <h1>Memory Test Game</h1>
        {
          this.props.game.completed
          ? <Congrats totalClicks={this.props.totalClicks} />
          : <Instructions />
        }
        {
          this.props.game.completed
          ? <div><span>Your results have been stored in the database.  Click Restart to play again.</span></div>
          : <Game />
        }
        {
          (typeof this.props.user.uid === 'string')
          ? <SavedMessages
              uid={this.props.user.uid}
              saved={this.props.game.saved}
              completed={this.props.game.completed}
            />
          : <Form className={this.rowClasses} handleSubmit={(val) => this.saveUser(val)} />
        }
        {
          this.props.game.completed
          ? <Controls className={this.rowClasses} restart={this.restart} />
          : <div></div>
        }
        <Stats className={this.rowClasses} totalClicks={this.props.totalClicks} />
     </div>

    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
  cards: state.game.cards,
  shuffled: state.game.shuffled,
  totalClicks: state.game.totalClicks,
  game: state.game,
  user: state.user
});

const mapDispatchToProps = {
  restart,
  saveUser,
  setuid
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
