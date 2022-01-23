import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BodyServiceService } from 'src/app/body-service.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';
@Component({
  selector: 'app-aclass',
  templateUrl: './aclass.component.html',
  styleUrls: ['./aclass.component.css']
})
export class AClassComponent implements OnInit {
  myattach:any;
  submitform = this.formBuilder.group({
    attachements : ['']
  })
  constructor(private formBuilder: FormBuilder,private Activatedroute : ActivatedRoute ,private router : Router, private getClass : BodyServiceService) { }

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
  onSubmit(): void {
    // Process checkout data here
    // console.log(this.submitform.value);
    var fd = new FormData();
    fd.append('file' , this.myattach);
    fd.append('classid' , this.classid);
    this.getClass.sendannounce(fd).subscribe(data => {

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
  save(event:any){
    var selectfile = event.target.files[0];
    this.myattach = selectfile;
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
  addtofavs(iid:any){
    this.getClass.addtofavs({iid : iid}).subscribe(data => {
      if(Object.values(data)[0] == 'ok'){
        var elem = document.getElementById('addtofav'+iid) as HTMLElement;
        elem.innerHTML = "Added to favourites";
      }
    })
  }
  getannouncements(){
    this.getClass.getannounces({classid : this.classid}).subscribe(data => {
      this.myannouncements = data;
      this.getstuname(this.myannouncements);
      console.log(this.myannouncements);
    })
  }
  getstuname(myannouncements:any){
    for(let i=0 ; i<myannouncements.length ; i++){
        this.getClass.getmixname({stuid : myannouncements[i].bywhom}).subscribe(data => {
          myannouncements[i].bywhom = Object.values(data)[0];
        })
    }
  }
}
