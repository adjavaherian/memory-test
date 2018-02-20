// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { combineForms, formReducer } from 'react-redux-form';

const required = value => value ? undefined : undefined;

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
  open: null,
  gameNumber: 1
};

export const initialUserConfig = {
  age: { val: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
  gender: { val: '', type: 'text', label: 'Gender', name: 'gender', validators: [required] },
  injury: { val: '', type: 'text', label: 'Injury', name: 'injury', validators: [required] },
  uid: { val: 'dsfdf', type: 'text', label: 'UId', name: 'uid', validators: [required] },
  name: { val: '', type: 'text', label: 'Name', name: 'name', validators: [required] },
  nationality: { val: '', type: 'text', label: 'Nationality', name: 'nationality', validators: [required] },
  ethnicity: { val: '', type: 'text', label: 'Ethnicity', name: 'ethnicty', validators: [required] }
};

export const store = createStore(
    rootReducer,
    { game: initialState },
    composeWithDevTools(
      applyMiddleware(thunk)
    )
);
