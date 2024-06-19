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
    <div>
      <button onClick={clickNextButton} disabled={currentPage <= 1}>
        Previous
      </button>
      <button onClick={clickPreviousButton} disabled={currentPage >= pagesCount}>
        Next
      </button>
      <p>
        {currentPage}/{pagesCount}
      </p>
    </div>
  );
};
