import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/app.jsx';
import Reducer from './reducer';

const Store = createStore(Reducer);

render(
  <Provider store={ Store }>
    <App />
  </Provider>, document.getElementById('app')
);
