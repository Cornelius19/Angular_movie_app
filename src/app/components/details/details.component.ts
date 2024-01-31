import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  
  movieId = '';
  
  constructor(private _activedRoute: ActivatedRoute){
    this._activedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
      console.log('Movie Id = to '+this.movieId)
    })

  }
  
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }



}
