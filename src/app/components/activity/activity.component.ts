import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../services/global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Sort} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {formatDate } from '@angular/common';
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
address:any = "";
lat:any;
long:any;
today= new Date();
date = '';
time = '';
private basePath = '/details';
courses: Observable < any > | any;
constructor(private db: AngularFireDatabase, private globalService: GlobalService) {
    db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
    this.date = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.time = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
	}
	getData() {
	    return this.courses;
	}

  submitFunction(name, email, ctn, msg, address, lat, long, date, time) {
     const dataObj = {
      name: name,
      email: email,
      ctn: ctn,
      msg: msg,
      address: address,
      lat: lat,
      long: long,
      date: date,
      time: time
    };
    this.globalService.addFunction(dataObj);
  }

  resetForm(){
      this.name ="",
      this.email = "",
      this.ctn = "",
      this.msg = "",
      this.address = "",
      this.lat = "",
      this.long = ""
  }

ngOnInit() {
  navigator.geolocation.getCurrentPosition((position) => { 
  // console.log("Got position", position.coords);
  this.lat = position.coords.latitude; 
  this.long = position.coords.longitude;
});

}
  

}
