import React, { Component } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import RecursiveArray from './components/recursiveArray/recursiveArray';
import SpeedTests from './components/speedTests/speedTests';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RecursiveArray} />
        <Route exact path ="/recurse-vs-memoization" component={SpeedTests} />
      </Switch>
    )
  }
}

export default Routes;
