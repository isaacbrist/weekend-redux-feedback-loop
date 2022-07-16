import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// Array of products, this reducer is complete
const answerData = (state = [], action) => {
  if (action.type === 'ADD_NEW_ANSWER') {
    return [...state, action.payload];
  } else if (action.type === 'CLEAR_ALL_ANSWERS') {
    return [];
  }
  return state;
};
// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({answerData}),
  applyMiddleware(logger)
);
// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
