import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  serie:any = null
  id:any

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private seriesService:SeriesService
  ) { }

  ngOnInit(): void {
    if (!(sessionStorage.getItem('username') && sessionStorage.getItem('token'))) {
      this.router.navigate(['/login'])
    } else {
      this.route.params.subscribe((params:Params) => {
        this.id = params['id'];
      });

      console.log(this.id)
      this.seriesService.getSerie(this.id)
      .subscribe(
        result => {
          this.serie = result;
          console.log(this.serie)
        }
      )
    }
  }

}
