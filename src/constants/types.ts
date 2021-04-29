import firebase from 'firebase';
import { FirebaseVideo } from '../interfaces/fireabseEntity';

export type FirebaseUser = firebase.User;
export type Slides =  {
  series: {
      title: string;
      data: FirebaseVideo[];
  }[];
  films: {
      title: string;
      data: FirebaseVideo[];
  }[];
}
export enum VideoGenres {
  Documentaries = 'documentaries',
  Comedies = 'comedies',
  Children = 'children',
  Crime = 'crime',
  FeelGood = 'feel-good',
  Drama = 'drama',
  Suspense = 'suspense',
  Thriller = 'thriller',
  Romance = 'romance',
}
