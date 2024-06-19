import buttonStyle from '@/share/styles/components/button.module.scss';
import classes from './MoviesNavigation.module.scss';

interface IMoviesNavigationProps {
  currentPage: number;
  pagesCount: number;
  clickNextButton: () => void;
  clickPreviousButton: () => void;
}

export const MoviesNavigation = ({
  currentPage,
  pagesCount,
  clickNextButton,
  clickPreviousButton,
}: IMoviesNavigationProps): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <button
          className={buttonStyle.button}
          onClick={clickNextButton}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          className={buttonStyle.button}
          onClick={clickPreviousButton}
          disabled={currentPage >= pagesCount}
        >
          Next
        </button>
      </div>

      <p>
        {currentPage}/{pagesCount}
      </p>
    </div>
  );
};
