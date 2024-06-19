import { ToggleFavoriteMovieButton } from '@/features/favoriteMovies/ToggleFavoriteMovieButton';

import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './MovieBlock.module.scss';

interface IMovieBlockProps {
  id: number;
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
  description: string;
  genres: string[];
}

export const MovieBlock = ({
  id,
  title,
  posterUrl,
  rating,
  year,
  description,
  genres,
}: IMovieBlockProps): JSX.Element => {
  return (
    <div className={classes.movie}>
      <img width={200} height={300} src={posterUrl} alt="" />
      <div>
        <p>Title: {title}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating || 'Not has a rating'}</p>
        <p>Genres: {genres.length ? genres.join(', ') : 'Not has genres'}</p>
        <p>Description: {description}</p>
        <ToggleFavoriteMovieButton
          className={buttonStyle.button}
          id={id}
          title={title}
          rating={rating}
          posterUrl={posterUrl}
          year={year}
        />
      </div>
    </div>
  );
};
