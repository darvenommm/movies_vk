import { moviesFetcher } from './fetcher';

import type { IMovie } from '../model/types';

interface ISettings {
  page?: number;
  limit?: number;
}

export type IShortMovie = Pick<
  IMovie,
  'id' | 'name' | 'alternativeName' | 'year' | 'poster' | 'rating'
>;

export const shortMovieFields: Array<keyof IMovie> = [
  'id',
  'name',
  'alternativeName',
  'year',
  'poster',
  'rating',
];

export const getMovies = async (params: ISettings = {}): Promise<IShortMovie[]> => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 50;

  const { data } = await moviesFetcher.get<{ docs: IShortMovie[] }>('', {
    params: { page, limit, selectedFields: shortMovieFields },
  });

  return data.docs;
};
