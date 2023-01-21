import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: EmailValidator ;
  password!: string;

  constructor(){}

  mostrar(){
    console.log(this.email);
    console.log(this.password);
  }
}
