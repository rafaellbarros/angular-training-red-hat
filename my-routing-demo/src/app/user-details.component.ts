import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-details',
  template: `
    <h1>User Details: {{userInfo}}</h1> <a>
  `
})
export class UserDetailsComponent {

  userInfo : string; 

  constructor(route : ActivatedRoute) {
    this.userInfo = route.snapshot.params["name"]; 
  }
}