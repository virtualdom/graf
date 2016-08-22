import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

import App from './components/app.jsx';
import Reducer from './reducer';

const Store = createStore(Reducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store={ Store }>
    <App />
  </Provider>, document.getElementById('app')
);
