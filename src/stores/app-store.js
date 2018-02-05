// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducers';
import thunk from 'redux-thunk';

export const initialState = {
  cards: [
    {
      name: 'php',
      img: '/images/1_.jpg',
      id: 1,
      picked: false
    },
    {
      name: 'css3',
      img: '/images/2_.jpg',
      id: 2,
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
