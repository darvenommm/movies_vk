export { addFavoriteMovie, removeFavoriteMovie } from './model/slice';
export { selectFavoriteMovies, selectDoesMovieExist } from './api/selectors';

// Only for the Redux store!!!
export { favoriteMoviesReducer as __favoriteMoviesReducer } from './model/slice';

export type { IFavoriteMovie } from './model/slice';
