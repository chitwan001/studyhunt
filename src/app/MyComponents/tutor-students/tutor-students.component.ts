import { Component, OnInit } from '@angular/core';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-tutor-students',
  templateUrl: './tutor-students.component.html',
  styleUrls: ['./tutor-students.component.css']
})
export class TutorStudentsComponent implements OnInit {

  constructor(private getclasses : BodyServiceService) { }
  allclasses:any =[{
    _id : null,
    name : null,
    subject : null,
    batchname : null,
    master : null,
    students : []
  }];
  ngOnInit(): void {
    // setInterval(() => {
    //   this.getclassesfunc()
    // },3000);
    this.getclassesfunc();
  }
  getclassesfunc(){
    this.getclasses.getClasses().subscribe(data => {
      console.log(data);
      this.allclasses = data;
      for(let indclass of this.allclasses){
        this.getstudentname(indclass);
      }
    })
  }
  getstudentname(indclass : any){
    // console.log(indclass.students);
    for(let i=0; i < (indclass.students).length ; i++){
        this.getclasses.getstudentname({stuid : indclass.students[i]}).subscribe(data => {
          // console.log(Object.values(data)[0]);
          indclass.students[i] = (Object.values(data)[0]);
          // console.log(indclass.students[i]);
        })
       }
    }
}
