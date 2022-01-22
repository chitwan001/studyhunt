import { Component, OnInit } from '@angular/core';
import { BodyServiceService } from 'src/app/body-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private getFavs : BodyServiceService) { }
  myfavs : any;
  ngOnInit(): void {
    this.getfavs();
  }
  getfavs(){
    this.getFavs.getfavs().subscribe(data => {
      this.myfavs = data;
      console.log(data);
    })
  }
}
