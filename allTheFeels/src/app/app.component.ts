import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService) {}
  title = 'All the Feels';

  tweets = {};

  searchTweet(searchTerm) {
    console.log(searchTerm);
    this.httpService.getTweets(searchTerm).then( _ =>
    {
      this.tweets = this.httpService.getData();
      console.log("fulfilled");
      console.log(this.tweets[1].text)
    })
  }
}



