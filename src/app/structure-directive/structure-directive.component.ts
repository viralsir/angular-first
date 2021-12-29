import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  employee=[ {"name":"vimal","age":21,"salary":23000},
             {"name":"viren","age":24,"salary":23000},
            {"name":"amit","age":24,"salary":23000}
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
        this.employee.push(this.EmployeeRef.value);
        this.EmployeeRef.reset();
  }



}
