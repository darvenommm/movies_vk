import { paths } from '../paths';

export const getMoviePath = (movieId: number): string => {
  return `${paths.movies}/${movieId}`;
};
