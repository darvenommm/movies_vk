import { useAppSelector } from '@/share/stateManager/redux';

import { MovieItem } from '@/entities/movies';
import { RemoveFavoriteMovieButton } from '@/features/favoriteMovies/RemoveFavoriteMovieButton';
import { selectFavoriteMovies } from '@/entities/favoriteMovies';

import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './FavoriteMovies.module.scss';

export const FavoriteMovies = (): JSX.Element => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies);

  if (Object.keys(favoriteMovies).length === 0) {
    return <p>There aren't favorite movies :(</p>;
  }

  const favoriteMoviesElements = Object.entries(favoriteMovies).map(
    ([stringId, favoriteMovieData]): JSX.Element => {
      const id = Number(stringId);

      return (
        <MovieItem key={id} id={id} {...favoriteMovieData}>
          <RemoveFavoriteMovieButton className={buttonStyle.button} id={id} />
        </MovieItem>
      );
    },
  );

  return <ul className={classes.movies}>{favoriteMoviesElements}</ul>;
};
