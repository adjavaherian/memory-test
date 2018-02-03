// reducers.js

export const game = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return Object.assign({}, state);
    case 'CARD_CLICK':
      return Object.assign({}, state, { totalClicks: ++state.totalClicks } );
    default:
      return state;
  }
};
