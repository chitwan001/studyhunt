import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private router : Router , private getname : BodyServiceService) { }
  currenttime:any;
  stuname : any = null;
  usertype:any = "Tutor";
  ngOnInit(): void {
    this.usertype = this.getusertype();
    this.getstuname();
    this.getcurrenttime();
    setInterval(() => {
      this.getcurrenttime();
    },1000)
  }
  getusertype(){
    return sessionStorage.getItem('type');
  }
  getcurrenttime(){

    var date = new Date();
    var hours :any = date.getHours();
    if(hours>12){
      hours = hours - 12;
    }
    if(hours<10){
      hours = "0"+hours;
    }
    var mins : any = date.getMinutes();
    if(mins<10){
      mins = "0"+mins
    }
    var secs = date.getSeconds();

    this.currenttime = hours+":"+mins;
  }
  logout(){
    // console.log('jer');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('type');
    this.router.navigate([``]);
  }
  displaycontent(){
   var noticontent =  document.getElementById('noticontent') as HTMLElement;
   if(noticontent.style.display =="grid"){
    noticontent.style.display = "none";
   }
   else{
    noticontent.style.display = "grid";
   }
  }
  getstuname(){
    if(sessionStorage.getItem('type') == 'Tutor'){
      this.getname.gettutorname().subscribe(data => {
        console.log(data);
        this.stuname = Object.values(data)[0];
      })
    }
    else{
      this.getname.getstuname().subscribe(data => {
        this.stuname = Object.values(data)[0];
      })
    }
  }
}
