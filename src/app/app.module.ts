import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsComponent } from './dialogs/dialogs.component';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserDetailsComponent } from './user/user-card/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DialogsComponent,
    UpdateDialogComponent,
    AddUserComponent,
    UserCardComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
