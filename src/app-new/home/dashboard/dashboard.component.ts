import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { MatTableModule } from '@angular/material' 
export interface UserData {
  name: any;
  address: any;
  email: any;
  ctn: any
} 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 title = 'Angular-ie';
 date = new Date();
 time = this.date.getHours();
 greet:any = "";
 private basePath = '/details';
 courses: Observable < any > | any | UserData | [];
 
  constructor(private db: AngularFireDatabase) { 

        db.list(this.basePath).valueChanges()
            .subscribe(courses => {
                this.courses = courses;
            })

        if (this.time < 12) {
            debugger;
            this.greet = "Good morning";
        } else if (this.time < 14) {
            this.greet = "Good Afternoon";
        } else {
            this.greet = "Good evening";
        }

  }

displayedColumns: string[] = ['name', 'address', 'email', 'ctn'];


  ngOnInit() { }

}



