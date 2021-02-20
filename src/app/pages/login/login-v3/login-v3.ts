import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import pageSettings from '../../../config/page-settings';
import { User } from '../../../model/user';

@Component({
  selector: 'login-v3',
  templateUrl: './login-v3.html'
})

export class LoginV3Page implements OnDestroy {
  pageSettings = pageSettings;
  email: string;
  password: string;
  user: User;
  users: User[] = [];

  constructor(private router: Router, private renderer: Renderer2) {
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
    this.createUsers();
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  login() {

    this.users = JSON.parse(localStorage.getItem('users'));

    let isValid: boolean = false;

    this.users.forEach(element => {
      if (element.email == this.email && element.password == this.password) {
        isValid = true;
        this.user = element;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });

    if (isValid) {

      if (this.user.role == 'Admin') {
        this.router.navigate(['admin-dashboard']);

      }

      if (this.user.role == 'Broker') {
        this.router.navigate(['broker-dashboard']);

      }


    } else {
      alert("Invalid Email and Password! Please try again.")
    }

    // this.router.navigate(['dashboard/v3']);
  }

  createUsers() {
    localStorage.removeItem('users');
    let broker = new User();
    broker.company = 'First Brokers Limited';
    broker.email = 'firstbrokers@gmail.com';
    broker.password = 'password';
    broker.role = 'Broker';
    this.users.push(broker);

    let admin = new User();
    admin.company = 'Old Mutual Limited';
    admin.email = 'admin@oldmutual.com';
    admin.password = 'password';
    admin.role = 'Admin';
    this.users.push(admin);

    localStorage.setItem('users', JSON.stringify(this.users));

  }
}
