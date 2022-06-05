import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/shared/dialogs/dialogs.service';
import { UserService } from 'src/app/shared/user-service/user.service';
import { User } from 'src/app/user';
import {UserList} from '../../mock-users'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users: User[] = UserList;
  userDetails?: string;
  displayedColumns: string[] = ["Job", "Email", "mobile number", "Twitter"]
  
  constructor(
    private userService: UserService,
    private dialogService: DialogsService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  update(index: number){
    this.dialogService.update()
  }

  confirmDelete(index: number) {
    this.userService.delete(index);
    
  }
} 