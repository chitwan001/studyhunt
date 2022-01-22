import { Component, OnInit } from '@angular/core';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-invi-student',
  templateUrl: './invi-student.component.html',
  styleUrls: ['./invi-student.component.css']
})
export class InviStudentComponent implements OnInit {

  constructor(private getInvites : BodyServiceService) { }
  allinvites : any = [];
  ngOnInit(): void {
    this.getinvi();
  }
  getinvi(){
    this.getInvites.getinvitesstu().subscribe(data => {
      console.log(data);
      this.allinvites = data;
    })
  }
}
