import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {MatDialog} from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import {UserService} from '../user.service';
import {FormsModule, NgForm} from '@angular/forms';
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

  add(form: NgForm): void {
    const newUser: User = {
      id: this.users.length,
      name: form.value.userName,
      details: form.value.userDetails,
    }
    this.userService.addUser(newUser)
      
  }
  
  delete(user: User){
    this.userService.delete(user.id);
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