import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit {
  similarMovies: any [] = [];
  constructor(private moviesService: MoviesService){

  }

  ngOnInit(): void {
    this.getSimilarMovies();
  }

  getSimilarMovies(){
    this.moviesService.getSimilarMovies().subscribe(
      {
        next: (data: any) => {
          this.similarMovies = data;
        },
        error: (error) => {
          console.log("[getSimilarMovies] An error ocured: ",error)
        },
        complete: () => {
          console.log("[getSimilarMovies] Is working fine!")
        }
      })
  }

}
