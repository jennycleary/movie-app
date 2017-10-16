import { Component,
          OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

const mockData = [
    {
    "title": "Fight Club",
    "vote_average": 8.3,
    "id": 550
    },
    {
    "title": "Avatar",
    "vote_average": 7.2,
    "id": 19995  
    },
    {
    "title": "Inception",
    "vote_average": 8.1,
    "id": 27205
    }
  ]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = 'SCORE Movies!';
  movieData = mockData;
  userMovieSearch: string = "";
  searchResult: any;
  favMovies: any = [];
  searchNotFound: string;
  
  constructor(public movies$: MoviesService) {}
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
      this.favMovies.push(movie)
  
  }  
    removeFavMovie(index){
      this.favMovies.splice(index, 1);
  }
  ngOnInit(){}
}