import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../shared/user-service/user.service';
import { NgForm } from '@angular/forms';

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

  constructor(private userService: UserService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  add(form: NgForm): void {
    if (form.invalid) {
      return alert('Please enter a valid user name');
    }

    const newUser: User = new User(
      this.users.length,
      form.value.userName,
      form.value.userDetails
    );
    this.userService.addUser(newUser);
  }

  openDialog(form: NgForm){
    if (form.invalid) {
      // const dialogRef = this.matDialog.open();

      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog result: ${result}`);
      // });
    }
  }

  delete(user: User) {
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
