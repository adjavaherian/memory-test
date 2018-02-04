// reducers.js
import { CREATE_DECK, SHUFFLE_DECK, CARD_CLICK} from '../actions/game-actions';

export const reducer = (state = {}, action) => {
  // debugger
  switch (action.type) {
    case CREATE_DECK:
      return Object.assign({}, state, { cards: action.cardHash });
    case SHUFFLE_DECK:
      return Object.assign({}, state, { shuffled: action.shuffled });
    case CARD_CLICK:
      const picked = !state.cards[action.id].picked;
      const updatedCard = Object.assign({}, state.cards[action.id], { picked });
      const updatedCards = Object.assign({}, state.cards);
      updatedCards[action.id] = updatedCard;
      // debugger;
      return Object.assign({}, state, {
        totalClicks: ++state.totalClicks,
        cards: updatedCards
      });
    default:
      return state;
  }
};
