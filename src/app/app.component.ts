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
            name: 'activity',
            icon: 'local_activity'
        },
        {
            name: 'mail',
            icon: 'email'
        },
        {
            name: 'chart',
            icon: 'insert_chart'
        },
        {
            name: 'help',
            icon: 'help'
        },
        {
             name: 'dashboard',
            icon: 'dashboard'
        },
        {
            name: 'signout',
            icon: 'exit_to_app'
        }
    ];

    selectedIdx = 0;

    selectItem(index):void {
        this.selectedIdx = index;
    }


  ngOnInit() {
    this.router.navigate([''])
  }
}