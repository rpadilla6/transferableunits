import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppComponent, SentimentComponent} from './app.component';
import {DomService} from './dom.service';
import {HttpModule} from "@angular/http";
import { HttpService} from "./http.service";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent, SentimentComponent, LoadingComponent
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
