import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <h1>Home: All Users</h1>
    <hr>
    <ul>
    <li><a [routerLink]="['/user-details', 'Bruce Wayne']">Bruce Wayne</a></li>
    <li><a [routerLink]="['/user-details', 'Dick Grayson']">Dick Grayson</a></li>
    </ul>
  `
})
export class HomeComponent { }