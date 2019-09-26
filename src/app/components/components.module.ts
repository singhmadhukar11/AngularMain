import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassdetailsComponent } from './passwordmgt/passdetails/passdetails.component';
// import { HeaderComponent } from './header/header.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { MailComponent } from './mail/mail.component';
// import { ChartComponent } from './chart/chart.component';
// import { HelpComponent } from './help/help.component';
// import { HighchartComponent } from './highchart/highchart.component';
// import { ActivityComponent } from './activity/activity.component';
// import { AdminComponent } from './admin/admin.component';
// import { LoginComponent } from './login/login.component';
// import { D3Component } from './d3/d3.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MapComponent } from './map/map.component';
// import { AgGridComponent } from './ag-grid/ag-grid.component';
@NgModule({
  declarations: [
	// HeaderComponent,
 //    HighchartComponent,
 //    ActivityComponent,
 //    DashboardComponent,
 //    MailComponent,
 //    ChartComponent,
 //    HelpComponent,
 //    AgGridComponent,
 //    PageNotFoundComponent,
 //    MapComponent,
 //    AdminComponent,
 //    LoginComponent,
 //    D3Component
  PassdetailsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
  	CommonModule,
	// HeaderComponent,
 //    HighchartComponent,
 //    ActivityComponent,
 //    DashboardComponent,
 //    MailComponent,
 //    ChartComponent,
 //    HelpComponent,
 //    AgGridComponent,
 //    PageNotFoundComponent,
 //    MapComponent,
 //    AdminComponent,
 //    LoginComponent,
 //    D3Component
  ]
})
export class ComponentsModule { }
