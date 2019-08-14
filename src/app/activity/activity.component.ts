import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

name:string = "Albrt";
email:email = "Albrt@gmail.com";
ctn:tel = 7894561230;
msg:any = "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients.";



submitFunction() {
  console.log("Clicked");
}

  ngOnInit() {
  }
  

}
