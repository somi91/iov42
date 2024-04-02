import { Movie } from "./movie";

export interface ScreeningRequestData {
  cinemaId: number;
  screenId: number;
  movieId: number;
  startTime: number;
}
export interface Screening {
  id: number;
  cinemaName: string;
  movie: Movie;
  screenName: string;
  start: Date;
}