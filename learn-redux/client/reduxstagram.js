/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from './styles/style.styl';
import Main from './components/Main.js';
import Single from './components/Single.js';
import Photogrid from './components/Photogrid.js';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);


render(router, document.getElementById('application'));
