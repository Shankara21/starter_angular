import { AlertService } from './services/utils/alert/alert.service';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter_angular';
  constructor(private spinner: NgxSpinnerService, private AlertService: AlertService) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.AlertService.onAlert('warning', 'Welcome to Angular 11 Starter', 10000);
    }, 1000);
  }
}
