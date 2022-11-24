import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie!: Movie;
  constructor() {}

  ngOnInit(): void {}

  getImage() {
    return this.movie.Poster === 'N/A'
      ? 'https://via.placeholder.com/400'
      : this.movie.Poster;
  }
}
