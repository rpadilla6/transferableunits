import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppComponent, SentimentComponent} from './app.component';
import {DomService} from './dom.service';
import {HttpModule} from "@angular/http";
import { HttpService} from "./http.service";

@NgModule({
  declarations: [
    AppComponent, SentimentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [DomService, HttpService],
  entryComponents: [SentimentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
