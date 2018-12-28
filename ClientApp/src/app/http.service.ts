import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
   }
   getTask(){
      // let tempObservable = this._http.get('/tasks/5a84f4c3d7dee2b8012d96ae');
      // tempObservable.subscribe(data => console.log("Got the task!", data));
      return this._http.get('/stuff');
    }
}