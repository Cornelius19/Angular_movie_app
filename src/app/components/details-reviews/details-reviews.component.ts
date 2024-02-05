import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit {
  
  reviews: any [ ] = [];

  constructor(private moviesService: MoviesService){

  }

  ngOnInit(): void {
    this.getDetailReviews();
  }

  getDetailReviews(){
    this.moviesService.getDetailReviews().subscribe(
        (data) => {
          this.reviews = data;
        })
  }

}
