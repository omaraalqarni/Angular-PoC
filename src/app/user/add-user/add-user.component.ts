import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  validatePhoneNumber,
  validateTwitterLink,
  validateEmail,
} from 'src/app/shared/forms/formsValidation';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogsService } from 'src/app/shared/dialogs/dialogs.service';
import { UserService } from 'src/app/shared/user-service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  users: User[] = [];
  
  details = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    job: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, validateEmail()]),
    mobileNumber: new FormControl('', [
      Validators.required,
      validatePhoneNumber(),
    ]),
    twitterLink: new FormControl('', validateTwitterLink()),
  });
  
  state?: string;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    ) {}
    
    ngOnInit(): void {

  }

  add(form: FormGroup) {
      const newUser: User = new User(form.controls['name'].value, [
        form.controls['job'].value,
        form.controls['email'].value,
        form.controls['mobileNumber'].value,
        form.controls['twitterLink'].value,
      ]);
      this.userService.addUser(newUser);
      form.reset();
  }

}
