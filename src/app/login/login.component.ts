import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../dashbord/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  hide = true;
  valid: boolean = false;
  notValid: boolean = false;
  noDetails: boolean = false;
  obj:User[]=[];
  constructor(private login_data: LoginService, private _roter: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      u_EmailId: new FormControl(null, [Validators.required, Validators.email]),
      u_password: new FormControl(null, [Validators.required])
    });
  }
  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.get('u_EmailId').value != null && this.loginForm.get('u_password').value != null) {
      console.log("sucess");
      this.login_data.login(this.loginForm.value).subscribe(
        (x: any) => {
          this.obj=x;
          console.log(x);
          if (x.length == 1) {
            console.log(x);
            // alert("valid");
            this.valid = true;
            localStorage.setItem('user_id',this.obj[0].user_id+'')
            localStorage.setItem('u_EmailId', this.loginForm.get('u_EmailId').value);
            //console.log('/dashboard');
           this._roter.navigate(['/dashbord']);
          }
          else {
             alert("invalid id & password");
            //this.notValid = true;
          }
        }
      );
    }
    else {
      //this.noDetails = true;
       alert("id password should not be empty.");
    }
  }
  onSkipRegister() {
    //this._roter.navigate(['/nav/']);
  }
  onRegister() {
    //this._roter.navigate(['/nav/signup']);
  }

}
