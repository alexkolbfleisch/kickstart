import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [
  {path: '', component: PasswordComponent},
  {path: 'calendar', component: CalendarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ProgressbarComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    CommonModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
