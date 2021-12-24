import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-tdf-component',
  templateUrl: './tdf-component.component.html',
  styleUrls: ['./tdf-component.component.css']
})
export class TdfComponentComponent implements OnInit {
 msg="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm){
    let login=loginRef.value;
    //console.log(login.username);
    //console.log(login.password);
    if(login.username=="admin" && login.password=="123")
    {
      this.msg="login succefully";
    }
    else
    {
      this.msg="wrong username or password ";
    }
    loginRef.reset();


  }

}
