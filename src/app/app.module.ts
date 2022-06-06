import { UserDetailsComponent } from './user/user-card/user-details/user-details.component';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DialogsComponent } from './dialogs/dialogs.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUpdateComponent } from './shared/forms/add-update/add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DialogsComponent,
    UpdateDialogComponent,
    AddUserComponent,
    UserCardComponent,
    UserDetailsComponent,
    AddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
