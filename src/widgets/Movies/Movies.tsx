import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { MoviesFilters } from './ui/MoviesFilters/MoviesFilters';
import { MoviesList } from './ui/MoviesList/MoviesList';
import { MoviesNavigation } from './ui/MoviesNavigation/MoviesNavigation';
import { getMovies, IResponseData, Genres } from '@/entities/movies';

import { MIN_RATING, MAX_RATING, MIN_START_YEAR, MAX_START_YEAR } from './model/constants';

export const Movies = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<Genres | null>(null);
  const [ratings, setRatings] = useState<[number, number]>([MIN_RATING, MAX_RATING]);
  const [startYears, setStartYears] = useState<[number, number]>([MIN_START_YEAR, MAX_START_YEAR]);

  const { data, isPending, isError, error, isSuccess } = useQuery<IResponseData>({
    queryKey: ['movies', page, genre, ratings, startYears],
    queryFn: () => getMovies({ page, genre, ratings, startYears }),
  });

  return (
    <>
      <MoviesFilters
        currentRatings={ratings.join('-')}
        currentStartYears={startYears.join('-')}
        changeGenreSelect={(newGenre): void => setGenre(newGenre!.value)}
        changeRatingsSlider={(newRatings): void => setRatings(newRatings as [number, number])}
        changeStartYearsSlider={(newStartYears): void =>
          setStartYears(newStartYears as [number, number])
        }
      />
      {isPending && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {isSuccess && <MoviesList movies={data.docs} />}
      <MoviesNavigation
        currentPage={data?.page ?? 1}
        pagesCount={data?.pages ?? 1}
        clickPreviousButton={(): void => setPage((previousPage): number => previousPage - 1)}
        clickNextButton={(): void => setPage((previousPage): number => previousPage + 1)}
      />
    </>
  );
};
