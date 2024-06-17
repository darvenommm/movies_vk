import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getMovies, MovieItem, IResponseData } from '@/entities/movies';
import { ToggleFavoriteMovieButton } from '@/features/favoriteMovies/ToggleFavoriteMovieButton';

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
    ({
      id,
      alternativeName,
      year,
      rating: { imdb: rating },
      poster: { url: posterUrl },
    }): JSX.Element => (
      <MovieItem
        key={id}
        id={id}
        title={alternativeName}
        year={year}
        rating={rating}
        posterUrl={posterUrl}
      >
        <ToggleFavoriteMovieButton
          id={id}
          title={alternativeName}
          year={year}
          rating={rating}
          posterUrl={posterUrl}
        />
      </MovieItem>
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
