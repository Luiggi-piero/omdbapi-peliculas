import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie, OmdbapiResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'https://www.omdbapi.com/?apikey=507010ff';
  constructor(private http: HttpClient) {}

  getMovies(name: string): Observable<Movie[]> {
    return this.http
      .get<OmdbapiResponse>(`${this.API_URL}&s=${name}`)
      .pipe(map((response) => response.Search));
  }
}
