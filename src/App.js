/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Category from './Category';
import Products from './Products';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={ Nav } />
        <Switch>
          <Route exact path='/products' component={ Products } />
          <Route exact path='/categories/:id' render={({ match }) => <Category id={match.params.id * 1} />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
