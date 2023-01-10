import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;

  @Output() onSetSelectedMovie = new EventEmitter<Movie>();

  setSelectedMovie(): void {
    this.onSetSelectedMovie.emit(this.movie);
  }

  constructor() {}

  ngOnInit(): void {}
}
