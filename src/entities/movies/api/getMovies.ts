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

  const responseFieldsQuery = shortMovieFields
    .map((fieldName): string => `selectFields=${fieldName}`)
    .join('&');
  const query = `page=${page}&limit=${limit}&${responseFieldsQuery}`;

  const { data } = await moviesFetcher.get<{ docs: IShortMovie[] }>(`movie?${query}`);

  return data.docs;
};
