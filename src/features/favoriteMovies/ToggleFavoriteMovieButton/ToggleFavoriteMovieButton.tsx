import { useAppDispatch, useAppSelector } from '@/share/stateManager/redux';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
  selectDoesMovieExist,
} from '@/entities/favoriteMovies';

import type { IFavoriteMovie } from '@/entities/favoriteMovies';

export const ToggleFavoriteMovieButton = ({
  id,
  ...favoriteMoviesData
}: { id: number } & IFavoriteMovie): JSX.Element => {
  const dispatcher = useAppDispatch();
  const doesExistMovie = useAppSelector((state) => selectDoesMovieExist(state, id));

  const clickButtonHandler = (): void => {
    if (doesExistMovie) {
      dispatcher(removeFavoriteMovie(id));
    } else {
      dispatcher(addFavoriteMovie({ id, ...favoriteMoviesData }));
    }
  };

  return (
    <button onClick={clickButtonHandler} type="button">
      {doesExistMovie ? 'Remove' : 'Add'}
    </button>
  );
};
