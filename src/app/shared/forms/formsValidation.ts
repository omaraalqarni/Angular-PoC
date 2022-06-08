import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


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
