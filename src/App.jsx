import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/WelcomePage';
import Katalog from './components/CatalogPage';
import DogInfo from './components/DogInfoPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/katalog">
            <Katalog />
          </Route>
          <Route path="/doginfo/:dogOwnerId">
            <DogInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
