import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private httpClient: HttpClient) { }

  getPopularSeries(page:any){
    return this.httpClient.get("https://api.themoviedb.org/3/tv/popular?api_key=4c6be10a0107ad01eb4f26fad58e0dc4&page=" + page)
  }

  getSerie(id:any){
    return this.httpClient.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=4c6be10a0107ad01eb4f26fad58e0dc4")
  }
}
