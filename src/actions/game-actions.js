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
  return (dispatch, getState) => {
    dispatch({ type: CARD_CLICK, id });
    dispatch({ type: INCREMENT_CLICKS, id });

    const { open, cards } = getState();

    const currentCard = id;
    const prevCard = open;

    // debugger;
    // console.log('curr/prev', currentCard, prevCard);

    dispatch(cardOpen(currentCard));

    if (prevCard === null) { // nothing open
      console.log('nothing open');
      dispatch(setOpen(currentCard));
      return true
    }

    if (prevCard === currentCard) { // same card
      console.log('same card');
      dispatch(cardClose(currentCard));
      dispatch(setClosed());
      // lock current and prev
      return true;
    }

    if (prevCard !== currentCard) { // other card
      // check for match
      console.log('other card');
      if (prevCard && cards[prevCard].id === cards[currentCard].id) { // match
          // lock both cards open, null out open card
          console.log('card match');
          // debugger;
      } else {
        // close both cards, null
        console.log('no match');
        setTimeout(() => {
          dispatch(cardClose(prevCard));
          dispatch(cardClose(currentCard));
        }, 1000);

      }
      // null out open card
      dispatch(setClosed());
      return true;
    }
  }
};

export const CARD_OPEN = 'CARD_OPEN';
export const cardOpen = (id) => {
  return (dispatch) => {
    dispatch({ type: CARD_OPEN, id });
  }
}

export const CARD_CLOSE = 'CARD_CLOSE';
export const cardClose = (id) => {
  return (dispatch) => {
    dispatch({ type: CARD_CLOSE, id });
  }
}

export const INCREMENT_CLICKS = 'INCREMENT_CLICKS';
export const incrementClicks = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_CLICKS });
  }
};

export const SET_OPEN = 'SET_OPEN';
export const setOpen = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_OPEN, id });
  }

};

export const SET_CLOSED = 'SET_CLOSED';
export const setClosed = () => {
  return (dispatch) => {
    dispatch({ type: SET_CLOSED });
  }
};
