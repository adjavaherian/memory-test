// reducers.js

export const game = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return Array.prototype.slice.call(state.game.cards || 1);
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};
