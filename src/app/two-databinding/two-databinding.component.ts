import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-databinding',
  templateUrl: './two-databinding.component.html',
  styleUrls: ['./two-databinding.component.css']
})
export class TwoDatabindingComponent implements OnInit {

  name="rajan";
  salary =2322;
  constructor() { }

  ngOnInit(): void {
  }

}
