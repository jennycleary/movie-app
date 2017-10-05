import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
    foo: string = "Hello Movie Fans!";
    
  constructor( public http: Http ) { }
  
    getMovieData() {
        return this.http.get("https://api.themoviedb.org/3/movie/550?api_key=99dabbc32980bf480924d77fbfbb480b")
        .map( res => res.json())
    } 

}
