import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserService } from '../../user-service/user.service';
import { validateEmail, validatePhoneNumber, validateTwitterLink } from '../formsValidation';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
  users: User[] = [];
  index = this.users.indexOf(this.emailAddress.value);
  @Output() submitted = new EventEmitter<User>();
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

  onSubmit() {
    
      const newUser: User = new User
      (this.userName.value, 
        [
        this.job.value,
        this.emailAddress.value,
        this.mobileNumber.value,
        this.twitterLink.value,
      ],
      );
      // this.userService.addUser(newUser);
      this.details.reset();
  }

  //getters for the form value
  get userName() {
    return this.details.controls['name'];
  }
  get job() {
    return this.details.controls['job'];
  }
  get emailAddress() {
    return this.details.controls['email'];
  }
  get mobileNumber() {
    return this.details.controls['mobileNumber'];
  }
  get twitterLink() {
    return this.details.controls['twitterLink'];
  }

  findByEmail(email: string): boolean{
    let Exist: boolean = false;
    this.users.forEach(user => {
      if(user.details[1] === email) Exist=true;
    });
    return Exist
  }
}
