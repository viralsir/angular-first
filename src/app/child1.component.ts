import {Component, Input} from "@angular/core";

@Component({
  selector:'child1-componenet',
  templateUrl:'./child1.component.html',
  styleUrls:['./child1.component.css']
})
export class Child1Component
{
  title="child1 component";
  age:number=10;

  @Input()
  user:string="";

  @Input()
  sname:Array<String>=[]




}
