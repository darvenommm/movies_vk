import { createBrowserRouter, redirect } from 'react-router-dom';

import { paths } from '@/share/constants/routing';
import { RootPage } from '@/pages/RootPage';
import { MoviesPage } from '@/pages/MoviesPage';
import { MoviePage } from '@/pages/MoviePage';
import { FavoriteMoviesPage } from '@/pages/FavoriteMoviesPage';

type RedirectReturning = ReturnType<typeof redirect>;

export const router = createBrowserRouter([
  {
    path: '',
    element: <RootPage />,
    children: [
      {
        path: '/',
        element: <MoviesPage />,
      },
      {
        path: paths.movies,
        element: <MoviesPage />,
      },
      {
        path: paths.movie,
        element: <MoviePage />,
      },
      {
        path: paths.favoriteMovies,
        element: <FavoriteMoviesPage />,
      },
      {
        path: '*',
        loader: (): RedirectReturning => redirect(paths.movies),
      },
    ],
  },
]);
