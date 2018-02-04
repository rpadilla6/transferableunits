import { Component, Input } from '@angular/core';
import {DomService} from './dom.service';
import {HttpService} from './http.service';

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
  tweets: Array<any> = [];

  searchTweet(searchTerm) {
    console.log(searchTerm);
    this.httpService.getTweets(searchTerm).then(_ => {
      this.tweets = [];
      this.tweets = this.httpService.getData();
      console.log('fulfilled');
      console.log(this.tweets[1].text);
    });
  }
}

@Component({
  selector: 'app-sentiment',
  template: `<h1>{{_name}}Test</h1>`,
  styleUrls: ['./app.component.css']
})
export class SentimentComponent {
  _name: string;
  @Input()
  set name(str: string) {
    this._name = str;
    console.log(str);
  }
}
