import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { MatTableModule } from '@angular/material'  
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
private basePath = '/details';
courses: Observable < any > | any;
 constructor(private db: AngularFireDatabase, private globalService: GlobalService) {
    db.list(this.basePath).valueChanges()
        .subscribe(courses => {
            this.courses = courses;
        })
	}

    ngOnInit() {
  }
displayedColumns: string[] = ['name', 'email', 'msg', 'date', 'time'];
}
