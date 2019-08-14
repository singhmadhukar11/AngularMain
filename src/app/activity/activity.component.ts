import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

name:string = "";
email:email = "";
ctn:number = "";
msg:any = "";



submitFunction(name,email,ctn,msg) {
  console.log("Hello"+ " " + name + " " + email + " " + ctn + " " + msg );
  this.name = name;
  this.email = email;
  this.tel = ctn;
  this.msg = msg;
}

  ngOnInit() {
  }
  

}
