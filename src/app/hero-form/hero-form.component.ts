import { Component } from '@angular/core';
import { Location } from '@angular/common';
// import { Hero } from '../hero';
import { Login } from '../hero';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  username: string = '';
  password: string = '';

  dept = ['Accounting', 'Sales', 'Marketing', 'Production', 'Quality', 'IT'];

  model = new Login(18, this.username, this.password, this.dept[0]);

  newLogin() {
    this.model = new Login(42, this.username, this.password, this.dept[0]);
    this.showDept = true;
  }
  submitted = false;
  created = false;
  showDept: boolean = false;
  displayNotification: boolean = false;
  showProceed = false;
  onSubmit() {
    this.submitted = true;
  }

  onCreated() {
    this.created = true;
  }

  creationSuccess() {
    this.displayNotification = true;
  }
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
  closeBtn() {
    window.location.reload();
  }

  proceed() {
    alert('Account successfully created!');
    window.location.reload();
  }
}
