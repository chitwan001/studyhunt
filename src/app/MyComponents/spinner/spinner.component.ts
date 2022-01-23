import { Component, OnInit } from '@angular/core';
import { LoaderserviceService } from 'src/app/loaderservice.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(public loadservice : LoaderserviceService) { }

  ngOnInit(): void {
  }

}
