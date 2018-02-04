// actions.js

export const CREATE_DECK = 'CREATE_DECK';
export const createDeck = () => {

  return (dispatch, getState) => {

    const { cards } = getState();

    const cardHash = cards
                      .concat(cards)
                      .reduce((prev, next, index) => {
                        prev[index] = next;
                        return prev;
                      }, {});

    dispatch({ type: CREATE_DECK, cardHash });

  }
};

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const shuffleDeck = () => {

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  return (dispatch, getState) => {

    const { cards } = getState();
    const shuffled = shuffleArray(Object.keys(cards));
    dispatch({ type: SHUFFLE_DECK, shuffled });
  }

}

export const CARD_CLICK = 'CARD_CLICK';
export const cardClick = (id) => {
  // debugger;
  return { type: CARD_CLICK, id }
};
