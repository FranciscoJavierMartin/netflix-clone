import firebase from 'firebase';

export type FirebaseUser = firebase.User;

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
