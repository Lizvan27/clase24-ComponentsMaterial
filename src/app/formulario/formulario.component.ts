import { Component } from '@angular/core';
import { MatDialog,  MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ComuniComponent } from '../comuni/comuni.component';

export interface DatoComu {
  deporte: string;
  nombre: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  deporte: string = '';
  nombre: string = '';

  constructor(public dialog: MatDialog){}

  ver(): void{
    var dialogRef = this.dialog.open(ComuniComponent, {
      data : {nombre: this.nombre, deporte: this.deporte},
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('Se acabo la comunicacion'),
      this.deporte = res;
    })
  }
}
