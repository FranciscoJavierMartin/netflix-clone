import { createContext } from 'react';
import { FirebaseContextState } from '../interfaces/context';

export const FirebaseContext = createContext<FirebaseContextState>(
  {} as FirebaseContextState
);
