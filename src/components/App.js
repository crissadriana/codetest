import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Countries from './Countries';
import UniversitiesPage from './UniversitiesPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/universities/:alpha2Code/:country">
              <UniversitiesPage />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
