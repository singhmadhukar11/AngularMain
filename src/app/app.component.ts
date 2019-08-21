import {Component} from '@angular/core';
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
    sideNavmenus: type[] = [{
            name: 'dashboard',
            icon: 'dashboard'
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
            name: 'map',
            icon: 'map'
        },
        {
            name: 'signout',
            icon: 'exit_to_app'
        }
    ];
}