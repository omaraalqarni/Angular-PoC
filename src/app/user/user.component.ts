import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {MatDialog} from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 
  users: User[] = [
    { id: 1, name: 'Omar', details:"Intern at Takamul" },
    { id: 2, name: 'Ahmed',details:"Hardworking student" },
    { id: 3, name: 'Khaled',details:"Front-end developer" },
    { id: 4, name: 'Mohammed',details:"Back-end developer" }, 
    { id: 5, name: 'Ali',details:"DevOps developer" },
    { id: 6, name: 'Anas' ,details:"UI/UX" },
  ];
  selectedUser?: User;

  constructor(private matDialog : MatDialog) { }
  
  
  ngOnInit(): void {
  }
  onSelect(user: User): void {
    this.selectedUser = user;
    this.matDialog.open(UserDetailsComponent,
      {
        data: {
          id: user.id, 
          name: user.name}
      },
      );
  }
}