import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlotlyComponent } from './components/plotly/plotly.component';

// pages 


// routes
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    PlotlyComponent
   
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
