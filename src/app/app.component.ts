import { Component } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  user = 'Vivek' ;
  entryComponent:boolean=true;
  viewComponent:boolean=false;

  entrybtn(){
    this.entryComponent=true;
    this.viewComponent=false;
  }
  viewbtn(){
    this.entryComponent=false;
    this.viewComponent=true;
  }

}
