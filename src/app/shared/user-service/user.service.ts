import { Injectable } from '@angular/core';
import {UserList} from './mock-users';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
  export class UserService {
  users:User[] = UserList;
  constructor() { }

  getUsers(): User[]{
    return UserList;
  }
  addUser(user: User): void{
    this.users.push(user);
  }
  delete(index: number): void{
    this.users.splice(index-1, 1)
  }
  updateUser(index: number, updatedUser:User){
    this.users[index] = updatedUser;
  }
}