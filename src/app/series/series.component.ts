import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series:any = null
  searchSeries:any = ''

  constructor(
    private router: Router,
    private seriesService:SeriesService
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.seriesService.getPopularSeries(1)
      .subscribe(
        result => {
          this.series = result;
          console.log(this.series)
        }
      )
    }
  }

}
