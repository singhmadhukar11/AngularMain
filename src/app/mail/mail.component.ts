import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
products = [];
get_products(){
        this.http.get(this.globalService.dataApi).subscribe((res)=>{
        this.products=res;
            console.log(this.products)
        });
  };
  constructor(private http: HttpClient,private globalService: GlobalService){}

  ngOnInit() {}

}
