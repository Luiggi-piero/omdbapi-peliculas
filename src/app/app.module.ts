import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Componentes
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, CardMovieComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
