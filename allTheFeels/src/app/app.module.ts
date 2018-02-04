import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AppComponent, SentimentComponent} from './app.component';
import {DomService} from './dom.service';


@NgModule({
  declarations: [
    AppComponent, SentimentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [DomService],
  entryComponents: [SentimentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
