/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main.js';

render(<Main title="Reduxstagram" />, document.getElementById('application'));
