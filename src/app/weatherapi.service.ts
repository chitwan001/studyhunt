import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http : HttpClient) { }
  _url = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=00bf8662562f3ee22aa55aa0459d6a48&units=metric';
  getWeather(){
    return this.http.get(this._url);
  }
}
