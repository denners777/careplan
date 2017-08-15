import { Component, OnInit } from '@angular/core';
import 'moment/locale/pt-br';
import { RulesCalendarService } from './rules-calendar.service';
import { RoundProgressModule, RoundProgressConfig } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-rules-calendar',
  templateUrl: './rules-calendar.component.html',
  styleUrls: ['./rules-calendar.component.css']
})
export class RulesCalendarComponent implements OnInit {

  rulesCalendar;

  constructor(private rulesCalendarService: RulesCalendarService) { }

  ngOnInit() {

    this.rulesCalendar = this.rulesCalendarService.getRulesCalendar();

  }

}
