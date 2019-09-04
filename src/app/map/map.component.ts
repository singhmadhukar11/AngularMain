import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { MapService } from '../map.service';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	// google maps zoom level
  zoom: number = 2;
  // initial center position for the map
  lat: any;
  lng: any;
  locations:any;
  private basePath = '/details';
  mapStyle;
  today = new Date()
  hours = this.today.getHours();
courses: Observable < any > | any;
  constructor(private db: AngularFireDatabase,private mapService: MapService){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });

     db.list(this.basePath).valueChanges()
        .subscribe(data => {
            this.courses = data;
        });

  if(this.hours < 18){
    this.mapStyle = this.mapService.dayStyles;
  }else{
    this.mapStyle = this.mapService.nightStyles;
  }
    
 }}

   getData() {
      return this.courses;
  }
 
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: false
  //   });
  // }
  
  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }
  
  // markers: marker[] = [
  //   {
  //     lat: 22.9676,
  //     lng: 76.0534,
  //     label: 'A',
  //     draggable: true,
  //     name: 'Dewas'
  //   },
  //   {
  //     lat: 22.7196,
  //     lng: 75.8577,
  //     label: 'B',
  //     draggable: false,
  //     name: 'Indore'
  //   }
  // ]
  onMouseOver(infoWindow) {
        infoWindow.open();
    }

  ngOnInit() {}

}



