import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router';
import { SIGN_IN_PAGE_ROUTE } from '../constants/routes';
import { FirebaseUser } from '../constants/types';

interface IsUserRedirectProps extends RouteProps {
  user: FirebaseUser | null;
  loggedInPath: string;
}

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...restProps
}: IsUserRedirectProps) {
  return (
    <Route
      {...restProps}
      render={() =>
        user ? <Redirect to={{ pathname: loggedInPath }} /> : children
      }
    />
  );
}

interface ProtectedRouteProps extends RouteProps {
  user: FirebaseUser | null;
}

export function ProtectedRoute({
  user,
  children,
  ...restProps
}: ProtectedRouteProps) {
  return (
    <Route
      {...restProps}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{ pathname: SIGN_IN_PAGE_ROUTE, state: { from: location } }}
          />
        )
      }
    />
  );
}
