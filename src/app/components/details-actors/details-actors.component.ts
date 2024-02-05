import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {

  constructor(private moviesService: MoviesService){

  }

  actors: any [] = [];

  ngOnInit():void{
    this.loadActors();
  }

  loadActors(){
    this.moviesService.loadActors().subscribe(
        (data: any) => {
          this.actors = data;
        }
      )
  }

}
