import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/dialogs/dialogs.component';
import {ConfirmDeleteComponent} from '../../dialogs/confirm-delete/confirm-delete.component'




@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  confirmDelete(){
    this.dialog.open(ConfirmDeleteComponent, { 
      width: '390px',
    });
  }
  confirmGeneral(text: string){
    this.dialog.open(DialogsComponent,{
      width: '390px',
      data: {
        message: text,
      }
    });

    
  }



}
