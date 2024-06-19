import Select from 'react-select';
import Slider from 'rc-slider';

import { genresOptions } from '../../model/genresOptions';
import { MIN_RATING, MAX_RATING, MIN_START_YEAR, MAX_START_YEAR } from '../../model/constants';

import classes from './MoviesFilters.module.scss';

import type { SingleValue } from 'react-select';
import type { Genres } from '@/entities/movies';

interface IMoviesFiltersProps {
  currentRatings: string;
  currentStartYears: string;
  changeGenreSelect: (newGenre: SingleValue<{ value: Genres | null; label: string }>) => void;
  changeRatingsSlider: (newRating: number | number[]) => void;
  changeStartYearsSlider: (newStartYear: number | number[]) => void;
}

export const MoviesFilters = ({
  currentRatings,
  currentStartYears,
  changeGenreSelect,
  changeRatingsSlider,
  changeStartYearsSlider,
}: IMoviesFiltersProps): JSX.Element => {
  return (
    <div className={classes.container}>
      <div>
        <span>Movie rating range: {currentRatings}</span>
        <Slider
          range
          min={MIN_RATING}
          max={MAX_RATING}
          defaultValue={[MIN_RATING, MAX_RATING]}
          onChangeComplete={changeRatingsSlider}
        />
      </div>
      <div>
        <span>Start year range: {currentStartYears}</span>
        <Slider
          range
          min={MIN_START_YEAR}
          max={MAX_START_YEAR}
          defaultValue={[MIN_START_YEAR, MAX_START_YEAR]}
          onChangeComplete={changeStartYearsSlider}
        />
      </div>
      <div>
        <span>Genre:</span>
        <Select
          options={genresOptions}
          defaultValue={genresOptions[0]}
          onChange={changeGenreSelect}
        />
      </div>
    </div>
  );
};
