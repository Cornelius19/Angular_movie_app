import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public auth:AuthService){}

  public loggedInUser: any;


  public searchMovieTitle = '';

  encodeMovieTitle(searchMovieTitle: string) : string{
    return encodeURIComponent(searchMovieTitle);
  }

  ngOnInit(): void {
    if(this.auth){
      this.auth.user$.subscribe((data) => {
        this.loggedInUser = data;
        console.log('Legged user: ', this.loggedInUser);
      })
    }
  }

}
