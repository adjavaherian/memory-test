import React from 'react';
import { connect } from 'react-redux';
import { cardClick } from '../actions/game-actions';
import Card from './Card';

export const Game = ({ shuffled, cards, cardClick }) => {
  return (
    <div className="game game--3cols">
      {shuffled.map((id, i) => {
        return <Card {...cards[id]} key={i} id={id} onClick={cardClick} />
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cards: state.game.cards,
  shuffled: state.game.shuffled
});

const mapDispatchToProps = {
  cardClick
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
