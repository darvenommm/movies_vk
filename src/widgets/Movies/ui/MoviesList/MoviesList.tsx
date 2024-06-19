import { MovieItem } from '@/entities/movies';
import { ToggleFavoriteMovieButton } from '@/features/favoriteMovies/ToggleFavoriteMovieButton';

import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './MoviesList.module.scss';

import type { IResponseData } from '@/entities/movies';

interface IMoviesListProps {
  movies: IResponseData['docs'];
}

export const MoviesList = ({ movies }: IMoviesListProps): JSX.Element => {
  const moviesItems = movies.map(
    ({ id, names, year, rating: { imdb: rating }, poster: { url: posterUrl } }): JSX.Element => (
      <MovieItem
        key={id}
        id={id}
        title={names[0]?.name ?? 'Unknown title'}
        year={year}
        rating={rating}
        posterUrl={posterUrl}
      >
        <ToggleFavoriteMovieButton
          className={buttonStyle.button}
          id={id}
          title={names[0]?.name ?? 'Unknown title'}
          year={year}
          rating={rating}
          posterUrl={posterUrl}
        />
      </MovieItem>
    ),
  );

  return <ul className={classes.movies}>{moviesItems}</ul>;
};
