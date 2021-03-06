// reducers.js
import { combineReducers } from 'redux';
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
  MATCHED,
  ON_CHANGE,
  SAVE_USER,
  SET_UID,
  STORE_USER_UPDATE,
  GAME_COMPLETED,
  RESET_CARDS,
  RESET_COMPLETED
} from '../actions/game-actions';

export const game = (state = {}, action) => {
  // console.log('game', state);
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
    case MATCHED:
      const updatedMatched = state.matched.concat([action.prev, action.curr]);
      return Object.assign({}, state, {
        matched: updatedMatched
      });
    case GAME_COMPLETED:
      return Object.assign({}, state, { completed: true });
    case RESET_CARDS:
      return Object.assign({}, state, { cards: initialState.cards, matched: [] });
    case RESET_COMPLETED:
      return Object.assign({}, state, { completed: false, totalClicks: 0 });
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  console.log('state', state, action);
  switch (action.type) {
    case ON_CHANGE:
      state[action.name] = Object.assign({}, state[action.name], { value: action.value });
      return state;
    case SAVE_USER:
      return Object.assign({}, state, { saved: true, uid: action.id });
    case SET_UID:
      return Object.assign({}, state, { uid: action.uid });
    case STORE_USER_UPDATE:
      return Object.assign({}, state, { update_data: action.data });
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  game,
  user
});
