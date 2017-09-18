import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { AddUserComponent } from "./add-user.component";
import { routing } from "./app.routing";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { UserDetailsComponent } from "./user-details.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
