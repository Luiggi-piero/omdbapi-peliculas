import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { Movie } from 'src/app/interfaces';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, AfterViewInit {
  // Accede al input a traves del decorador ViewChild
  @ViewChild('movieSearchInput') movieSearchInput!: ElementRef;
  // movieSubscription!: Subscription;
  // Para el uso del pipe async
  movies$!: Observable<Movie[]>;

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Crea un observable para escuchar el evento keyup
    this.movies$ = fromEvent<Event>(
      this.movieSearchInput.nativeElement,
      'keyup'
    )
      .pipe(
        map((event: Event) => {
          const nameMovie = (event.target as HTMLInputElement).value;
          return nameMovie;
        }),
        filter((nameMovie: string) => nameMovie.length > 3),
        // Realiza peticiones luego de un tiempo de inactividad del evento keyup
        debounceTime(500),
        // Evita realizar peticiones con el mismo nameMovie
        distinctUntilChanged(),
        // Utiliza el ultimo termino ingresado
        switchMap((nameMovie: string) =>
          this._movieService.getMovies(nameMovie)
        )
        // Efecto secundario
        // tap((name: string)=>console.log(name))
      )
  }
}
