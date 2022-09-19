import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'lista-peliculas',
    component: MoviesComponent
  },
  {
    path: 'lista-series',
    component: SeriesComponent
  },
  {
    path: 'movies-details/:id',
    component: MoviesDetailComponent
  },
  {
    path: 'series-details/:id',
    component: SeriesDetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
