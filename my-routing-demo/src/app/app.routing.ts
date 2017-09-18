import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddUserComponent } from './add-user.component';
import { UserDetailsComponent } from "./user-details.component";


// define my routes
const routes : Routes = [
  { path : '', component : HomeComponent},  // default route
  { path : 'add-user', component : AddUserComponent},
  { path : 'user-details/:name', component : UserDetailsComponent}
];

// configure routes for root module
export const routing = RouterModule.forRoot(routes);