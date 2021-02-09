import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPage from '../../containers/CharacterPages';


export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterPage} />
        </Switch>
      </Router>
    </>
  );
}
