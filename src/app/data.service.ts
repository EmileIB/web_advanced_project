import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';
import { Response } from './models/response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'http://localhost/meMovies/api/';
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Response>(this.baseUrl + 'movies/index.php');
  }

  editMovie(movie: Movie) {
    return this.http.put<Response>(this.baseUrl + 'movies/edit.php', movie);
  }

  deleteMovie(id: number) {
    return this.http.delete<Response>(
      this.baseUrl + 'movies/delete.php?id=' + id
    );
  }

  addMovie(movie: Movie) {
    return this.http.post<Response>(this.baseUrl + 'movies/add.php', movie);
  }
}
