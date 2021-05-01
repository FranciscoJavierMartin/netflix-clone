import React, { useEffect, useState } from 'react';
import { Slides } from '../constants/types';
import useFirebaseContext from '../context/hooks/useFirebaseContext';
import { SelectProfileContainer } from './Profiles';
import { Header, Loading } from '../components';
import logo from '../logo.svg';
import { HOME_PAGE_ROUTE } from '../constants/routes';

interface BrowseContainerProps {
  slides: Slides;
}
// TODO: Fix error on image is not displayed on small screen: 5:44:10
export default function BrowseContainer({ slides }: BrowseContainerProps) {
  const [profile, setProfile] = useState<{
    displayName: string;
    photoURL: string;
  }>({ displayName: '', photoURL: '' });
  const [loading, setLoading] = useState<boolean>(true);
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <>
      {loading ? (
        <Loading src={profile.photoURL || ''} />
      ) : (
        <Loading.ReleaseBody />
      )}
      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={HOME_PAGE_ROUTE} src={logo} alt='Netflix' />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={profile.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoURL} />
                  <Header.TextLink>{profile.displayName}</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer
      user={firebase.auth().currentUser!}
      setProfile={setProfile}
    />
  );
}
