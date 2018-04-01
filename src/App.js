import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={ Nav } />
      </div>
    </Router>
  )
}

export default App;
