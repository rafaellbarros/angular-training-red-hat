import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersList: Array<User> = new Array();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    
        let formValue = form.value;
    
        console.log("First name: " + formValue.theFirstName);
        console.log("Last name: " + formValue.theLastName);
        console.log("City: " + formValue.theCity);
    
        // create user based on form data
        let tempUser: User = new User(formValue.theFirstName,
                            formValue.theLastName,
                            formValue.theCity);
    
        // add the new user to our list
        this.usersList.push(tempUser);
    
        // reset the form
        form.reset();
      }

}


class User {
  
    constructor(private firstName: string,
                private lastName: string,
                private city: string) { }
  
  }