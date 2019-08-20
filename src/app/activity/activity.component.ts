import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

name:string = "";
email:any = "";
ctn:any = "";
msg:any = "";

submitFunction(name,email,ctn,msg) {
  this.name = name;
  this.email = email;
  this.ctn = ctn;
  this.msg = msg;
}

courses: Observable < any > | any;
constructor(private db: AngularFireDatabase) {
    this.courses = db.list('/details').valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
}
getData() {
    return this.courses;
}
ngOnInit() {}
  

}
