import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

private products  = []; 
values = '';
   get_products(){
        this.httpClient.get(this.globalService.dataApi).subscribe((res)=>{
            console.log(this.products)
        });
    }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.log(this.values);
  }

columnDefs = [
        {headerName: 'ID', field: 'id' , width: 100, resizable: true},
        {headerName: 'USER ID', field: 'userId' , width: 100, resizable: true },
        {headerName: 'TITLE', field: 'title', width: 560, resizable: true},
        {headerName: 'COMPLETE', field: 'completed', width: 350, resizable: true}
    ];
rowData: any;
  constructor(private httpClient: HttpClient,private globalService: GlobalService){}

  ngOnInit() {
  this.rowData = this.httpClient.get(this.globalService.dataApi);
  }
  

}
