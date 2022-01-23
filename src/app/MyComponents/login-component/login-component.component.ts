import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';
import { CheckLoginService } from 'src/app/check-login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private login : BodyServiceService , private router : Router , private checklogin: CheckLoginService) { }

  ngOnInit(): void {
    this.resultloggedin();
  }
  loginuser:any;
  error:any = {
    messge : ''
  };
  resultloggedin(){
    if((this.checkloggedin())){
      // console.log('here');
      if(sessionStorage.getItem('type') == "Tutor"){
        this.router.navigate([`/h/t`]);
      }
      else{
        this.router.navigate([`/h/s`]);
      }
    }
    else{
    }
  }
  checkloggedin(){
    let token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }
  loginreq(){
    var email = document.getElementById('email') as HTMLInputElement;
    var pass = document.getElementById('pass') as HTMLInputElement;
    // console.log(email,pass);
    this.login.logireq({email : email.value , pass : pass.value}).subscribe(data => {
      console.log(data);
      this.error = data;
      if(!(this.error.messge)){
        this.loginuser = data;
        this.error= null;
        sessionStorage.setItem('token',this.loginuser.token)
      sessionStorage.setItem('userId',this.loginuser.userId)
      sessionStorage.setItem('type',this.loginuser.type)
      if(this.loginuser.type == "Tutor"){
        this.router.navigate([`/h/t`]);
      }
      else{
        this.router.navigate([`/h/s`]);
      }
      }
      else{
        this.loginuser = null;
      }
    })
  }

}
