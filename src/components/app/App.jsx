import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterById from '../../containers/CharacterById';
import CharacterPage from '../../containers/CharacterPages';
import Header from '../header/Header';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={CharacterPage} />
          <Route exact path="/characters/:id" component={CharacterById} />
        </Switch>
      </Router>
    </>
  );
}
