import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { GlobalService } from '../global.service';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    private basePath = '/details';
courses: Observable < any > | any;
	  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: any;
  lng: any;
  constructor(private globalService: GlobalService){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
 }}

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
    {
      lat: 22.9676,
      lng: 76.0534,
      label: 'A',
      draggable: true,
      name: 'Dewas'
    },
    {
      lat: 22.7196,
      lng: 75.8577,
      label: 'B',
      draggable: false,
      name: 'Indore'
    }
  ]


  
  ngOnInit() {
    
  }

}

// just an interface for type safety.
interface marker {
  lat?: any;
  lng?: any;
  label?: string;
  draggable: boolean;
  name?: any;
}



