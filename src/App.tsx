import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  BROWSE_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SIGN_IN_PAGE_ROUTE,
  SIGN_UP_PAGE_ROUTE,
} from './constants/routes';
import { BrowsePage, HomePage, SignInPage, SignUpPage } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE}>
          <HomePage />
        </Route>
        <Route exact path={BROWSE_PAGE_ROUTE}>
          <BrowsePage />
        </Route>
        <Route exact path={SIGN_IN_PAGE_ROUTE}>
          <SignInPage />
        </Route>
        <Route exact path={SIGN_UP_PAGE_ROUTE}>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
