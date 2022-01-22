import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor(private router: Router) { }
  resultloggedin(){
    if((this.checkloggedin())){
      // console.log('here');
    }
    else{
      this.router.navigate([``]);
    }
  }
  checkloggedin(){
    let token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }
}
