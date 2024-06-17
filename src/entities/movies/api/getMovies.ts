import { moviesFetcher } from './fetcher';

import type { IShortMovie } from '../model/types';

interface ISettings {
  page?: number;
  limit?: number;
}

export interface IResponseData {
  docs: IShortMovie[];
  page: number;
  pages: number;
}

const needFields: string[] = ['id', 'alternativeName', 'year', 'poster', 'rating'];
const notEmptyFields: string[] = ['alternativeName', 'year', 'poster.url'];

export const getMovies = async (params: ISettings = {}): Promise<IResponseData> => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 50;

  const queryParams = { page, limit };

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
