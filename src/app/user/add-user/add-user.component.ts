import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from 'src/app/shared/dialogs/dialogs.service';
import { UserService } from 'src/app/shared/user-service/user.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: User[] = [];
  userName?: string;
  userDetails?: string;
  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private dialogService: DialogsService
  ) { }

  ngOnInit(): void {
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
}
