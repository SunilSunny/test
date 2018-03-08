import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    ContactRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [ContactFormComponent]
})
export class ContactModule { }
