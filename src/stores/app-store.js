// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';

export const required = value => value ? undefined : undefined;

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

export const initialUserState = {
  gender: { value: null, type: 'radio', label: 'Gender', name: 'gender', validators: [required], 'options': ['M', 'F', 'N'] },
  injured: { value: null, type: 'radio', label: 'Injured', name: 'injured', validators: [required], 'options': ['Y', 'N'] },
  uid: { value: '', type: 'text', label: 'User Id', name: 'uid', validators: [required] },
  age: { value: '', type: 'text', label: 'Age', name: 'age', validators: [required] },
  name: { value: '', type: 'text', label: 'Name', name: 'name', validators: [required] },
  nationality: { value: '', type: 'text', label: 'Nationality', name: 'nationality', validators: [required] },
  ethnicity: { value: '', type: 'text', label: 'Ethnicity', name: 'ethnicity', validators: [required] }
};

export const store = createStore(
    rootReducer,
    { game: initialState, user: initialUserState },
    composeWithDevTools(
      applyMiddleware(thunk)
    )
);
