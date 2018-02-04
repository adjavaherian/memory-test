import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './stores/app-store';
import { createDeck, shuffleDeck } from './actions/game-actions';

store.dispatch(createDeck());
store.dispatch(shuffleDeck());

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
