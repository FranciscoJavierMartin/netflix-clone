import { userInfo } from 'node:os';
import React from 'react';
import { Header, Profiles } from '../components';
import { HOME_PAGE_ROUTE } from '../constants/routes';
import { FirebaseUser } from '../constants/types';
import logo from '../logo.svg';

interface SelectProfileContainerProps {
  user: FirebaseUser;
  setProfile: React.Dispatch<React.SetStateAction<undefined>>;
}

export function SelectProfileContainer({
  user,
  setProfile,
}: SelectProfileContainerProps) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={HOME_PAGE_ROUTE} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={}>
            <Profiles.Picture src={user.photoURL || ''} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
