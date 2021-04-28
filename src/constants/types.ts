import firebase from 'firebase';
import {
  FIREBASE_COLLECTION_FILMS,
  FIREBASE_COLLECTION_SERIES,
} from './firebaseCollections';

export type FirebaseUser = firebase.User;
export type FirebaseCollections =
  | typeof FIREBASE_COLLECTION_FILMS
  | typeof FIREBASE_COLLECTION_SERIES;
