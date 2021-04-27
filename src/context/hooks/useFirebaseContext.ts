import { useContext } from 'react';
import { FirebaseContextState } from '../../interfaces/context';
import { FirebaseContext } from '../firebase';

export default function useFirebaseContext(): FirebaseContextState {
  return useContext(FirebaseContext);
}
