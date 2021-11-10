import { Component, OnInit } from '@angular/core';
import { endOfDay, startOfDay } from 'date-fns';
import { CalendarView , CalendarEvent} from 'angular-calendar';
import { PostTrainerService } from 'src/app/services/trainer/post-trainer.service';
import { Training } from 'src/app/model/Training';
import { Router } from '@angular/router';
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
  trainer?: Trainer;
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
   
  constructor(private postTrainingService: PostTrainingService , private postTrainerService: PostTrainerService, private router: Router) { }

  ngOnInit(): void {

    this.getPosts();
  }
  setView(view: CalendarView) {
    this.view = view;
  }
  

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {    
    console.log(events);
  }

  eventClicked({ event, sourceEvent }: { event: CalendarEvent; sourceEvent:any }): void{
    console.log(event.meta);
    this.router.navigate(['/contact/'], {
      queryParams: { trainer: event.meta }
    });
    console.log(event.meta);
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
        this.eventObj = {start: new Date(), end: new Date(),title: "",meta: -1};

        this.eventObj.title = post.topic;
        let start = new Date(post.training_date + "T" + post.start_time);
        let end = new Date(post.training_date + "T" + post.end_time);
        this.eventObj.start = start;
        this.eventObj.end = end;
        if(post.trainerID != null) {
          this.getTrainerByID(post.trainerID.toString());
          console.log("trainer");
          this.eventObj.meta = this.trainer;
        }else {
          console.log("no trainer")
        }
        
      
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

  getTrainerByID(id: string): void {
    this.postTrainerService.get(id)
      .subscribe(
        data => {
          this.trainer = data;
          console.log(this.trainer);
      
        },
        error => {
          console.error(error);
        });
  }
}
