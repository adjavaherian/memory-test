// store.js
import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers';
import thunk from 'redux-thunk';

export const initialState = {
  game: {
    cards: [
      {
        name: 'php',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png',
        id: 1
      },
      {
        name: 'css3',
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png',
        id: 2
      }
    ],
    totalClicks: 0
  }
}

export default function configureStore(otherState) {
    return createStore(
        reducers,
        Object.assign({}, initialState, otherState),
        applyMiddleware(thunk)
    );
}
