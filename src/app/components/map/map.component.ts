import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { MapService } from '../../services/map.service';
import { tileLayer, latLng } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 map;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ],
    zoom: 8,
    center: latLng(22.7196, 75.8577)
  };

   onMapReady(map) {
    this.map = map;
  }
	// google maps zoom level
  // zoom: number = 2;
  // initial center position for the map
//   lat: any;
//   lng: any;
//   locations:any;
//   private basePath = '/details';
//   mapStyle;
//   today = new Date()
//   hours = this.today.getHours();
// courses: Observable < any > | any;
//   constructor(private db: AngularFireDatabase,private mapService: MapService){
//     if (navigator)
//     {
//     navigator.geolocation.getCurrentPosition( pos => {
//         this.lng = +pos.coords.longitude;
//         this.lat = +pos.coords.latitude;
//       });

//      db.list(this.basePath).valueChanges()
//         .subscribe(data => {
//             this.courses = data;
//         });

//   if(this.hours < 18){
//     this.mapStyle = this.mapService.dayStyles;
//   }else{
//     this.mapStyle = this.mapService.nightStyles;
//   }
    
//  }}

//    getData() {
//       return this.courses;
//   }
 
//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }
//   onMouseOver(infoWindow) {
//         infoWindow.open();
//     }

  ngOnInit() {


  }

}



