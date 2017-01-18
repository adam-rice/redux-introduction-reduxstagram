/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import css from './styles/style.styl';
import store, { history } from './store.js';
import App from './components/App.js';
import Single from './components/Single.js';
import Photogrid from './components/Photogrid.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('application'));
