import { Genres } from '@/entities/movies';

const genresOptions = Object.entries(Genres).map(
  ([genreName, value]): { value: Genres | null; label: string } => ({
    value,
    label: `${genreName[0].toUpperCase()}${genreName.slice(1)}`,
  }),
);

genresOptions.unshift({
  value: null,
  label: 'Not chosen',
});

export { genresOptions };
