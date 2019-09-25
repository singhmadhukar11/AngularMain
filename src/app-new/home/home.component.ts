import {Component, OnInit} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
export interface type{
    name:string;
    icon:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  today = new Date();
    constructor(private router: Router) {}
    sideNavmenus: type[] = [{
           name: 'home',
            icon: 'home'
        },
        {
           name: 'map',
            icon: 'map'
        },
        {
           name: 'admin',
            icon: 'person'
        },
        {
            name: 'activity',
            icon: 'local_activity'
        },
        {
            name: 'list',
            icon: 'list'
        },
        {
            name: 'chart',
            icon: 'insert_chart'
        },
        {
            
            name: 'dashboard',
            icon: 'dashboard'
        },
        {
            name: 'passwordmgt',
            icon: 'vpn_key'
        },
        {
            name: 'help',
            icon: 'help'
        },
        {
           name: 'login',
            icon: 'person'
        }
    ];
// {
//             name: 'signout',
//             icon: 'exit_to_app'
//         },
    selectedIdx = 0;
    label:any = "MAP";
    selectItem(index,menu):void {
        this.selectedIdx = index;
        this.label = menu.name;
    }


  ngOnInit() {
    // this.router.navigate([''])
  }

}
