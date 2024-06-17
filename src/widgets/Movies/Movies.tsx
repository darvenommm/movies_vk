import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getMovies, MovieItem, IResponseData } from '@/entities/movies';

export const Movies = (): JSX.Element => {
  const [query, setQuery] = useSearchParams({ page: '1' });
  const [page, setPage] = useState<number>(Number(query.get('page')));
  const { data, isPending, isError, error } = useQuery<IResponseData>({
    queryKey: ['movies', page],
    queryFn: () => getMovies({ page }),
  });

  useEffect((): void => {
    setQuery({ page: String(page) });
  }, [page]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const { docs: movies, page: currentPage, pages: pageCount } = data;

  const moviesItems = movies.map(
    (movie): JSX.Element => (
      <MovieItem
        key={movie.id}
        id={movie.id}
        title={movie.alternativeName}
        year={movie.year}
        rating={movie.rating.imdb}
        posterUrl={movie.poster.url}
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
          disabled={page >= pageCount}
        >
          Next
        </button>
        <p>
          {currentPage}/{pageCount}
        </p>
      </div>
    </>
  );
};
