import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css'],
})
export class AddEditMovieComponent implements OnInit {
  @Input() movie: Movie | undefined;

  @Output() onEditMovieTrigger = new EventEmitter<Movie>();
  @Output() onAddMovieTrigger = new EventEmitter<Movie>();

  onEdit(): void {
    this.onEditMovieTrigger.emit(this.getMovieObject());
  }

  onAdd(): void {
    this.onAddMovieTrigger.emit(this.getMovieObject());
  }

  getMovieObject(): Movie {
    return {
      id: $('#id').val() as number,
      title: $('#title').val() as string,
      year: $('#year').val() as number,
      genre: $('#genre option:selected').val() as string,
      director: $('#director').val() as string,
      poster: $('#poster').val() as string,
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
