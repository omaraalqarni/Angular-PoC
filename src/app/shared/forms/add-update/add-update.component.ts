import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from '../../user-service/user.service';
import {
  validateEmail,
  validatePhoneNumber,
  validateTwitterLink,
} from '../formsValidation';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
})
export class AddUpdateComponent implements OnInit {
  // reusing the same form for add and update:
  @Input() choice?: string;
  @Output() submitted = new EventEmitter<User>();

  users: User[] = [];
  details = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    job: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    emailAddress: new FormControl('', {
      validators: [Validators.required, validateEmail()],
      asyncValidators: [this.userService.uniqueEmailValidator()]
    }),
    mobileNumber: new FormControl('', [
      Validators.required,
      validatePhoneNumber(),
    ]),
    twitterLink: new FormControl('', validateTwitterLink()),
  });

  state?: string;
  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    const newUser: User = new User(this.userName.value, {
      job: this.job.value,
      email: this.emailAddress.value,
      mobileNumber: this.mobileNumber.value,
      twitterLink: this.twitterLink.value,
  });
    this.userService.addUser(newUser);
    this.details.reset;
  }

  //getters for the form value
  get userName() {
    return this.details.controls['name'];
  }
  get job() {
    return this.details.controls['job'];
  }
  get emailAddress() {
    return this.details.controls['emailAddress'];
  }
  get mobileNumber() {
    return this.details.controls['mobileNumber'];
  }
  get twitterLink() {
    return this.details.controls['twitterLink'];
  }

} 