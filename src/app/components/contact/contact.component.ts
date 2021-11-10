import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Trainer } from 'src/app/model/Trainer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 @Input() trainer: any;
 first_name: string = "";
 last_name: string = "";

  constructor(
    private location: Location) { }

  ngOnInit(): void {
    console.log(this.trainer);
  }
  
  goBack(): void {
    this.location.back();
  }

}
