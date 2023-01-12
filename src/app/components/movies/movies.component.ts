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

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(this.selectedMovie);
  }

  onEdit(newMovie: Movie): void {
    this.data.editMovie(newMovie).subscribe((response) => {
      if (response.success) {
        this.movies = this.movies.map((movie) => {
          if (movie.id === newMovie.id) {
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
