import { moviesFetcher } from './fetcher';

import type { IMovie } from '../model/types';

export const getMovie = async (movieId: number): Promise<IMovie> => {
  return (await moviesFetcher.get<IMovie>(`movie/${movieId}`)).data;
};
