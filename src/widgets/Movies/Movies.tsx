import { useQuery } from '@tanstack/react-query';

import { getMovies, MovieItem, IShortMovie } from '@/entities/movies';

export const Movies = (): JSX.Element => {
  const {
    data: movies,
    isPending,
    isError,
    error,
  } = useQuery<IShortMovie[]>({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const moviesItems = movies.map(
    (movie): JSX.Element => (
      <MovieItem
        key={movie.id}
        title={movie.name ?? movie.alternativeName}
        year={movie.year}
        rating={movie.rating.imdb}
      />
    ),
  );

  return <ul>{moviesItems}</ul>;
};
