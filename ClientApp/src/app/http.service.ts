import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getstuff() {
    return this._http.get('api/SampleData/Stuff');
  }
  getpoke(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/ditto/')
  }
  getIp(){
    return this._http.get("https://api.ipify.org?format=json")
  }
}