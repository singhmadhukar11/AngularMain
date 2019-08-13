import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { HighchartComponent } from './highchart/highchart.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailComponent } from './mail/mail.component';
import { ChartComponent } from './chart/chart.component';
import { HelpComponent } from './help/help.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ChartModule } from 'angular-highcharts';
const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'activity',  component: ActivityComponent },
{ path: 'mail',  component: MailComponent },
{ path: 'chart',  component: ChartComponent },
{ path: 'help',  component: HelpComponent },
{ path: 'signout',  component: ActivityComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighchartComponent,
    ActivityComponent,
    DashboardComponent,
    MailComponent,
    ChartComponent,
    HelpComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    ChartModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ChartModule,
    RouterModule.forRoot(
      routes,
    ),
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
