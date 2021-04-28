import { useState, useEffect } from 'react';
import { LOCALSTORAGE_USER_KEY } from '../constants/localStorage';
import { FirebaseUser } from '../constants/types';
import useFirebaseContext from '../context/hooks/useFirebaseContext';

export default function useAuthListener() {
  const [user, setUser] = useState<FirebaseUser | null>(() => {
    const userFromLocalStorage = localStorage.getItem(LOCALSTORAGE_USER_KEY);
    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  });
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(authUser));
      } else {
        localStorage.removeItem(LOCALSTORAGE_USER_KEY);
      }

      setUser(authUser);
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
