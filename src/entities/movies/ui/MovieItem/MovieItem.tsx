interface IMovieItemProps {
  title?: string | null;
  year?: number | null;
  posterUrl?: string | null;
  rating?: number | null;
}

export const MovieItem = ({ title, year, rating, posterUrl }: IMovieItemProps): JSX.Element => {
  return (
    <li>
      {posterUrl ? <img src={posterUrl} alt="" /> : <p>Not has a poster</p>}
      <p>Title: {title ?? 'not has a title'}</p>
      <p>Year: {year ?? 'unknown year'}</p>
      <p>Rating: {rating || 'not has a rating'}</p>
    </li>
  );
};
