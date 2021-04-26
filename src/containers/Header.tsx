import React from 'react';
import { Header } from '../components';
import { HOME_PAGE_ROUTE, SIGN_IN_PAGE_ROUTE } from '../constants/routes';
import logo from '../logo.svg';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={HOME_PAGE_ROUTE} alt='Netflix' src={logo} />
        <Header.Button to={SIGN_IN_PAGE_ROUTE}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
