import type { IMovie } from '../../model/types';

type UsedFields = 'year' | 'description' | 'genres';

interface IMovieBlockProps extends Pick<IMovie, UsedFields> {
  title: string | null;
  posterUrl: string | null;
  rating: number;
}

export const MovieBlock = ({
  title,
  posterUrl,
  rating,
  year,
  description,
  genres,
}: IMovieBlockProps): JSX.Element => {
  return (
    <div>
      {posterUrl ? (
        <img width={200} height={300} src={posterUrl} alt="" />
      ) : (
        <p>Not has a poster</p>
      )}
      <p>Title: {title ?? 'not has a title'}</p>
      <p>Year: {year ?? 'unknown year'}</p>
      <p>Rating: {rating || 'not has a rating'}</p>
      <p>
        Genres:{' '}
        {genres.length === 0
          ? 'Not has a genres'
          : genres.map((genre): string => genre.name).join(', ')}
      </p>
      <p>Description: {description ?? 'Not has a description'}</p>
    </div>
  );
};
