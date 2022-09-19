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
  pages:any = []
  currentPage:any = 1

  constructor(
    private router: Router,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.moviesService.getPopularMovies(this.currentPage)
      .subscribe(
        result => {
          this.movies = result;
          for (let index = 1; index < this.movies.total_pages; index++) {
            this.pages.push(index)
            if(index == 100){
              break // O break o peta porque hay 35146 paginas
            }
          }
          console.log(this.movies)
        }
      )
    }
  }
}
