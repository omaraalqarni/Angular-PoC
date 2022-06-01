import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit(): void {
  }


}
