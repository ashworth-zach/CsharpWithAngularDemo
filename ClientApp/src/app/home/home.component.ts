import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    var observable = this._httpService.getTask();
    observable.subscribe(data => {
      this.data = data;
      console.log("data retrieved");
    });
  }

}
