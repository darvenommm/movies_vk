import { useAppDispatch } from '@/share/stateManager/redux';

import { removeFavoriteMovie } from '@/entities/favoriteMovies';

interface IRemoveFavoriteMovieButtonProps {
  id: number;
}

export const RemoveFavoriteMovieButton = ({ id }: IRemoveFavoriteMovieButtonProps): JSX.Element => {
  const dispatcher = useAppDispatch();

  const clickButtonHandler = (): void => {
    dispatcher(removeFavoriteMovie(id));
  };

  return (
    <button onClick={clickButtonHandler} type="button">
      Remove from favorite
    </button>
  );
};
