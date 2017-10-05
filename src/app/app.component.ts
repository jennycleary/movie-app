import { Component } from '@angular/core';
import { MovieService } from './movie.service';

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
  movie: string = "";
  searchResult: any;

  
  constructor( public movie$: MovieService) {
    this.movie$.getMovieData()
        .subscribe(
          data => {
            this.searchResult = data
            console.log("searchResult", this.searchResult)
          }
        )
    console.log(this.movie$.foo)
  }
}
