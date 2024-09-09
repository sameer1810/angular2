import { Injectable } from '@angular/core';
import { User } from './user.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private logger: LoggerService) {}

  addUser(user: User) {
    this.users.push(user);
    this.logger.log(`New user added: ${user.name}`);
  }

  getUsers(): User[] {
    return this.users;
  }
}
