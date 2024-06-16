import { paths } from '@/share/constants/routing';

interface INavigationLink {
  path: string;
  text: string;
}

export const navigationLinks: INavigationLink[] = [
  {
    path: paths.movies,
    text: 'all movies',
  },
  {
    path: paths.favoriteMovies,
    text: 'your favorite movies',
  },
];
