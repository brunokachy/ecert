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
    
    // this.router.navigate(['dashboard/v3']);
  }

  createUsers() {
    if (localStorage.getItem('users') == null) {
      this.user = new User();
      this.user.company = 'First Brokers Limited';
      this.user.email = 'firstbrokers@gmail.com';
      this.user.password = 'password';
      this.user.role = 'Broker';
      this.users.push(this.user);

      this.user = new User();
      this.user.company = 'Old Mutual Limited';
      this.user.email = 'oldmutual@gmail.com';
      this.user.password = 'password';
      this.user.role = 'Admin';
      this.users.push(this.user);

      localStorage.setItem('users', JSON.stringify(this.users));
      
    }
  }
}
