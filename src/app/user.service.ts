import { Injectable } from '@angular/core';
import {UserList} from './mock-users';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
  export class UserService {

  constructor() { }
  getUsers(): User[]{
    return UserList;
  }
  addUser(user: User): void{
    UserList.push(user);
  }
  delete(user:User): void{
    delete UserList[user.id-1];
  }
  listLength(): number{
    return UserList.length;
  }
}
