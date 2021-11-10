import { Component, OnInit } from '@angular/core';
import { endOfDay, startOfDay } from 'date-fns';
import { CalendarView , CalendarEvent} from 'angular-calendar';
import { PostTrainerService } from 'src/app/services/trainer/post-trainer.service';
import { Training } from 'src/app/model/Training';

import { EventColor } from 'calendar-utils';
import { PostTrainingService } from 'src/app/services/training/post-training.service';

import { Trainer } from 'src/app/model/Trainer';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  training?: Training[];
  calendarEvents: CalendarEvent[] = [];
  eventObj?: any;
  

  colorsMain: EventColor = {
    primary: "white",
    secondary: "#480075",
  };
  colorsTrainer: EventColor = {
    primary: "white",
    secondary: "#A100FF"
  } 
   
  constructor(private postTrainingService: PostTrainingService) { }

  ngOnInit(): void {

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
      meta: this.eventObj, 
      color: this.colorsMain,

    },
    {
      start: new Date("Sat Nov 06 2021 14:59:59 GMT+0100 (Central European Standard Time)"),
      title: 'Second event',
      meta: this.eventObj,
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

  formatTraining() {
    if(this.training != null){
      for(let post of this.training){
        this.eventObj = {start: new Date(), end: new Date(),title: "",meta: ""};
        console.log(post.training_date);
        this.eventObj.title = post.topic;
        let start = new Date(post.training_date + "T" + post.start_time);
        let end = new Date(post.training_date + "T" + post.end_time);
        this.eventObj.start = start;
        this.eventObj.end = end;
        this.calendarEvents.push(this.eventObj);
      }
    }

  console.log(this.calendarEvents);  
  }
  
  getPosts(): void {
    this.postTrainingService.list()
      .subscribe(
        data => {
          this.training = data;
          console.log(this.training);
          this.formatTraining();
          this.setView(CalendarView.Month);
      
        },
        error => {
          console.error(error);
        });
  }

  
  
}
