import { useEffect, useState } from 'react';
import { firebaseCollections } from '../constants/firebaseCollections';
import useFirebaseContext from '../context/hooks/useFirebaseContext';
import { FirebaseVideo } from '../interfaces/fireabseEntity';

export default function useContent(target: firebaseCollections) {
  const [content, setContent] = useState<FirebaseVideo[]>([]);
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    (async function () {
      const { docs } = await firebase.firestore().collection(target).get();
      const allContent = docs.map<FirebaseVideo>(
        (contentObj) =>
          ({
            ...contentObj.data(),
            docId: contentObj.id,
          } as FirebaseVideo)
      );
      setContent(allContent);
    })();
  }, [firebase, target]);

  return { [target]: content };
}
