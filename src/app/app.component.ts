import { Component, OnInit  } from '@angular/core';
import {Options} from 'angular2-notifications/interfaces/options.type';
import {NOTIFICATION_OPTIONS} from './shared/notification.options';
import {NotificationsService} from 'angular2-notifications';

declare var $: any;
declare var foundation: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public notificationOptions: Options;
  constructor(private notificationService: NotificationsService) {}
  ngOnInit(): void {
    this.notificationOptions = NOTIFICATION_OPTIONS;
    $(document).foundation();
    this.notificationService.error('Error', 'This is to test its loaded');
  }
}
