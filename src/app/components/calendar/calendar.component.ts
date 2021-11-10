import { Component, OnInit } from '@angular/core';
import { endOfDay, startOfDay } from 'date-fns';
import { CalendarView , CalendarEvent} from 'angular-calendar';
import { PostTrainerService } from 'src/app/services/trainer/post-trainer.service';

import { EventColor } from 'calendar-utils';
import { PostTrainingService } from 'src/app/services/training/post-training.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  

  colorsMain: EventColor = {
    primary: "white",
    secondary: "#480075",
  };
  colorsTrainer: EventColor = {
    primary: "white",
    secondary: "#A100FF"
  } 

 

  obj = {name: "test", id: 1, trainer: "Lucas"};
   
  constructor(private postTrainingService: PostTrainingService) { }

  ngOnInit(): void {
    console.log(endOfDay(new Date()));
    this.getPosts();
  }
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] =  [
    {
      start: new Date("Sat Nov 06 2021 12:59:59 GMT+0100 (Central European Standard Time)"),
      title: 'First event',
      end: new Date("Sat Nov 06 2021 13:59:59 GMT+0100 (Central European Standard Time)"),
      meta: this.obj, 
      color: this.colorsMain,

    },
    {
      start: new Date("Sat Nov 06 2021 14:59:59 GMT+0100 (Central European Standard Time)"),
      title: 'Second event',
      meta: this.obj,
      color: this.colorsTrainer,
    },

  ]

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {    
    console.log(events);
  }

  eventClicked({ event, sourceEvent }: { event: CalendarEvent; sourceEvent:any }): void{
    console.log(event.meta['name']);
  }

  setViewDate(date: any){
    this.viewDate = date;
  }
  
  compareDate (emp1: any, emp2: any) {  
    var emp1Date = new Date(emp1.date).getTime();  
    var emp2Date = new Date(emp2.date).getTime();  
    return emp1Date > emp2Date ? 1 : -1;    
}  

  dateFormat(start: Date, end: Date){
    return end != null ? new Date(end.getTime() - start.getTime()).getMinutes(): start.getHours();
  }
  

  getPosts(): void {
    this.postTrainingService.list()
      .subscribe(
        data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.error(error);
        });
  }
  
}
