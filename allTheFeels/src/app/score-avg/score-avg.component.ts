import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-score-avg',
  templateUrl: './score-avg.component.html',
  styleUrls: ['./score-avg.component.css']
})
export class ScoreAvgComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    let RadialProgressChart = require('radial-progress-chart');
    var gpa = new RadialProgressChart('.gpa', {
      diameter: 250,
      min: 0,
      max: 1,
      round: false,
      series: [{
        value: 0,
        color: ['yellow', '#09e82a']
      }],
      center: function (d) {
        return d.toFixed(2)
      }
    });

    gpa.update(this.http.getAverage());
  }

}
