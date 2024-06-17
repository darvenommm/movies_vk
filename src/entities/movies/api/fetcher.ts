import axios from 'axios';

const MOVIES_API_LINK = 'https://api.kinopoisk.dev/v1.4/';

export const moviesFetcher = axios.create({
  baseURL: MOVIES_API_LINK,
  timeout: 1000,
  headers: {
    'X-API-KEY': 'B5141QQ-VSB4FS5-Q37A8HJ-0MXQXFC',
  },
});
