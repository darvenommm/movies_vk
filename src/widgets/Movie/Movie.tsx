import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { MovieBlock, getMovie } from '@/entities/movies';

import type { IMovie } from '@/entities/movies';

export const Movie = (): JSX.Element => {
  const params = useParams();
  const movieId = Number(params.movieId!);

  const {
    data: movie,
    isPending,
    isError,
    error,
  } = useQuery<IMovie>({ queryKey: ['movie', movieId], queryFn: () => getMovie(movieId) });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <MovieBlock
        title={movie.alternativeName ?? movie.name}
        description={movie.description}
        year={movie.year}
        posterUrl={movie.poster?.url ?? null}
        rating={movie.rating.imdb}
        genres={movie.genres}
      />
    </div>
  );
};