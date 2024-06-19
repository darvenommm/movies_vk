import axios from 'axios';

const MOVIES_API_LINK = 'https://api.kinopoisk.dev/v1.4/';

export const moviesFetcher = axios.create({
  baseURL: MOVIES_API_LINK,
  headers: {
    'X-API-KEY': 'VR5WQP6-MAM4NWW-HWMBFCF-79CCW9A',
  },
});
