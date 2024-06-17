import { Link } from 'react-router-dom';

import { getMoviePath } from '@/share/constants/routing';

interface IMovieItemProps {
  id: number;
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
}

export const MovieItem = ({ id, title, year, rating, posterUrl }: IMovieItemProps): JSX.Element => {
  return (
    <li>
      <img width={200} height={300} src={posterUrl} loading="lazy" alt="" />
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Rating: {rating || 'Not has a rating'}</p>
      <Link to={getMoviePath(id)}>Go to the movie</Link>
    </li>
  );
};
