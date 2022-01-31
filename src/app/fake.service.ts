import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FakeModel} from "./fake-model";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(public http:HttpClient) { } // DI for httpclient

  public loaddata()
  {
     this.http.get("https://jsonplaceholder.typicode.com/todos")
       .subscribe(data=>{console.log(data)},error=>console.log(error),()=>console.log("request is completed"))
  }

  public loadrestdata():Observable<FakeModel[]>{
    return this.http.get<FakeModel[]>("https://jsonplaceholder.typicode.com/todos")
  }


}
