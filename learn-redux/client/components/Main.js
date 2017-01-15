/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>{this.props.title}</Link>
        </h1>
      </div>
    );
  }
}