import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsActorsComponent } from "../components/details-actors/details-actors.component";
import { DetailsMoviesComponent } from "../components/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../components/details-reviews/details-reviews.component";
import { DetailsComponent } from "../components/details/details.component";
import { HomeComponent } from "../components/home/home.component";
import { SearchComponent } from "../components/search/search.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { FeedbackComponent } from "../components/feedback/feedback.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { NotAuthorizedComponent } from "../components/not-authorized/not-authorized.component";

const routes: Routes = [
    {path:'',component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'details/:id', component: DetailsComponent},
    {path:'details/actors/:id', component: DetailsActorsComponent},
    {path:'details/movies/:id', component: DetailsMoviesComponent},
    {path:'details/review/:id', component: DetailsReviewsComponent},
    
    //Start nested routes
    // {path:'details/:id', component: DetailsComponent, children:[
    //     {path:'actors', component: DetailsActorsComponent},
    //     {path:'movies', component: DetailsMoviesComponent},
    //     {path:'review', component: DetailsReviewsComponent},
    // ]},
    //End nested routes


    {path:'search/:movieTitle', component: SearchComponent},
    {path:'feedback', component: FeedbackComponent,canActivate:[AuthGuard]},

    //404 page for non existing URLs
    {path:'**', component: NotFoundComponent},

    //401
    {path:'401', component:NotAuthorizedComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutesModule{};