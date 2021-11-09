import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { PasswordComponent } from './components/password/password.component';
import { AdminCalenderComponent } from './components/adminui/admin-calender/admin-calender.component';
import { AdminTrainerComponent } from './components/adminui/admin-trainer/admin-trainer.component';
import { AdminTodoComponent } from './components/adminui/admin-todo/admin-todo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminuiFullComponent } from './components/adminui/adminui-full/adminui-full.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ProgressbarComponent,
    PasswordComponent,
    AdminCalenderComponent,
    AdminTrainerComponent,
    AdminTodoComponent,
    HomepageComponent,
    ContactComponent,
    NavbarComponent,
    AdminuiFullComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
