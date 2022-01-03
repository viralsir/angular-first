import { Injectable } from '@angular/core';
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public employeelist:Array<Employee>=[];
  constructor() { }
}
