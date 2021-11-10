import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 @Input() trainer: string = "";
 first_name: string = "";
 last_name: string = "";

  constructor(
    private location: Location) { }

  ngOnInit(): void {
  }
  
  goBack(): void {
    this.location.back();
  }

}
