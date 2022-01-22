import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-aclass',
  templateUrl: './aclass.component.html',
  styleUrls: ['./aclass.component.css']
})
export class AClassComponent implements OnInit {

  constructor(private Activatedroute : ActivatedRoute ,private router : Router, private getClass : BodyServiceService) { }

  classid: any;
  myannouncements : any;
  type : any = 'Tutor';
  selectedclass:any = {
    name : null,
    batchname : null,
    img : 'null',
  };
  ngOnInit(): void {
    this.getId();
    this.type = this.getType();
  }
  getType(){
    return sessionStorage.getItem('type');
  }
  getId(){
   this.classid = this.Activatedroute.snapshot.paramMap.get('id');
   this.getData();
   this.getannouncements();
  }
  getData(){
    this.getClass.getClassId({cid : this.classid}).subscribe(data => {
      console.log(data);
      this.selectedclass = data;
    })
  }
  sendannounce(){
    var announcecont = document.getElementById('announcement') as HTMLTextAreaElement;
    // console.log(announcecont.value);
    this.getClass.sendannounce({cont : announcecont.value , classid: this.classid}).subscribe(data => {
      var dataarr = Object.values(data);
      if(dataarr[0] == 'ok'){
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
      }
    })
  }
  getannouncements(){
    this.getClass.getannounces({classid : this.classid}).subscribe(data => {
      this.myannouncements = data;
      console.log(this.myannouncements);
    })
  }
}
