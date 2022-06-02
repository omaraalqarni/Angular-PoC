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
  userName?: string;
  userDetails?: string;

  constructor(
    private userService: UserService,
    private dialogService: DialogsService
  ) {}

  ngOnInit(): void {
    
  }

  dial(text: string): void {
    this.dialogService.confirmGeneral(text);

  }

  

}
