import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import reducer from './reducers';
import App from './routes/App';
import data from './db.json';

const history = createBrowserHistory();
const store = createStore(reducer, data);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('app'),
);
