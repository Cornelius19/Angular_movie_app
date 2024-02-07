import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { AppRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';

// Import HTTP Client Module
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,
    //Pipes
    ProfitPipe,
    
    //Directives
    HeaderDirective,
    MyIfDirective,
  ],

  imports: [
    BrowserModule,
    AppRoutesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AuthModule.forRoot({
      domain:'cornelius.eu.auth0.com',
      clientId:'aPwT03EVY5YIuuW1UC3sTUStqphHn5v9',
      authorizationParams:{
        redirect_uri: window.location.origin
      }
    })
    ],

  providers: [
    provideClientHydration(),
    MoviesService,
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
