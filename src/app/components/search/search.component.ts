import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movieTitle = '';
  constructor(private _activatedRoute: ActivatedRoute){
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"]
    })
  }

}
