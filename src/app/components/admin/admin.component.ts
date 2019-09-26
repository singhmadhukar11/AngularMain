import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {Observable} from 'rxjs';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	  constructor() {}

  ngOnInit() {
  }

}
