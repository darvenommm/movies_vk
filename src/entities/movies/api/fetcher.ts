import axios from 'axios';

const MOVIES_API_LINK = 'https://api.kinopoisk.dev/v1.4/';

console.log(__MOVIE_API_KEY__);

export const moviesFetcher = axios.create({
  baseURL: MOVIES_API_LINK,
  headers: {
    'X-API-KEY': __MOVIE_API_KEY__,
  },
});
