import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movie:any = null
  id:any

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.route.params.subscribe((params:Params) => {
        this.id = params['id'];
      });

      console.log(this.id)
      this.moviesService.getMovie(this.id)
      .subscribe(
        result => {
          this.movie = result;
          console.log(this.movie)
        }
      )
    }
  }

}
