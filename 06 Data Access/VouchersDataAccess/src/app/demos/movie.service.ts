import { Injectable } from "@angular/core";

import { MovieGenerator } from "./movie-generator";
import { Movie } from "./Movie";

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  constructor() {}

  getMovies(itemCount: number = 8): Movie[] {
    console.log("using: getMedia()");
    console.log("reset media$");
    this.movies = [];

    let movieGenerator = MovieGenerator(itemCount);

    for (let i = 0; i < itemCount; i++) {
      this.movies.push(movieGenerator.next().value);
    }

    return this.movies;
  }
}
