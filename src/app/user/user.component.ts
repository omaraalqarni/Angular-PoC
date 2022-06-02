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

  dial(text: string): void {
    this.dialogService.confirmGeneral(text);

  }

  delete(index: number) {
    this.dialogService.confirmDelete();
    this.userService.delete(index);
  }

  update(index: number){
    this.dialogService.update()
  }
}
