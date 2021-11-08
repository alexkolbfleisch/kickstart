import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
  providers: [NgbProgressbarConfig],
})
export class ProgressbarComponent implements OnInit {
  _value: number = 0;
  _topics: String[] = [];
  _numTopics: number = 0;

  constructor(config: NgbProgressbarConfig) { 
    config.max = this._numTopics;
    config.striped = false;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
    this._topics = ["","Start","Java","Business","HTML", "CSS","DB", "Ende",""];
    this._numTopics = this._topics.length+2;
  }

  fillProgress(fill: number){
    this._value =  fill;
  }

}
