import { Component, OnInit } from '@angular/core';
import { AlertsScope } from './alerts-scope';
import { AlertsScopeService } from './alerts-scope.service';

@Component({
  selector: 'app-alerts-scope',
  templateUrl: './alerts-scope.component.html',
  styleUrls: ['./alerts-scope.component.css']
})
export class AlertsScopeComponent implements OnInit {

  notices: AlertsScope[];
  safety: AlertsScope[];
  allergies: AlertsScope[];
  info: AlertsScope[];

  noticesQtd: number;
  safetyQtd: number;
  allergiesQtd: number;
  infoQtd: number;

  noticesShow: boolean;
  safetyShow: boolean;
  allergiesShow: boolean;
  infoShow: boolean;

  overlay: boolean;


  constructor(private alertsService: AlertsScopeService) { }

  ngOnInit() {

    this.notices = this.alertsService.getAlertNotices();
    this.safety = this.alertsService.getAlertSafety();
    this.allergies = this.alertsService.getAlertAllergies();
    this.info = this.alertsService.getAlertInfo();

    this.noticesQtd = this.alertsService.getAlertNoticesQtd();
    this.safetyQtd = this.alertsService.getAlertSafetyQtd();
    this.allergiesQtd = this.alertsService.getAlertAllergiesQtd();
    this.infoQtd = this.alertsService.getAlertInfoQtd();

    this.noticesShow = false;
    this.safetyShow = false;
    this.allergiesShow = false;
    this.infoShow = false;

    this.overlay = false;
  }

  showOverlay(event, type) {
    switch (type) {
      case ('notices'):
        this.noticesShow = true;
        break;
      case ('safety'):
        this.safetyShow = true;
        break;
      case ('allergies'):
        this.allergiesShow = true;
        break;
      case ('info'):
        this.infoShow = true;
        break;

      default:
        this.noticesShow = false;
        this.safetyShow = false;
        this.allergiesShow = false;
        this.infoShow = false;
        this.overlay = false;
        break;
    };
    this.overlay = true;
  }

  hideOverlay() {
    this.noticesShow = false;
    this.safetyShow = false;
    this.allergiesShow = false;
    this.infoShow = false;
    this.overlay = false;
  }

}
