import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SingleUserComponent } from './single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
