import { Component, OnInit } from '@angular/core';
import { ActivitiesPlaceService } from './activities-place.service';
import { Activities } from './activities';

@Component({
  selector: 'app-activities-place',
  templateUrl: './activities-place.component.html',
  styleUrls: ['./activities-place.component.css']
})
export class ActivitiesPlaceComponent implements OnInit {

  activities;

  constructor(private activitiesPlaceService: ActivitiesPlaceService) { }

  ngOnInit() {
    this.activities = this.activitiesPlaceService.getActivitiesPlace();
  }

}
