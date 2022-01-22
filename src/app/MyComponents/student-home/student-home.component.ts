import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.resultloggedin();
  }
  resultloggedin(){
    if((this.checkloggedin())){
      console.log(this.gettype());
      if(this.gettype() == true){
        this.router.navigate([`/h/t`]);
      }
    }
    else{
      this.router.navigate([``]);
    }
  }
  gettype(){
    if(sessionStorage.getItem('type') == "Tutor"){
      return true;
    }
    return false;
  }
  checkloggedin(){
    let token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }

}
