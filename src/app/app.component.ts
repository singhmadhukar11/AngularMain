import {Component} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
export interface type{
    name:string;
    icon:string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Angular-ie';
    today = new Date();
    constructor(private router: Router) {}
    sideNavmenus: type[] = [{
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
            name: 'd3',
            icon: 'bubble_chart'
        },
        {
           name: 'login',
            icon: 'person'
        }
    ];

    selectedIdx = 0;
    label:any = "MAP";
    selectItem(index,menu):void {
        this.selectedIdx = index;
        this.label = menu.name;
    }


  ngOnInit() {
    this.router.navigate([''])
  }
}