import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../shared/user-service/user.service';
import { NgForm } from '@angular/forms';
import { DialogsService } from '../shared/dialogs/dialogs.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  userName?: string;
  userDetails?: string;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private dialogService: DialogsService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  dial(){
    this.dialogService.confirmGeneral("too short");

  }
  add(form: NgForm) {
    if (form.invalid) {
      console.log(form);
      
      this.dialogService.confirmGeneral("too short");
    }
    if (form.value.userName.length > 30) {
      this.dialogService.confirmGeneral("too long")
    } 
    else {
      const newUser: User = new User(
        this.users.length,
        form.value.userName,
        form.value.userDetails
      );
      this.userService.addUser(newUser);
    }
  }

  delete(index: number) {
    this.dialogService.confirmDelete();
    this.userService.delete(index);
  }

  update(index: number){
    // this.userService.updateUser(index, );
  }
}
