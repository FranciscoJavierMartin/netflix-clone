import { VideoGenres } from '../constants/types';

export interface FirebaseVideo {
  id: string;
  title: string;
  description: string;
  genre: VideoGenres;
  maturity: string;
  slug: string;
  docId: string;
}
