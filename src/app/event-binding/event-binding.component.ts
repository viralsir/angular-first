import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg="";
  sum="";
  constructor() { }

  ngOnInit(): void {
  }

   showmsg(message:any){
    this.msg=message.value;
    message.value="";
    console.log(message.value);
  }

  total(no1:any,no2:any){
    this.sum= eval(no1.value) + eval(no2.value);
    no1.style.backgroundColor='yellow';
    no1.value="";
    no2.value="";

  }

}
