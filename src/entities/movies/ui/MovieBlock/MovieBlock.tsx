interface IMovieBlockProps {
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
  description: string;
  genres: string[];
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
      <img width={200} height={300} src={posterUrl} alt="" />
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>Rating: {rating || 'Not has a rating'}</p>
      <p>Genres: {genres.join(', ')}</p>
      <p>Description: {description}</p>
    </div>
  );
};
