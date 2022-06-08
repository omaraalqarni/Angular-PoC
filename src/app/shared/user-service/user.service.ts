import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { UserList } from '../../mock-users';
import { User } from '../../user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = UserList;
  constructor() {}

  getUsers(): User[] {
    return UserList;
  }
  addUser(user: User): void {
    this.users.push(user);
  }
  delete(index: number): void {
    this.users.splice(index, 1);
  }
  updateUser(index: number, updatedUser: User) {
    this.users[index] = updatedUser;
  }

  emailExists(email: string): Observable<boolean> {
    let emailList: string[] = this.users.map((a) => a.details.email);
    return of(email).pipe(
      delay(500),
      map((email) => {
        return emailList.includes(email);
      })
    );
  }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(async (error) => null),
      );
    };
  }
}
