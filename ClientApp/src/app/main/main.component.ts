import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  datastring:any;
  pokedata:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  getstuff(){
    var observable = this._httpService.getstuff();
    observable.subscribe(data=>{
      this.datastring=data;
    });
  }
  getpokemon(){
    var observable = this._httpService.getpoke();
    observable.subscribe(data=>{
      this.pokedata=data;
    });
  }
}
