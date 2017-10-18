import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object ={}
  constructor( public user$: UserService, public router: Router) { }
  //returnUrl is a variable to set the route upon successful response from our server, See line 53 of this file
  returnUrl: string = "main"  

  ngOnInit() {}

 signupForm(){
  
 //If the form is not valid then alert the user.
  //   if(form.invalid) {
  //     return alert("Please fill in all of the required fields.");
  //   }
  //  else{ 
    /*
    Using the variable we created above in the constructor, public user$: UserService, we can now
    access the UserServices methods and properties. Inside the function login we are passing the
    in the user object we created above. This User objects properties are added from ngModel on 
    the app.component.html you will see [(ngModel)]="user.password", this will add the property 
    password to the user object on the app.component.ts and the value of the password property 
    will be set to what the user input was. [(ngModel)] is a two way binding, meaning data can 
    be sent from both the view and our component's ts file.
                ---Two way binding---
     html <-------- data changes --------> component.ts
     Whenever the html is updated from user input that data is sent to the component.ts and visa versa.
    */
    this.user$.login( this.user )
       //subscribe is now in the service.
     }
 
}