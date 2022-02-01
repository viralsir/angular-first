import {Component, ViewChild} from '@angular/core';
import {Child1Component} from "./child1.component";

@Component({
  selector: 'parent-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  user = 'Vivek' ;
  studentNames:Array<string>=["vimal","vishal","jay","amit"]

  entryComponent:boolean=true;
  viewComponent:boolean=false;

  @ViewChild(Child1Component)
  child1?:Child1Component      //DI for Child1Compoenent

  getName(userRef:any){
    this.user=userRef.value;
    this.studentNames.push(userRef.value);
  }

  entrybtn(){
    this.entryComponent=true;
    this.viewComponent=false;
  }
  viewbtn(){
    this.entryComponent=false;
    this.viewComponent=true;
  }

}
