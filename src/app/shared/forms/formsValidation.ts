import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UserList } from "src/app/mock-users";
import { User } from "src/app/user";

import { UserService } from "../user-service/user.service";
export function validatePhoneNumber(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    
    const value = control.value;
    if(!value) return null;

    const isValid = /((\+)?(966([_ \-])?|0)(5[0-9]{8}|1([1-9])[0-9]{7}))/.test(value);

    return !isValid ? {validNumber:true}:null;
  };
}


export function validateTwitterLink(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    
    const value = control.value;
    if(!value) return null;
    const isValid = /(^|[^@\w])@(\w{1,15})\b/.test(value);
    return !isValid ? {validTwitterLink:true}:null;
  };
}

export function validateEmail(): ValidatorFn {
 

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if(!value) return null;
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    return !isValid ? {validEmail:true}:null;
  };
}
export function emailExistsValidator(control: FormControl): Promise<any> | Observable<any> {
  const user: User[] =  UserList ;
  
  const promise = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === u)
    }, 1500);
  })
}