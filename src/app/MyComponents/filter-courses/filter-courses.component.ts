import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-filter-courses',
  templateUrl: './filter-courses.component.html',
  styleUrls: ['./filter-courses.component.css']
})
export class FilterCoursesComponent implements OnInit {

  constructor(private activated : ActivatedRoute,private route : Router , private filtercourse : BodyServiceService) { }
  type : any = null;
  enrolledcourse:any;
  allclasses:any = {
    name : null,
    batchname : null,
    subject : null
  }
  ngOnInit(): void {
    this.getparams();
  }
  getparams(){
    this.activated.queryParams.subscribe(data=> {
      var dataarr = Object.values(data);
      this.type = dataarr[0];
      this.getclasses();
    });
  }
  getclasses(){
    this.filtercourse.getClassCourse({course : this.type}).subscribe(data => {
      console.log(data);
      this.allclasses = data;
    })
  }
  sendinvite(cid:any){
    // console.log(data);
    var elem = document.getElementById('batch'+cid) as HTMLElement;
    var elem1 = document.getElementById('subject'+cid) as HTMLElement;
    var elem2 = document.getElementById('teacher'+cid) as HTMLElement;
    elem.innerHTML.split(" ")[2]
    this.filtercourse.sendinvite({cid : cid , batch : elem.innerHTML.split(" ")[3] , subject : elem1.innerHTML.split(" ")[3], teacher : elem2.innerHTML.split(" ")[3]}).subscribe(data => {
      console.log(data);
      var dataarr = Object.values(data);
      if(dataarr[0] == 'ok'){
        this.route.navigate([`/h/s/invi`]);
      }
    })
  }
  findenrolledcourse() {
    var promise = new Promise((resolve, reject) => {
      this.filtercourse.getClassesStu().subscribe(endata => {
        console.log(endata);
        this.enrolledcourse = endata;
      })
      resolve('');
    });
    return promise;
  }

}
