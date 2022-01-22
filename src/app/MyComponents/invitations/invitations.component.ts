import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor(private getInvites : BodyServiceService , private router:Router) { }
  allinvi:any = [];
  ngOnInit(): void {
    this.getinvi();
  }
  getinvi(){
    this.getInvites.getinvitestut().subscribe(data => {
      console.log(data);
      this.allinvi = data;
      for(let invi of this.allinvi){
        this.addstuleft(invi)
      }
    })
  }
  addstuleft(invi:any){
    this.getInvites.getstuleft({cid : invi.forbatch}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      invi.stuleft = dataarr[0];
    })
  }
  enrollstu(mydta:any){
    var batchid = mydta[0];
    var stuid = mydta[1];
    var inviid = mydta[2];
    this.getInvites.enrollstu({batchid : batchid , stuid : stuid , inviid : inviid}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      if(dataarr[0] == 'ok'){
        var elem = document.getElementById(inviid) as HTMLElement;
        elem.remove();
      }
    })
  }
  decline(inviid : any){
    this.getInvites.decline({inviid : inviid}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      if(dataarr[0] == 'ok'){
        var elem = document.getElementById(inviid) as HTMLElement;
        elem.remove();
      }
    })
  }
}
