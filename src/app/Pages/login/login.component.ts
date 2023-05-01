import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  account:string="";
  password:string="";

  accountMethod(){
    console.log(this.account);
  }

  passwordMethod(){
    console.log(this.password);
  }

  submit(){
    console.log('Account',this.account);
    console.log('Password',this.password);
    this.account="";
    this.password="";
  }

  createAccount(){
    
  }
}
