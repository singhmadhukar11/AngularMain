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
private basePath = '/details';

courses: Observable < any > | any;
constructor(private db: AngularFireDatabase, private globalService: GlobalService) {
    this.courses = db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
	}
	getData() {
	    return this.courses;
	}

  submitFunction(name, email, ctn, msg) {
     const dataObj = {
      name: name,
      email: email,
      ctn: ctn,
      msg: msg
    };
    this.globalService.submitFunction(dataObj);
  }
ngOnInit() {}
  

}
