import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = new User('', '', 0); // Create a new user model

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.user);
      form.reset(); // Reset the form after submission
    }
  }
}
