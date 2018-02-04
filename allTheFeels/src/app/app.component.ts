import { Component } from '@angular/core';
import {DomService} from './dom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stuff: string;
  constructor(private domService: DomService){
    this.stuff = 'Bitcoin';
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
