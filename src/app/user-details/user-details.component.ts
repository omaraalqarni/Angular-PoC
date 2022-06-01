import { Component, OnInit, Input,  Inject } from '@angular/core';
import {User} from '../user'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user?: User;
  
  constructor( @Inject(MatDialog) public data:{id:number, details:string} ) { }
  //
  ngOnInit(): void {
    
  }


}
