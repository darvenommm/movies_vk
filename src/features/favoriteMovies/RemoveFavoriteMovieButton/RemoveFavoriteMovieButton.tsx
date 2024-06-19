import { useAppDispatch } from '@/share/stateManager/redux';

import { removeFavoriteMovie } from '@/entities/favoriteMovies';

interface IRemoveFavoriteMovieButtonProps {
  id: number;
  className?: string;
}

export const RemoveFavoriteMovieButton = ({
  id,
  className,
}: IRemoveFavoriteMovieButtonProps): JSX.Element => {
  const dispatcher = useAppDispatch();

  const clickButtonHandler = (): void => {
    dispatcher(removeFavoriteMovie(id));
  };

  return (
    <button className={className} onClick={clickButtonHandler} type="button">
      Remove from favorite
    </button>
  );
};
