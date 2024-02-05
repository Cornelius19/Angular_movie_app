import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //private httpClientClone = inject(HttpClient)l


  //Inject HttpClient
  constructor(
    private _activeRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private moviesService: MoviesService){
    this._activeRoute.params.subscribe((p) =>
    {
      this.movieId = p["id"];
      console.log('Movie Id = to '+this.movieId);
    }
    )

    // this.currentStyles = {
    //   'text-align': this.isCentered? 'center' : '',
    //   'color': this.isSuccess? 'green' : 'red',
    //   'font-size': this.isLarge? 'large' : 'small'
    // }
  }



  
// currentStyles: Record<string,string> = {} //
// isCentered = true;
// isSuccess = true;
// isLarge = true;

isActive=true;


  movieId = '';
  


fanFavoritesMovies: any [] = [];

sideMovies: any [] = [];

ngOnInit(): void {
  this.getFanFavoriteMovies();
  this.getSideMovies();
}

// getFanFavoriteMovies(){
//   this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
//   .pipe(
//     catchError((error) => {
//       console.log("[getFanFavoritesMovies] Error loading fan favorites data: ", error);

//       return of(null);
//     })
//   ).subscribe((data) => {
//     if(data){
//       this.fanFavoritesMovies = data;
//     }else{
//       this.fanFavoritesMovies = [];
//     }
//   })
// }


getFanFavoriteMovies(){
  this.moviesService.getFanFavoriteMovies().subscribe(
  {
    next: (data:any[]) => {
      this.fanFavoritesMovies = data
    },
    error: (error) =>
    {
      console.log("[getFanFavoritesMovies] Error loading fan favorites data: ", error);
    },
    complete: () => {
      console.log("[getFanFavoritesMovies] Request completed successfuly");
    }
  }
  )
}

getSideMovies(){
  this.moviesService.getSideMovies().subscribe({
    next: (data:any[]) => {
      this.sideMovies = data
    },
    error: (error) =>
    {
      console.log("[getSideMovies]Error loading top movies: ", error);
    },
    complete: () => {
      console.log("[getSideMovies] Request completed successfuly");
    }
  }
  )
}








}
