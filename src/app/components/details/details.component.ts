import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { error } from 'console';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  
  movieId = '';
  
  constructor(private _activedRoute: ActivatedRoute,private httpClient:HttpClient,
    /*we use this service instead of HttpClient*/private moviesService: MoviesService){
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
      console.log('Movie Id = to '+this.movieId)
    })

  }
  
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }


  stars = [];
  directors = [];
  genres = [];

  loadMovieSummary(){
    this.moviesService.loadMovieSummary().subscribe(
      {
        next: (data: any) => {
          this.stars = data.summary.stars;
          this.directors = data.summary.directors;
          this.genres = data.summary.genres;
        },
        error: (error) => {
          console.log("[loadMovieSummary] An error ocured: ",error)
        },
        complete: () => {
          console.log("[loadMovieSummary] Is working fine!")
        }
      })
  }


  


}
