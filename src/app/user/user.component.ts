import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {MatDialog} from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 
  users: User[] = [];
  selectedUser?: User;
  userName?: string;
  userDetails?: string;
  
  constructor(private userService: UserService) { }
  
  
  ngOnInit(): void {
    this.getUsers();
    
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  getUsers(){
    this.users = this.userService.getUsers();
  }

  add(userName: string, userDetails: string): void{
    const userAdded: User = {
      id: this.userService.listLength(),
      name: userName,
      details: userDetails,
    }
    this.userService.addUser(userAdded);
    
  }
  
  delete(user: User){
    this.userService.delete(user);
  }
}
// this.matDialog.open(UserDetailsComponent,
//   {
//     data: {
//       id: user.id,
//       userName: user.name,
//       details: user.details,
//     },
//   },
  // );