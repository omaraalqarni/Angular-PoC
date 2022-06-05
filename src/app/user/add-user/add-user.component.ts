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
  job?: string;
  email?: string;
  mobileNumber?: string;
  twitter?: string;
  constructor(
    private userService: UserService,
    private dialogService: DialogsService
  ) { }

  ngOnInit(): void {
  }

  add(form: NgForm) {
    if (form.value.userName.length < 2) {
      this.dialogService.confirmGeneral("User name must be at least 2 characters");
    }
    else {
      const newUser: User = new User(

        form.value.userName,
        [
          form.value.job,
          form.value.email,
          form.value.mobileNumber,
          form.value.twitter,
        ]
      );
      this.userService.addUser(newUser);
    }
  }
}
