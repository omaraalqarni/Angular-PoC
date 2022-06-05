import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/dialogs/dialogs.component';
import { UpdateDialogComponent } from 'src/app/dialogs/update-dialog/update-dialog.component';





@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  openConfirm(){
   
  }
  
  isConfirmed(isIt: boolean){
    
  }
  
  confirm(index: number){
    // this.dialog.open(ConfirmDeleteComponent, { 
    //   width: '390px',
    // });
  }


  update(){
    this.dialog.open(UpdateDialogComponent, { 
      width: '800px',
      height: '400px'
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
