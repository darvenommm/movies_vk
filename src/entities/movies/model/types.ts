interface IPoster {
  url: string;
}

interface IRating {
  imdb: number;
}

interface IGenre {
  name: string;
}

interface IBaseMovie {
  id: number;
  alternativeName: string;
  year: number;
  poster: IPoster;
  rating: IRating;
}

export interface IShortMovie extends IBaseMovie {}

export interface IMovie extends IBaseMovie {
  description: string;
  genres: IGenre[];
}
