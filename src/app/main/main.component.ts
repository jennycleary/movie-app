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
  
  constructor(public movies$: MoviesService) {}
    movieSearch() {
      this.movies$.getMovieData(this.userMovieSearch)
        .subscribe(
          data => {
            this.searchResult = data.results
            console.log("searchResult", this.searchResult)
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