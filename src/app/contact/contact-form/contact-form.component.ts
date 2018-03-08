import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  name: string;
  phone: number;
  email: string;
  message: string;
  constructor(private notificationService: NotificationsService ) {
  }
  ngOnInit() {
  }
send() {
    console.log(this.message);
  this.notificationService.success('Sucess!', 'Sucessfuly send your message, we will be contacting you shortly.');
}
clear() {
    this.name = '';
    this.phone = null;
    this.email = '';
    this.message = '';
}
}
