import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movieTitle = '';
  constructor(private activatedRoute: ActivatedRoute, private moviesService:MoviesService){
    this.activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"]
    })
  }

  searchResult: any[] = [];
  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(){
    this.moviesService.searchMovies().subscribe(
      {
        next: (data) => {
          this.searchResult = data;
        },
        error: (error) => {
          console.log("[searchMovies] An error ocured: ",error)
        },
        complete: () => {
          console.log("[searchMovies] Is working fine!")
        }
      })
  }

}
