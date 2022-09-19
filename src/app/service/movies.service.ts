import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getPopularMovies(page:any){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=4c6be10a0107ad01eb4f26fad58e0dc4&page=" + page)
  }

  getMovie(id:any){
    return this.httpClient.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=4c6be10a0107ad01eb4f26fad58e0dc4")
  }
}
