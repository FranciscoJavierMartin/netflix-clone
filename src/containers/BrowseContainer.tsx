import React, { useEffect, useState } from 'react';
import { FirebaseUser, Slides } from '../constants/types';
import useFirebaseContext from '../context/hooks/useFirebaseContext';
import { SelectProfileContainer } from './Profiles';

interface BrowseContainerProps {
  slides: Slides;
}

export default function BrowseContainer({ slides }: BrowseContainerProps) {
  const [profile, setProfile] = useState<FirebaseUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return (
    <SelectProfileContainer
      user={firebase.auth().currentUser!}
      setProfile={setProfile}
    />
  );
}
