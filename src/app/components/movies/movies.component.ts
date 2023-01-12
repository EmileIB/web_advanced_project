import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  selectedMovie: Movie | undefined;

  constructor(private data: DataService) {}

  setSelectedMovie(movie: Movie | undefined = undefined): void {
    this.selectedMovie = movie;
  }

  onEdit(newMovie: Movie): void {
    console.log(newMovie);
    this.data.editMovie(newMovie).subscribe((response) => {
      if (response.success) {
        this.movies = this.movies.map((movie) => {
          console.log(movie.id, newMovie.id);
          if (movie.id == newMovie.id) {
            return newMovie;
          } else {
            return movie;
          }
        });
        $('#addEditMovieModal').modal('hide');
      } else {
        alert(response.message);
      }
    });
  }

  onAdd(newMovie: Movie): void {
    this.data.addMovie(newMovie).subscribe((response) => {
      if (response.success) {
        this.movies.push(response.data);
        $('#addEditMovieModal').modal('hide');
      } else {
        alert(response.message);
      }
    });
  }

  deleteMovie(movie: Movie): void {
    this.data.deleteMovie(movie.id).subscribe((response) => {
      if (response.success) {
        this.movies = this.movies.filter((m) => m.id != movie.id);
      } else {
        alert(response.message);
      }
    });
  }

  ngOnInit(): void {
    this.data.getMovies().subscribe((response) => {
      if (response.success) {
        this.movies = response.data;
      } else {
        alert(response.data);
      }
    });
  }
}
