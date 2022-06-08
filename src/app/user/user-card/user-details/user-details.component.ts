import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userJob?: string;
  @Input() userEmail?: string;
  @Input() userMobile?: string;
  @Input() userTwitter?: string;
  wrapper = [
    {
      job: this.userJob,
      email: this.userEmail,
      mobileNumber: this.userMobile,
      twitterLink: this.userTwitter,
    },
  ];
  tableColumns: string[] = ['Job', 'Email', 'Mobile', 'Twitter'];

  constructor() {}

  ngOnInit(): void {
    console.log(this.userEmail);
  }
}
