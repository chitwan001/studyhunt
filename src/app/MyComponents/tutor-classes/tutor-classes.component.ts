import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';
import { CheckLoginService } from 'src/app/check-login.service';

@Component({
  selector: 'app-tutor-classes',
  templateUrl: './tutor-classes.component.html',
  styleUrls: ['./tutor-classes.component.css']
})
export class TutorClassesComponent implements OnInit {

  constructor(private classesService : BodyServiceService , private checkloggedin : CheckLoginService ) { }
  type:any = "Tutor";
  tutorfd:any = null;
  allclasses:any = [{
    _id : null,
    name : null,
    subject : null,
    batchname : null,
    master : null
  }]
  ngOnInit(): void {
    this.type = this.getType();
    console.log(this.type);
    this.checkloggedin.resultloggedin();
    setInterval(() => {
      this.getclasses();
    },150000)
    this.getclasses();
  }
  getType(){
    return sessionStorage.getItem('type');
  }
  getclasses(){
    if(sessionStorage.getItem('type') == 'Tutor'){
      this.classesService.getClasses().subscribe(data => {
        console.log(data);
        this.allclasses = data;
      })
    }
    else{
      this.classesService.getClassesStu().subscribe(data => {
        // console.log(data);
        this.allclasses = data;
      })
    }
  }
  addnewclass(){
  var modal =  document.getElementById('createclassmodal') as HTMLElement;
  modal.style.display = "grid";
  }
  closemodal(){
    var modal =  document.getElementById('createclassmodal') as HTMLElement;
    modal.style.display = "none";
  }
  startaclass(){
    var batchname = document.getElementById('classnameinput') as HTMLInputElement;
    var whatbatch = document.getElementById('batchinput') as HTMLInputElement;
    var subject = document.getElementById('subjectinput') as HTMLInputElement;
    var max = document.getElementById('maxstudents') as HTMLInputElement;
    var course = document.getElementById('courses') as HTMLInputElement;
    console.log(course.value);
    this.classesService.createClass({bname: batchname.value , wbatch: whatbatch.value ,max: max.value, subject : subject.value , img: course.value}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      if(dataarr[0] == 'ok'){
        this.closemodal();
      }
    })
  }
  deletefinal(){
    this.classesService.deleteClass({cid: this.tutorfd}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      if(dataarr[0] == "ok"){
        var elem = document.getElementById(this.tutorfd) as HTMLElement;
        elem.remove();
        this.closedbmodal();
      }
    })
  }
  deletebatch(id:any){
    var db = document.getElementById('deletebatchmodal') as HTMLElement;
    db.style.display = "grid";
    this.tutorfd = id;
    console.log(this.tutorfd);
  }
  closedbmodal(){
    var db = document.getElementById('deletebatchmodal') as HTMLElement;
    db.style.display = "none";

  }

  showthreedotscomp(i:any){
    var showthreedotscomp = document.getElementById('threedotscomp'+i) as HTMLElement;
    if(showthreedotscomp.style.display == "grid"){
      showthreedotscomp.style.display = "none";
    }
    else{
      showthreedotscomp.style.display = "grid";
    }
  }

  unenrollbatch(cid:any){
    var elem = document.getElementById('unenrollmodal') as HTMLElement;
    elem.style.display = "grid";
    this.tutorfd = cid;
    console.log(this.tutorfd);
  }
  closeunmodal(){
    var elem = document.getElementById('unenrollmodal') as HTMLElement;
    elem.style.display = "none";

  }
  unenrollthestu(){
    this.classesService.unenrollself({cid : this.tutorfd}).subscribe(data => {
      var datarr = Object.values(data);
      if(datarr[0] == 'ok'){
        var elem = document.getElementById(this.tutorfd) as HTMLElement;
        elem.remove();
      }
    })
  }



}
