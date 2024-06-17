interface IPoster {
  url: string | null;
}

interface IRating {
  imdb: number;
}

interface IGenre {
  name: string;
}

export interface IMovie {
  id: number;
  name: string | null;
  alternativeName: string | null;
  year: number | null;
  description: string | null;
  poster?: IPoster;
  rating: IRating;
  genres: IGenre[];
}
