import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './home/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './home/map/map.component';
import { AgGridComponent } from './home/ag-grid/ag-grid.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MailComponent } from './home/mail/mail.component';
import { ChartComponent } from './home/chart/chart.component';
import { HelpComponent } from './home/help/help.component';
import { ActivityComponent } from './home/activity/activity.component';
import { HighchartComponent } from './home/highchart/highchart.component';
import { PasswordmgtComponent, DialogOverviewExampleDialog } from './home/passwordmgt/passwordmgt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginchildComponent } from './login/loginchild/loginchild.component';
import { LoginsecchildComponent } from './login/loginsecchild/loginsecchild.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent ,children: [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'activity',  component: ActivityComponent },
{ path: 'list',  component: MailComponent },
{ path: 'chart',  component: ChartComponent },
{ path: 'help',  component: HelpComponent },
{ path: 'map', component: MapComponent },
{ path: 'passwordmgt', component: PasswordmgtComponent },
{ path: 'admin', component: AdminComponent },
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent }]},
{ path: '', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
