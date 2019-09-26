import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

columnDefs = [
        {headerName: 'ID', field: 'id' , width: 100, resizable: true},
        {headerName: 'USER ID', field: 'userId' , width: 100, resizable: true },
        {headerName: 'TITLE', field: 'title', width: 560, resizable: true},
        {headerName: 'COMPLETE', field: 'completed', width: 350, resizable: true}
    ];
rowData: any;
  constructor(private http: HttpClient,private globalService: GlobalService){}
  ngOnInit() {
      this.rowData = this.http.get(this.globalService.dataApi);
  }
}
