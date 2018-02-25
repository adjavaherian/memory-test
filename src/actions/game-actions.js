// actions.js
const axios = require('axios');
export const CREATE_DECK = 'CREATE_DECK';
export const createDeck = () => {
  return (dispatch, getState) => {
    const { game } = getState();
    const { cards } = game;
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
    const { game } = getState();
    const { cards } = game;
    const shuffled = shuffleArray(Object.keys(cards));
    dispatch({ type: SHUFFLE_DECK, shuffled });
  }
}

export const CARD_CLICK = 'CARD_CLICK';
export const cardClick = (id) => {
  return (dispatch, getState) => {

    const { game } = getState();
    const { open, cards } = game;

    const currentCard = id;
    const prevCard = open;
    const isLocked = cards[currentCard].locked;

    // debugger;
    console.log('curr/prev', currentCard, prevCard, isLocked);

    if (isLocked) { // check for lock
      return true;
    } else {
      dispatch({ type: CARD_CLICK, id });
      dispatch({ type: INCREMENT_CLICKS, id });
      dispatch(cardOpen(currentCard));
    }

    if (prevCard === null) { // nothing open
      console.log('nothing open');
      dispatch(setOpen(currentCard));
      return true;
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
          dispatch(cardLock(prevCard));
          dispatch(cardLock(currentCard));
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

export const RESTART = 'RESTART';
export const restart = () => (dispatch) => dispatch({ type: RESTART });

export const CARD_OPEN = 'CARD_OPEN';
export const cardOpen = (id) => (dispatch) => dispatch({ type: CARD_OPEN, id });

export const CARD_CLOSE = 'CARD_CLOSE';
export const cardClose = (id) => (dispatch) => dispatch({ type: CARD_CLOSE, id });

export const CARD_LOCK = 'CARD_LOCK';
export const cardLock = (id) => (dispatch) => dispatch({ type: CARD_LOCK, id });

export const INCREMENT_CLICKS = 'INCREMENT_CLICKS';
export const incrementClicks = () => (dispatch) =>  dispatch({ type: INCREMENT_CLICKS });

export const SET_OPEN = 'SET_OPEN';
export const setOpen = (id) => (dispatch) => dispatch({ type: SET_OPEN, id });

export const SET_CLOSED = 'SET_CLOSED';
export const setClosed = () => (dispatch) => dispatch({ type: SET_CLOSED });

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (event) => {

  if ( event ) {
    event.preventDefault();
  }

  return (dispatch, getState) => {
      const { user, game } = getState();

      const data = Object.keys(user).reduce((prev, next) => {
          prev[next] = user[next].value;
          return prev;
      }, {});

      data.gender = data.gender === 'on' ? true : false;
      data.injured = data.injured === 'on' ? true : false;

      data['totalClicks'] = game.totalClicks;

      axios({
          url: 'http://emsearch.io:9200/memory-test/doc/',
          method: 'post',
          data
        })
        .then((response) => {
          console.log('response', response);
          if (response.status === 201) {
            dispatch({ type: SAVE_USER, id: response.data._id });
            dispatch(gameSaved(response.data._id));
          }

        })
        .catch((err) => {
          console.log('error', err);
        });

    }
}

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = () => {
  return (dispatch, getState) => {

    const { game, user } = getState();
    const totalClicks = game.totalClicks || 0;
    const uid = user.uid;

    axios({
        url: `http://emsearch.io:9200/memory-test/doc/${uid}/_update`,
        method: 'post',
        data: {
        'script' : {
            'lang':'painless',
            'inline': 'ctx._source.totalClicks.add(params.totalClicks)',
            'params':{
              totalClicks
            }
          }

        }
      })
      .then((response) => {
        console.log('response', response);
        if (response.status === 201) {
          dispatch(gameSaved(response.data._id));
        }

      })
      .catch((err) => {
        console.log('error', err);
      });
  }
}

export const GAME_COMPLETED = 'GAME_COMPLETED';
export const gameCompleted = () => {

    return (dispatch, getState) => {

      const { user } = getState();

      if ( user.uid ) {
        dispatch(updateUser());
      } else {
        dispatch(saveUser());
      }

    }
}

export const GAME_SAVED = 'GAME_SAVED';
export const gameSaved = (uid = '') => {
  console.log('game saved!');
  if (history.pushState) {
      const newurl = `${window.location.protocol}//${window.location.host + window.location.pathname}?uid=${uid}`;
      window.history.pushState({ path: newurl }, '', newurl);
  }
}

export const SET_UID = 'SET_UID';
export const setuid = (uid = '') => {
  return (dispatch) => {
      dispatch({ type: SET_UID, uid });
  }
}

// export const ON_SUBMIT = 'ON_SUBMIT';
// export const onSubmit = (event) => {
//   event.preventDefault();
//   return (dispatch, getState) => {
//       console.log('disp', getState().user);
//       // const { user } = getState();
//       dispatch({
//         type: ON_SUBMIT
//       });
//   }
// };

export const ON_CHANGE = 'ON_CHANGE';
export const onChange = (event) => {
  // const value = evt.target.value;
  // console.log('value', value);
  const name = event.target.name;
  const value = event.target.value;
  // console.log('type', value, name);
  return (dispatch) => {
      // const { user } = getState();
      dispatch({
        type: ON_CHANGE, value, name
      });
  }
}
