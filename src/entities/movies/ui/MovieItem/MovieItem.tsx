import { Link } from 'react-router-dom';

import { getMoviePath } from '@/share/constants/routing';

import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './MovieItem.module.scss';

import type { ReactNode } from 'react';

interface IMovieItemProps {
  id: number;
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
  children?: ReactNode | ReactNode[];
}

export const MovieItem = ({
  id,
  title,
  year,
  rating,
  posterUrl,
  children,
}: IMovieItemProps): JSX.Element => {
  return (
    <li className={classes.movie}>
      <img
        className={classes.image}
        width={200}
        height={300}
        src={posterUrl}
        loading="lazy"
        alt=""
      />
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Rating: {rating || 'Not has a rating'}</p>
      <div className={classes.bottom}>
        <Link className={buttonStyle.button} to={getMoviePath(id)}>
          Go to the movie
        </Link>
        {children}
      </div>
    </li>
  );
};
