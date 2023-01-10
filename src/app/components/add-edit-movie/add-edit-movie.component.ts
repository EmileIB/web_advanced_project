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
    this.onEditMovieTrigger.emit({
      id: 1,
      title: '123',
      year: 1,
      genre: '123',
      director: '123',
      poster: '123',
    });
  }

  onAdd(): void {
    this.onAddMovieTrigger.emit({
      id: 1,
      title: '123',
      year: 1,
      genre: '123',
      director: '123',
      poster: '123',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
