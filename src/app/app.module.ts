import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MdToolbarModule,
         MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
