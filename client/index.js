import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import '../resources/css/style.css';
import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);