import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './library/material/material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { HighchartComponent } from './components/highchart/highchart.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { ActivityComponent } from './components/activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MailComponent } from './components/mail/mail.component';
import { ChartComponent } from './components/chart/chart.component';
import { HelpComponent } from './components/help/help.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PasswordmgtComponent, DialogOverviewExampleDialog } from './components/passwordmgt/passwordmgt.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { D3Component } from './components/d3/d3.component';
import { AngularD3TreeLibModule } from 'angular-d3-tree';
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
    MapComponent,
    PasswordmgtComponent,
    DialogOverviewExampleDialog,
    AdminComponent,
    LoginComponent,
    D3Component
  ],
  entryComponents: [PasswordmgtComponent, DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ChartModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    Ng2SearchPipeModule,
    AngularD3TreeLibModule,
    NgxMapboxGLModule.withConfig({
    accessToken: 'pk.eyJ1IjoibWFkaHVrYXJzaW5naCIsImEiOiJjazBkdG14NHYwYXcwM2RzZDZ5dTdzemRrIn0.Jl3tWFvdm7cRSaKjHDLhAg',
    geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),
    LeafletModule.forRoot(),
    // RouterModule.forRoot(
    //   routes,
    // ),
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsfAKMcwNFRB3o4uGi6Z5BD9-1kw6yy34'
    }),
    AgmJsMarkerClustererModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
