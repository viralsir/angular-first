import { Component, OnInit } from '@angular/core';
import {FakeService} from "../fake.service";
import {FakeModel} from "../fake-model";

@Component({
  selector: 'app-fake-cmp',
  templateUrl: './fake-cmp.component.html',
  styleUrls: ['./fake-cmp.component.css']
})
export class FakeCmpComponent implements OnInit {

  public fakearray:Array<FakeModel>=[];
  constructor(public fakeservice:FakeService) { }

  ngOnInit(): void {
  }

  public loadfakedata(){
     //this.fakeservice.loaddata();
     this.fakeservice.loadrestdata().subscribe(data=>this.fakearray=data,error=>console.log(error),()=>console.log("data is successfuly loaded"));
  }


}
