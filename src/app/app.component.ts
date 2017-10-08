import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

const mockData = [
    {
    "title": "Fight Club",
    "average_vote": 8.3,
    "id": 550
    },
    {
    "title": "Avatar",
    "average_vote": 7.2,
    "id": 19995  
    },
    {
    "title": "Inception",
    "average_vote": 8.1,
    "id": 27205
    }
  ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'SCORE Movies!';
  movieData = mockData;
  userMovie: string = "";
  searchResult: any;
  favoriteMovies: any = [];
  
  constructor(public movies$: MoviesService) {}
    movieSearch() {
      this.movies$.getMovieData(this.userMovie)
        .subscribe(
          data => {
            this.searchResult = data.results
            console.log("searchResult", this.searchResult)
          })
    }
    
  addFavMovie( movie){
    this.favoriteMovies.push(movie)
  }  
}