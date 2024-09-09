// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [AppComponent, UserFormComponent, UserListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

