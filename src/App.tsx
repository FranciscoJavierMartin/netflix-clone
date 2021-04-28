import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  BROWSE_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SIGN_IN_PAGE_ROUTE,
  SIGN_UP_PAGE_ROUTE,
} from './constants/routes';
import { BrowsePage, HomePage, SignInPage, SignUpPage } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import useAuthListener from './hooks/useAuthListener';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE}>
          <HomePage />
        </Route>
        <ProtectedRoute user={user} exact path={BROWSE_PAGE_ROUTE}>
          <BrowsePage />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE_PAGE_ROUTE}
          exact
          path={SIGN_IN_PAGE_ROUTE}
        >
          <SignInPage />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={BROWSE_PAGE_ROUTE}
          exact
          path={SIGN_UP_PAGE_ROUTE}
        >
          <SignUpPage />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
