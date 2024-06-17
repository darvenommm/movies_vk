import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFavoriteMovie {
  title: string;
  year: number;
  posterUrl: string;
  rating: number;
}

type FavoriteMovies = Record<number, IFavoriteMovie>;
const initialState: FavoriteMovies = {};

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  selectors: {
    selectFavoriteMovies: (favoriteMovies): FavoriteMovies => favoriteMovies,
    selectDoesMovieExist: (favoriteMovies, favoriteMovieId: number): boolean =>
      Boolean(favoriteMovies[favoriteMovieId]),
  },
  reducers: {
    addFavoriteMovie: (
      favoriteMovies,
      action: PayloadAction<{ id: number } & IFavoriteMovie>,
    ): void => {
      const {
        payload: { id, ...other },
      } = action;

      favoriteMovies[id] = { ...other };
    },
    removeFavoriteMovie: (favoriteMovies, action: PayloadAction<number>): void => {
      delete favoriteMovies[action.payload];
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMoviesSlice.actions;
export const favoriteMoviesReducer = favoriteMoviesSlice.reducer;
