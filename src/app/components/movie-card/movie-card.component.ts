import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie | undefined;

  isAddEditModalOpen = false;

  constructor() {}

  onEditClick(): void {
    this.isAddEditModalOpen = true;
  }

  onCloseModal(): void {
    console.log('onCloseModal()');
    this.isAddEditModalOpen = false;
  }

  ngOnInit(): void {}
}
