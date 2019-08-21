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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'activity',  component: ActivityComponent },
{ path: 'mail',  component: MailComponent },
{ path: 'chart',  component: ChartComponent },
{ path: 'help',  component: HelpComponent },
{ path: '', component: DashboardComponent },
{ path: 'map', component: MapComponent },
{ path: '**', component: PageNotFoundComponent }

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
    AgGridComponent,
    PageNotFoundComponent,
    MapComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterModule.forRoot(
      routes,
    ),
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsfAKMcwNFRB3o4uGi6Z5BD9-1kw6yy34'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
