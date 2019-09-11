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
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { MatTableModule } from '@angular/material'  
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PasswordmgtComponent, DialogOverviewExampleDialog } from './passwordmgt/passwordmgt.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
// const routes: Routes = [
// { path: 'dashboard', component: DashboardComponent },
// { path: 'activity',  component: ActivityComponent },
// { path: 'list',  component: MailComponent },
// { path: 'chart',  component: ChartComponent },
// { path: 'help',  component: HelpComponent },
// { path: 'map', component: MapComponent },
// { path: 'passwordmgt', component: PasswordmgtComponent },
// { path: '', component: MapComponent },
// { path: '**', component: PageNotFoundComponent },
// ];
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
    LoginComponent
  ],
  entryComponents: [PasswordmgtComponent, DialogOverviewExampleDialog],
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
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    Ng2SearchPipeModule,
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
    AgmJsMarkerClustererModule,
    MatTableModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
