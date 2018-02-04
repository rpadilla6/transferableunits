import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class HttpService {

  constructor(private http: Http){
  }

  private backEndUrl = 'https://20180203t175745-dot-allthefeels-1337.appspot.com/';
  data;

  getTweets(searchTerm: String) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.backEndUrl + 'moretweets/' + searchTerm)
        .toPromise()
        .then(res => {
          this.data = res.json();
          resolve();
        });
    });
    return promise;
  };

  getAverage(){
    let total = 0;

    for (let item of this.data)
    {
      total = total + item['score'];
    }

    return (total / (this.data.length));
  }

  getData(){
    return this.data;
  }

}
