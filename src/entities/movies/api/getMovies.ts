import { moviesFetcher } from './fetcher';

import type { IShortMovie } from '../model/types';

export interface IResponseData {
  docs: IShortMovie[];
  page: number;
  pages: number;
}

export enum Genres {
  documental = 'документальный',
  history = 'история',
  melodrama = 'мелодрама',
  detective = 'детектив',
  comedy = 'комедия',
  action = 'боевик',
  sport = 'спорт',
  cartoon = 'мультфильм',
  fantasy = 'фантастика',
}

interface ISettings {
  page?: number;
  limit?: number;
  genre?: null | Genres;
  ratings?: [] | [number, number];
  startYears?: [] | [number, number];
}

const needFields: string[] = ['id', 'year', 'poster', 'rating', 'names'];
const notEmptyFields: string[] = ['names.name', 'year', 'poster.url'];

export const getMovies = async (params: ISettings = {}): Promise<IResponseData> => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 50;

  const queryParams: Record<string, unknown> = { page, limit, type: 'movie' };

  if (params.genre) {
    queryParams['genres.name'] = params.genre;
  }

  if (params.ratings?.length) {
    queryParams['rating.name'] = params.ratings.join('-');
  }

  if (params.startYears?.length) {
    queryParams['year'] = params.startYears.join('-');
  }

  const parsedQuery = Object.entries(queryParams).map(
    ([name, value]): string => `${name}=${value}`,
  );
  const needFieldsQuery = needFields.map((fieldName): string => `selectFields=${fieldName}`);
  const notEmptyFieldsQuery = notEmptyFields.map(
    (fieldName): string => `notNullFields=${fieldName}`,
  );

  const query = [...parsedQuery, ...notEmptyFieldsQuery, ...needFieldsQuery].join('&');
  const { data } = await moviesFetcher.get<IResponseData>(`movie?${query}`);

  return data;
};
