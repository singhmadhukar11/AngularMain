import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Sort} from '@angular/material/sort';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
private basePath = '/details';
courses: Observable < any > | any;
 constructor(private db: AngularFireDatabase, private globalService: GlobalService) {
    this.courses = db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
	}

    ngOnInit() {
    return this.courses;
  }

}
