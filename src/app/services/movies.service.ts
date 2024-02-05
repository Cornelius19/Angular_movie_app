import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) {
    

  }
  getFanFavoriteMovies(){
    return this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
  }
  getSideMovies(){
    return this.httpClient.get<any[]>('assets/data/sideMovies.json')
  }
  loadMovieSummary(){
    return this.httpClient.get<any[]>('assets/data/movieSummary.json')
  }
  loadActors(){
    return this.httpClient.get<any[]>('assets/data/movieActors.json')
  }
  getSimilarMovies(){
    return this.httpClient.get<any[]>('assets/data/similarMovies.json')
  }
  getDetailReviews(){
    return this.httpClient.get<any[]>('assets/data/movieReviews.json')
  }
  searchMovies(){
    return this.httpClient.get<any[]>('assets/data/movieSearch.json')
  }
}
