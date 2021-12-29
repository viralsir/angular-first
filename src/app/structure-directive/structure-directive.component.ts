import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Emp} from "../emp";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  f1:boolean=false;
  f2:boolean=false;
  flag:boolean=false;
  msg:string="show";

  EmployeeRef=new FormGroup({
    name:new FormControl("",[Validators.required]),
    age : new FormControl("",[Validators.required]),
    salary:new FormControl("",[Validators.required])
  })


  names=['vimal','vishal','amit','rajan']
  employee:Array<Emp>=[ new Emp("vimal",24,50000),
             new Emp("viren",34,56000),
             new Emp("vishal",45,56000)
          ]

  constructor() { }

  ngOnInit(): void {
  }



  toggle(){
    if(this.flag==true)
    {
      this.msg="show";
      this.flag=false;
    }
    else{
      this.msg="hide";
      this.flag=true;
    }
  }

  addEmployee(){
        console.log(this.EmployeeRef.value);
        //this.employee.push(this.EmployeeRef.value);
        let empform=this.EmployeeRef.value

        this.employee.push(new Emp(empform.name,empform.age,empform.salary))
        this.EmployeeRef.reset();
  }



}
