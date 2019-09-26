import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AngularD3TreeLibModule } from 'angular-d3-tree';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartModule } from 'angular-highcharts';
import { environment } from '../../../environments/environment';
@NgModule({
  declarations: [],
  imports: [
   CommonModule,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsfAKMcwNFRB3o4uGi6Z5BD9-1kw6yy34'
    }),
    AgmJsMarkerClustererModule

  ],
})
export class LibraryModule { }
