import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetNewsService } from 'src/app/get-news.service';

@Component({
  selector: 'app-tutor-home',
  templateUrl: './tutor-home.component.html',
  styleUrls: ['./tutor-home.component.css']
})
export class TutorHomeComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit(): void {
    this.resultloggedin();
  }

  resultloggedin(){
    if((this.checkloggedin())){
      console.log(this.gettype());
      if(this.gettype() == true){
        this.router.navigate([`/h/s`]);
      }
    }
    else{
      this.router.navigate([``]);
    }
  }
  gettype(){
    if(sessionStorage.getItem('type') == "Student"){
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
