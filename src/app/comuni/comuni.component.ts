import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatoComu } from '../formulario/formulario.component';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent {

  constructor( public dialogRef: MatDialogRef<ComuniComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DatoComu

    ){}

    click(): void{
      this.dialogRef.close();
    }
}
