import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  msg="property binding in angular";
  f1:boolean=true;
  f2:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
