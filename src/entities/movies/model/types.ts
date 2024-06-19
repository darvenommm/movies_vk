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
  names: Array<{ name: string }>;
  year: number;
  rating: IRating;
  poster: IPoster;
}

export interface IShortMovie extends IBaseMovie {}

export interface IMovie extends IBaseMovie {
  description?: string;
  genres?: IGenre[];
}
