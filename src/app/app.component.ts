import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App';
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
