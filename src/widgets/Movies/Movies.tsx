import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getMovies, MovieItem, IShortMovie } from '@/entities/movies';

const MAX_PAGE_COUNT = 5;

export const Movies = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const {
    data: movies,
    isPending,
    isError,
    error,
  } = useQuery<IShortMovie[]>({
    queryKey: ['movies', page],
    queryFn: () => getMovies({ page }),
    staleTime: 120 * 60 * 1000,
    refetchOnWindowFocus: false,
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
        id={movie.id}
        title={movie.alternativeName ?? movie.name}
        year={movie.year}
        rating={movie.rating.imdb}
      />
    ),
  );

  return (
    <>
      <ul>{moviesItems}</ul>
      <div>
        <button onClick={(): void => setPage((page): number => page - 1)} disabled={page <= 1}>
          Previous
        </button>
        <button
          onClick={(): void => setPage((page): number => page + 1)}
          disabled={page > MAX_PAGE_COUNT - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
