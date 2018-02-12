// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducers';
import thunk from 'redux-thunk';

export const initialState = {
  cards: [
    {
      name: 'one',
      img: './images/1_.jpg',
      id: 1,
      picked: false
    },
    {
      name: 'two',
      img: './images/2_.jpg',
      id: 2,
      picked: false
    },
    {
      name: 'three',
      img: './images/3_.jpg',
      id: 3,
      picked: false
    },
    {
      name: 'four',
      img: './images/4_.jpg',
      id: 4,
      picked: false
    },
    {
      name: 'five',
      img: './images/5_.jpg',
      id: 5,
      picked: false
    },
    {
      name: 'six',
      img: './images/6_.jpg',
      id: 6,
      picked: false
    }
  ],
  totalClicks: 0,
  open: null
}

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
);
