import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';
import { CheckLoginService } from 'src/app/check-login.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private checkloggedin : CheckLoginService , private extraa : BodyServiceService , private router : Router) { }
  type:any = 'Tutor';
  ngOnInit(): void {
    this.checkloggedin.resultloggedin();
    this.type = sessionStorage.getItem('type');
  }
  showmodal(type:any){
    var elem = document.getElementById(type) as HTMLElement;
    elem.style.display = "grid";
  }
  closemodal(type:any){
    var elem = document.getElementById(type) as HTMLElement;
    elem.style.display = "none";
  }
  closedbmodal(type:any){
  }
  deletefinal(type:any){
  }
  changedispname(){
    var elem = document.getElementById('pass') as HTMLInputElement;
    var elem1 = document.getElementById('newusern') as HTMLInputElement;

    if(this.type == 'Tutor'){
      this.extraa.changeusernameteach({pass: elem.value , newname : elem1.value}).subscribe(data => {
        console.log(data);
        var dataarr = Object.values(data);
        if(dataarr[0] == 'ok'){
          let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
        }
      })
    }
    else{
      this.extraa.changeusernamestu({pass: elem.value , newname : elem1.value}).subscribe(data => {
        console.log(data);
        var dataarr = Object.values(data);
        if(dataarr[0] == 'ok'){
          let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
        }
      })
    }
  }
}

