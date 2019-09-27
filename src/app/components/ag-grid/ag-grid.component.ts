import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  constructor(private http: HttpClient,private globalService: GlobalService){}
  rowData: any;
  private gridApi;
  columnDefs = [
        {headerName: 'ID', field: 'id', width: 100},
        {headerName: 'USER ID', field: 'userId', width: 150},
        {headerName: 'TITLE', field: 'title', width: 150},
        {headerName: 'COMPLETE', field: 'completed' ,width: 150}
    ];

  onGridReady(params) {
    params.api.sizeColumnsToFit();
    this.rowData = this.http.get(this.globalService.dataApi);
   }

  ngOnInit() {
   console.log("Ag-Grid Started")   
  }
}
