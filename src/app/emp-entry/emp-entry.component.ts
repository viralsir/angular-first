import { Component, OnInit } from '@angular/core';
import {EmpService} from "../emp.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Employee} from "../Employee";

@Component({
  selector: 'app-emp-entry',
  templateUrl: './emp-entry.component.html',
  styleUrls: ['./emp-entry.component.css']
})
export class EmpEntryComponent implements OnInit {

  empformRef=new FormGroup({
    name:new FormControl(),
    salary:new FormControl()
  })
  constructor(public EmpServ:EmpService) { }  // DI of Service class using constructor

  ngOnInit(): void {
  }

  empentrybtn(){
    let empform=this.empformRef.value;
    this.EmpServ.employeelist.push(new Employee(empform.name,empform.salary));
    this.empformRef.reset();
  }


}
