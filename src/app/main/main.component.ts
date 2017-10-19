import { Component,
          OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesdbService } from '../moviesdb.service';
import { UserService } from '../user.service';

@Component({
  //<app-main></app-main>
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = 'SCORE Movies!';
  userMovieSearch: string = "";
  searchResult: any;
  favMovies: any = [];
  searchNotFound: string;
  userData: any;
  //can add multiple services to the constructor. seperated by a comma
  constructor( 
    public movies$: MoviesService, 
    public moviesdb$: MoviesdbService,
    public user$: UserService
    ) { }
  
  /*After the constructor function builds the instance of the component
  ngOnInit will run in other words onInitialization do this...
  
  */
  ngOnInit(){ 
   
    if (this.user$.userData){
    /* 
    In this case if the property userData on the user$, ( the user.service.ts) 
    is truethen assign it to a property called userData on the 
    main.component.ts. This will be our related data for that use who logged in.
    */
      this.userData = this.user$.userData;
      console.log("testing userData", this.userData);
    }
    
  }
  //life cycle built
    movieSearch() {
      this.searchNotFound = ''; //this makes it so the movie error card goes away with a new search. sets it blank again.
      this.movies$.getMovieData(this.userMovieSearch)
        .subscribe(
          data => {
            this.searchResult = data.results
            console.log("searchResult", this.searchResult)
            //if array is 0, then give text movie not found error 
            if (this.searchResult.length === 0){
              this.searchNotFound = "Movie Not Found"
              console.log ("Movie Not Found")
            }
          })
    }
    
      addFavMovie( movie){
        let savedMovie: any ={};
        //create new variable to save data (savedMovie)
        savedMovie.title = movie.title;
        //savedMovie needs to match the property in the backend = movie needs to match property from api
        savedMovie.score = movie.vote_average;
        //savedMovie needs to match the property in the backend (which I named score) = movie needs to match property from api (vote_average)
        console.log("saved movie", savedMovie)
        this.moviesdb$.postMovieData(savedMovie)
        //this data will be saved to the moviesdb service using the savedMovie
          .subscribe(
            data => {
              this.favMovies.push(savedMovie)
          })  
      }
  
  removeFavMovie(index){
    this.favMovies.splice(index, 1);
  }
}