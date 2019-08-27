import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 title = 'Angular-ie';
 today = new Date()
private basePath = '/details';
 courses: Observable < any > | any;
  constructor(private db: AngularFireDatabase) { 
this.courses = db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
  }

  ngOnInit() {
  }

}
