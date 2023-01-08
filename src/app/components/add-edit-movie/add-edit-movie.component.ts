import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css'],
})
export class AddEditMovieComponent implements OnInit {
  @Input() movie: Movie | undefined;

  @Output() onCloseModalTrigger = new EventEmitter();

  closeModal(): void {
    this.onCloseModalTrigger.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
