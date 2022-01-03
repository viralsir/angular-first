import { Component, OnInit } from '@angular/core';
import {EmpService} from "../emp.service";

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {

  constructor(public EmpServ:EmpService) { }

  ngOnInit(): void {
  }

}
