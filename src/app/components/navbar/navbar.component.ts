import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public auth:AuthService){
    

  }
  public searchMovieTitle = '';

  encodeMovieTitle(searchMovieTitle: string) : string{
    return encodeURIComponent(searchMovieTitle);
  }

}
