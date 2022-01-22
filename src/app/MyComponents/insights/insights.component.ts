import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/get-news.service';
import { WeatherapiService } from 'src/app/weatherapi.service';
import { WeatherapiComponent } from '../weatherapi/weatherapi.component';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private getNewsS : GetNewsService , private getwea : WeatherapiService) { }
  allnews:any;
  weather : any;
  currenttime : String = new Date().toDateString()
  ngOnInit(): void {
    this.getnews();
    this.getweather();
  }
  getnews(){
    this.getNewsS.getNews({}).subscribe(data => {
      console.log(data);
      this.allnews = data;
    })
  }
  getweather(){
    this.getwea.getWeather().subscribe(data => {
      console.log(data);
      this.weather = data;
    })
  }
}
