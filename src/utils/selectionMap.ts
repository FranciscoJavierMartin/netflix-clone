import { VideoGenres } from '../constants/types';
import { FirebaseVideo } from '../interfaces/fireabseEntity';

export default function selectionMap(
  series: FirebaseVideo[] = [],
  films: FirebaseVideo[] = []
) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === VideoGenres.Documentaries),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === VideoGenres.Comedies),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === VideoGenres.Children),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === VideoGenres.Crime),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === VideoGenres.FeelGood),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === VideoGenres.Drama),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === VideoGenres.Thriller),
      },
      {
        title: 'Children',
        data: films.filter((item) => item.genre === VideoGenres.Children),
      },
      {
        title: 'Suspense',
        data: films.filter((item) => item.genre === VideoGenres.Suspense),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === VideoGenres.Romance),
      },
    ],
  };
}
