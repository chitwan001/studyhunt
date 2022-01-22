import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  constructor(private signup: BodyServiceService , private router : Router) { }
  eligiblefortut: Boolean = false;
  ngOnInit(): void {
    this.resultloggedin();
  }
  resultloggedin(){
    if((this.checkloggedin())){
      console.log(this.gettype());
      if(this.gettype() == "Tutor"){
        this.router.navigate([`/h/t`]);
      }
      else{
        this.router.navigate([`/h/s`]);

      }
    }
  }
  gettype(){
    if(sessionStorage.getItem('type') == "Student"){
      return "Student";
    }
    return "Tutor";
  }
  checkloggedin(){
    let token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }
  nextdiv(){
  var group = document.getElementById('group-1') as HTMLInputElement;
  group.style.display = "none";
  var group = document.getElementById('group-2') as HTMLInputElement;
  group.style.display = "grid";
  }
  prevdiv(){
  var group = document.getElementById('group-1') as HTMLInputElement;
  group.style.display = "grid";
  var group = document.getElementById('group-2') as HTMLInputElement;
  group.style.display = "none";
  }
  changeedu(){
    var elem = document.getElementById('edu') as HTMLInputElement;
    if(elem.value == 'sec' || elem.value == 'hsec'){
      this.eligiblefortut = false;
    }
    else{
      this.eligiblefortut = true;
    }
  }
  signupuser(){
    var name = document.getElementById('name') as HTMLInputElement;
    var email = document.getElementById('email') as HTMLInputElement;
    var number = document.getElementById('number') as HTMLInputElement;
    var pass = document.getElementById('pass') as HTMLInputElement;
    var dob = document.getElementById('dob') as HTMLInputElement;
    var education = document.getElementById('edu') as HTMLInputElement;
    var types = document.getElementById('type') as HTMLInputElement;

    if(types.value == "Student"){
      this.signup.signupStudent({name:name.value,email:email.value,number:number.value,pass: pass.value , dob: dob.value , edu : education.value , type : types.value }).subscribe(data => {
        console.log(data);
        var dataarr = Object.values(data);
        if(dataarr[0] == 'ok'){
          this.router.navigate([``]);
        }
      })
    }
    else{
      this.signup.signupTutor({name:name.value,email:email.value,number:number.value,pass: pass.value , dob: dob.value , deg : education.value , type : types.value }).subscribe(data => {
        console.log(data);
        var dataarr = Object.values(data);
        if(dataarr[0] == 'ok'){
          this.router.navigate([``]);
        }
      })
    }
  }
}
