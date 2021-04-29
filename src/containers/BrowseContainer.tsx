import React, { useState } from 'react';
import { Slides } from '../constants/types';
import useFirebaseContext from '../context/hooks/useFirebaseContext';
import { SelectProfileContainer } from './Profiles';

interface BrowseContainerProps {
  slides: Slides;
}

export default function BrowseContainer({ slides }: BrowseContainerProps) {
  const [profile, setProfile] = useState();
  const { firebase } = useFirebaseContext();

  return (
    <SelectProfileContainer
      user={firebase.auth().currentUser!}
      setProfile={setProfile}
    />
  );
}
