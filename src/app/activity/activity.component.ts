import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Sort} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
private basePath = '/details';
courses: Observable < any > | any;
constructor(private db: AngularFireDatabase, private globalService: GlobalService) {
    db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })

	}
	getData() {
	    return this.courses;
	}

  submitFunction(name, email, ctn, msg, address, lat, long) {
     const dataObj = {
      name: name,
      email: email,
      ctn: ctn,
      msg: msg,
      address: address,
      lat: lat,
      long: long
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

  delete(name) {
    debugger;
    this.courses.remove(name);
  }

ngOnInit() {
  navigator.geolocation.getCurrentPosition((position) => { 
  // console.log("Got position", position.coords);
  this.lat = position.coords.latitude; 
  this.long = position.coords.longitude;
});
}
  

}
