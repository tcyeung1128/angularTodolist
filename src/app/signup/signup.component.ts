import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  account: string = '';
  password: string = '';
  notify:string='';

  accountMethod() {
    console.log(this.account);
  }

  passwordMethod() {
    console.log(this.password);
  }

  submit() {
    // console.log('Account',this.account);
    // console.log('Password',this.password);
    if(this.checkAccount(this.account)&&this.checkPassword(this.password)){
      console.log("checked.");
      this.account = '';
      this.password = '';
      this.notify='';
    }else{
      console.log('Not accept.')
      this.notify='*Not accept.';
    }
  }

  checkAccount(account: string):boolean {
    // let i:number=0;
    if (account.length < 4) {
      return false
    }
    return true;
  }

  checkPassword(password:string):boolean{
    if(password.length<4){
      return false
    }
    return true;
  }
}
