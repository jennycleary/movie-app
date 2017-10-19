import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesdbService {

  constructor( public http: Http ) { }
  
    postMovieData( dataToSave ) {
         let userId = window.localStorage.getItem("userId");
         console.log("userId", userId);
        return this.http.post("https://jenny2-fall-2017-phortonssf.c9users.io:8080/api/AppUsers/" + userId + "/movies", dataToSave)
        // http needs to be secure = https
        .map( res => res.json())
    } 

}