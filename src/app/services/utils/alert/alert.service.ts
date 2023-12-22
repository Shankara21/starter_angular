import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  invokeAlert = new EventEmitter();
  subsVar: Subscription | undefined;

  onAlert(type: 'success' | 'warning' | 'danger' | 'info', message: string, timeout: number = 3000) {
    this.invokeAlert.emit({ type, message, timeout });
  }
}
