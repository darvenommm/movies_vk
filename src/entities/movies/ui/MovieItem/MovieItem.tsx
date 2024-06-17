import { Link } from 'react-router-dom';

import { getMoviePath } from '@/share/constants/routing';

interface IMovieItemProps {
  id: number;
  title: string | null;
  year: number | null;
  posterUrl: string | null;
  rating: number | null;
}

export const MovieItem = ({ id, title, year, rating, posterUrl }: IMovieItemProps): JSX.Element => {
  return (
    <li>
      {posterUrl ? (
        <img width={200} height={300} src={posterUrl} alt="" />
      ) : (
        <p>Not has a poster</p>
      )}
      <p>Title: {title ?? 'not has a title'}</p>
      <p>Year: {year ?? 'unknown year'}</p>
      <p>Rating: {rating || 'not has a rating'}</p>
      <Link to={getMoviePath(id)}>Go to the movie</Link>
    </li>
  );
};
