import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  VerDeporte: string = '';
  nombre: string = '';

  constructor(public dialogar: MatDialog){}

  ver(): void{
    
    
  }
}
