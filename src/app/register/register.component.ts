import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: object ={}
  //returnUrl is a variable to set the route upon successful response from our server, See line 44 below
  returnUrl: string = "main"

  constructor( public user$: UserService, public router: Router ) { }
  /*
  ngOnInit is lifecycle hook that is invoked after the contstructor function above finishes building the RegisterComponent object from the class. In insde the ngOnInit function is where we would do anything we want to happend when the component or page is loaded */
  ngOnInit() {
  }

  signupForm(form){
    //If the form is not valid then alert the user.
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
   else{ 

  this.user$.register(this.user )
      .subscribe(
        res => {
           /*  Anything we want to do upon a successful response from the server goes inside this first functions {}
           */
        /*check the console after registering to see what the response object returns, always a good idea to understand what we are             getting back form the server.*/
          console.log("response form login", res)
          /* 
        Save out res.token in our local storage and id this is usefull so we can use the token and id
         for http requests that require the id of the user to retrieve specific information about the user. The token
        is for authentication, granting us access and denying http requests that do not have a token. 
        To vie
        */
        window.localStorage.setItem( "token", res.id)
        window.localStorage.setItem( "id", res.id)
       
        /*
        This line will navigate us to a different view using the router, remember router-link is replaced 
        with the components html on our app.html. Routes are defined in our app.module.ts line 42. Any new routes 
        we want to add wil be created there. The variable his.returnUrl is from line 12.
        */
        this.router.navigate([this.returnUrl])
          },
         /*arrow function below to handle the case of an error from our server*/
        error => {
          /*  Any actions we need to take in the event of an error from our http request goes in here. A pop up, 
          alert, anything to communicate to the user that something went wrong is a good idea. The second arrow function 
          of subscribe is always how where we handle errors.
          .subscribe( succes => {}, error => {}, completion => {}  )
          */
          console.log("asdf", error)
        alert("Something Went Wrong Please try again")}
      )
   }
  }





}