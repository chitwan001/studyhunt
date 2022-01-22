import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  constructor(private http : HttpClient) { }
  randpage(){
    return (Math.floor(Math.random()*100)+1);
  }
  _url : any = "https://newsdata.io/api/1/news?apikey=pub_38834456c95258d31ea0fdee1ebfd7cf7db9&language=en&country=in&page=";
  getNews(data:any){
  return this.http.get(this._url + this.randpage());
  }
}
