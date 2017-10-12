import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MdToolbarModule,
         MdCardModule,
         MdButtonModule,
         MdFormFieldModule, 
         MdInputModule,
         MD_PLACEHOLDER_GLOBAL_OPTIONS} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule,
         NgModel,
         ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdFormFieldModule,
    MdInputModule,
    MdButtonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
   /*We define our routes here. The empty string below, in path "" is our base endpoint with nothing in it.
   Below is the component view that will load when the route changes. Remember in our app.component.html 
   <router-link></router-link> this is where those component's html is loaded to build our new view when the
   route changes. */
     {
       path: '',
       component: LoginComponent
       //https://material-routes-forms.stackblitz.io
     },
     {
       path: 'register',
       component: RegisterComponent
       //https://material-routes-forms.stackblitz.io/register
     },
      {
       path: 'main',
       component: MainComponent
       //https://material-routes-forms.stackblitz.io/lobby
     }

 ])],
 
  providers: [MoviesService, UserService, {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'auto'}}],  
  bootstrap: [AppComponent]
})
export class AppModule { }
