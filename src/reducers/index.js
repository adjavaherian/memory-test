// reducers.js
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initialState } from '../stores/app-store';
import {
  CREATE_DECK,
  SHUFFLE_DECK,
  CARD_CLICK,
  INCREMENT_CLICKS,
  SET_OPEN,
  SET_CLOSED,
  CARD_OPEN,
  CARD_CLOSE,
  CARD_LOCK,
  RESTART,
  SAVE_USER
} from '../actions/game-actions';

export const game = (state = {}, action) => {

  const updatedCards = Object.assign({}, state.cards);

  switch (action.type) {
    case CREATE_DECK:
      return Object.assign({}, state, { cards: action.cardHash });
    case SHUFFLE_DECK:
      return Object.assign({}, state, { shuffled: action.shuffled });
    case CARD_CLICK:
      const picked = !state.cards[action.id].picked;
      updatedCards[action.id] = Object.assign({}, state.cards[action.id], { picked });
      return Object.assign({}, state, {
        cards: updatedCards
      });
    case INCREMENT_CLICKS:
      return Object.assign({}, state, {
        totalClicks: ++state.totalClicks
      });
    case CARD_OPEN:
      updatedCards[action.id] = Object.assign({}, state.cards[action.id], { picked: true });
      return Object.assign({}, state, {
        cards: updatedCards
      });
    case CARD_CLOSE:
      updatedCards[action.id] = Object.assign({}, state.cards[action.id], { picked: false });
      return Object.assign({}, state, {
        cards: updatedCards
      });
    case CARD_LOCK:
      updatedCards[action.id] = Object.assign({}, state.cards[action.id], { locked: true });
      return Object.assign({}, state, {
        cards: updatedCards
      });
    case SET_OPEN:
      return Object.assign({}, state, {
        open: action.id
      });
    case SET_CLOSED:
      return Object.assign({}, state, {
        open: null
      });
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  form: formReducer,
  game
});

export const rootReducer = (state, action) => {

  if (action.type === RESTART) {
    const gameNumber = state.game.gameNumber + 1;
    const updatedState = Object.assign({}, initialState, { gameNumber });
    state = Object.assign({}, { game: updatedState });
  }

  if (action.type === SAVE_USER) {
    console.log('actionid', action.id);
    const values = Object.assign({}, state.form.userForm.values, { uid: action.id });
    const userForm = Object.assign({}, state.form.userForm, { values });
    // debugger;
    state = Object.assign({}, state, { form: { userForm } });
  }

  return appReducer(state, action)
}
