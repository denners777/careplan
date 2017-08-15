import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AlertsScopeComponent } from './alerts-scope/alerts-scope.component';
import { AjustFontComponent } from './ajust-font/ajust-font.component';
import { RulesCalendarComponent } from './rules-calendar/rules-calendar.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { ActivitiesPlaceComponent } from './activities-place/activities-place.component';

import { RulesCalendarService } from './rules-calendar/rules-calendar.service';
import { ActivitiesPlaceService } from './activities-place/activities-place.service';
import { AlertsScopeService } from './alerts-scope/alerts-scope.service';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressbarModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AlertsScopeComponent,
    AjustFontComponent,
    RulesCalendarComponent,
    TaskStatusComponent,
    ActivitiesPlaceComponent
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    ProgressbarModule.forRoot()
  ],
  providers: [RulesCalendarService, ActivitiesPlaceService, AlertsScopeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
