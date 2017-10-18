import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {
    //where to go on login response, used in login function
    returnUrl: string = "main";
    
    //
    userData: any;
    
  /* Variable url is the path to my server yours will have your name in front of fall 
for example     https://<studentname>-fall-2017-phortonssf.c9users.io:8080/api/AppUsers 
*/
   url: string = "https://jenny2-fall-2017-phortonssf.c9users.io:8080/api/AppUsers";    
  constructor(public http: Http, public router: Router) { }

/*Function to register our user. Takes in one paramter which is a user object and sends it
  to the url above. The login function is invoked in the register component.
*/
  register( user){
      console.log("reg",user)
     return this.http.post( this.url, user)
        .map( res => res.json())
  }  


/*Function to login our user. Takes in one paramter which is a user object and sends it
  to the url above. The login function is invoked in the login component.
*/
   login( user ){
     console.log("hit $",user)
     this.http.post( this.url + '/login', user)
     //this (syntax or nickname of export class, which in this case is UserService)
     //this. (dot) is invoking a property
     //.http is a property within the UserService. Http is called out in the constructor
     //.post is a property of http 
     //post requires two paramaters, 1. where to go to (URL) and 2. what you going to send 
     //the url is the first paramenter and user is the second parameter
     //the UserService http post will be a function of (this.url +  adds the ending of /login to the url)
        .map( res => res.json())
        //res is response. 200 is a good response
        .subscribe(
            res => {
                 console.log("login res",res)
                 /*  
                 Anything we want to do upon a successful response from the server goes inside this first 
                 functions {}. Our response from the server invclude a few things, a token and an id. 
                 Save our res.token in our local storage and id this is usefull so we
                 can use the token and id for http requests that require the id of the user to 
                 retrieve specific information about the user. The token is for authentication, 
                 granting us access and denying http requests that do not have a token. 
                 To view your local storage in chrome  dev tools go to application tab and then select local
                 storage. You should see these items in there.
                */
                this.userData = res.userData;
                console.log("userData", this.userData)
                window.localStorage.setItem( "token", res.id)
                window.localStorage.setItem( "id", res.userId)
               
                /*This line will navigate us to a different view using the router, remember router-link is replaced 
                with the components html on our app.html. To see routes and their related components view the 
                app.module and the router module below. To see what the variable this.returnUrl see line 13 above 
                */
                this.router.navigate([this.returnUrl])
            },
            /*arrow function below to handle the case of an error from our server*/
            error => {
              /*  what do on error code goes in here. A pop up, alert anything
              to communicate to the user that something went wrong.
              */
                console.log(error)
                alert("Something Went Wrong Please try again")
            }
        )
    }      
    
}


