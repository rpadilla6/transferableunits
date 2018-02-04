import { Component } from '@angular/core';
import {DomService} from './dom.service';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stuff: string;
  constructor(private httpService: HttpService, private domService: DomService) {
    this.stuff = 'Bitcoin';
  }

  title = 'All the Feels';

  tweets = {};

  searchTweet(searchTerm) {
    console.log(searchTerm);
    this.httpService.getTweets(searchTerm).then(_ => {
      this.tweets = this.httpService.getData();
      console.log("fulfilled");
      console.log(this.tweets[1].text);
    });
  }
  addToBody() {
    this.domService.appendComponentToBody(SentimentComponent);
  }
}

@Component({
  selector: 'app-sentiment',
  template: `<p>Test</p>`,
  styleUrls: ['./app.component.css']
})
export class SentimentComponent { }
