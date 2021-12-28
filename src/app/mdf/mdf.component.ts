import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {


  loginRef=new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(2)]),
    password:new FormControl("",[Validators.required])
  });
  msg:string="";

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value);
    let login=this.loginRef.value;
    if(login.user == "admin" && login.password=="123")
    {
      this.msg="login successfully";
    }
    else{
      this.msg="wrong username or password";
    }
    this.loginRef.reset();
  }

}
