import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MailComponent } from './components/mail/mail.component';
import { ChartComponent } from './components/chart/chart.component';
import { HelpComponent } from './components/help/help.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HighchartComponent } from './components/highchart/highchart.component';
import { PasswordmgtComponent, DialogOverviewExampleDialog } from './components/passwordmgt/passwordmgt.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { D3Component } from './components/d3/d3.component';
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
