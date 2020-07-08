import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestService } from './http-request.service';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { LotteryService } from './app.service';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,

    AppRoutingModule,
  ],
  providers: [
    HttpRequestService, LotteryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
