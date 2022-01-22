import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyServiceService {

  constructor(private http: HttpClient) { }
  _url = "https://tutormanagementapi.herokuapp.com/";
  headers = new HttpHeaders().set('Authorization',"Bearer "+this.getToken());
  getToken(){
    let token = sessionStorage.getItem('token');
    if(token){
      // console.log(token);
      return token;
    }
    return "";
  }
  getClasses(){
    return this.http.get((this._url+'classes/gcft'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getClassesStu(){
    return this.http.get((this._url+'classes/gcfs'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  createClass(data:any){
    return this.http.post((this._url+'classes/create'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  logireq(data:any){
    return this.http.post((this._url+'login'),data);
  }
  signupStudent(data:any){
    return this.http.post((this._url+'signup/student'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  signupTutor(data:any){
    return this.http.post((this._url+'signup/tutor'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  deleteClass(data:any){
    return this.http.post((this._url+'classes/delete'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});

  }
  getClassId(data:any){
    return this.http.post((this._url+'classes/getclassid'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getClassCourse(data:any){
    return this.http.post((this._url+'classes/getclasscourse'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  sendinvite(data : any ){
    return this.http.post((this._url+'invites/newinvite'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getinvitesstu(){
    return this.http.get((this._url+'invites/getinvitestu'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getinvitestut(){
    return this.http.get((this._url+'invites/getinvitetut'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  enrollstu(data:any){
    return this.http.post((this._url+'invites/acceptinvite'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  unenrollself(data:any){
    return this.http.post((this._url+'classes/unenroll'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  sendannounce(data:any){
    return this.http.post((this._url+'announcement/send'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getannounces(data:any){
    return this.http.post((this._url+'announcement/getannounces'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getstuleft(data:any){
    return this.http.post((this._url+'classes/getstuleft'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  decline(data:any){
    return this.http.post((this._url+'invites/decline'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  gettutorname(){
    return this.http.get((this._url+'login/gettutorname'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getstuname(){
    return this.http.get((this._url+'login/getstuname'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getstudentname(data:any){
    return this.http.post((this._url+'classes/getstuname'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  getmixname(data:any){
    return this.http.post((this._url+'classes/getmixname'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  changeusernamestu(data:any){
    return this.http.post((this._url+'login/changeunamestu'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  changeusernameteach(data:any){
    return this.http.post((this._url+'login/changeunameteach'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  changepassword(data:any){
    return this.http.post((this._url+'login/changepassword'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  addtofavs(data:any){
    return this.http.post((this._url+'favs/add'),data,{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});

  }
  getfavs(){
    return this.http.get((this._url+'favs/get'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});
  }
  findenrolled(){
    return this.http.get((this._url+'classes/enrolled'),{'headers' : new HttpHeaders().set('Authorization',"Bearer "+this.getToken())});

  }
}

