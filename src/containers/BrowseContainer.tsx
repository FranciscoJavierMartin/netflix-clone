import React, { useEffect, useState } from 'react';
import { Slides } from '../constants/types';
import useFirebaseContext from '../context/hooks/useFirebaseContext';
import { SelectProfileContainer } from './Profiles';
import { Card, Header, Loading } from '../components';
import logo from '../logo.svg';
import { HOME_PAGE_ROUTE } from '../constants/routes';
import { FirebaseVideo } from '../interfaces/fireabseEntity';

interface BrowseContainerProps {
  slides: Slides;
}

export default function BrowseContainer({ slides }: BrowseContainerProps) {
  const [category, setCategory] = useState<'series' | 'films'>('series');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [profile, setProfile] = useState<{
    displayName: string;
    photoURL: string;
  }>({ displayName: '', photoURL: '' });
  const [loading, setLoading] = useState<boolean>(true);
  const [slideRows, setSlideRows] = useState<
    {
      title: string;
      data: FirebaseVideo[];
    }[]
  >([]);

  const { firebase } = useFirebaseContext();
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [category, slides]);

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
            <Header.TextLink
              active={category === 'series'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={profile.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoURL} />
                  <Header.TextLink>{profile.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
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
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            {/* <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src='/videos/bunny.mp4' />
              </Player>
            </Card.Feature> */}
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer
      user={firebase.auth().currentUser!}
      setProfile={setProfile}
    />
  );
}
