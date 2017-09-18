import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World of TypeScript!';
  
  firstName = "Rafael";
  lastName = "Silva";

  location : Address = {
    "street" : "Qno 00 Conjunto 'Tal' Casa 00",
    "city" : "Setor 'O'"
  };
}


class Address {
  street : string;
  city : string;
}


