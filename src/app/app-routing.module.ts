import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { ChartComponent } from './chart/chart.component';
import { HelpComponent } from './help/help.component';
import { ActivityComponent } from './activity/activity.component';
import { HighchartComponent } from './highchart/highchart.component';
import { PasswordmgtComponent, DialogOverviewExampleDialog } from './passwordmgt/passwordmgt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { D3Component } from './d3/d3.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'activity',  component: ActivityComponent },
{ path: 'list',  component: MailComponent },
{ path: 'chart',  component: ChartComponent },
{ path: 'help',  component: HelpComponent },
{ path: 'map', component: MapComponent },
{ path: 'passwordmgt', component: PasswordmgtComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'd3', component: D3Component },
{ path: '', component: MapComponent },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
