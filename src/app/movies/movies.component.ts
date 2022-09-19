import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any = null
  searchMovies:any = ''

  constructor(
    private router: Router,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.moviesService.getPopularMovies(1)
      .subscribe(
        result => {
          this.movies = result;
          console.log(this.movies)
        }
      )
    }
  }
}
