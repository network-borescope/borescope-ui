import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as Mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: any;

  ngOnInit(): void {

    this.renderMap();
    
  }
  renderMap(){
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.map = new Mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-48.0874631, -15.7602935], // starting position
    zoom: 7  // starting zoom
    });
    
    // Add zoom and rotation controls to the map.
    this.map.addControl(new Mapboxgl.NavigationControl());

    this.createMarker(-48.0874631, -15.7602935);
    }

    createMarker(lng: number, lat:number){
      var marker = new Mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([lng, lat])
        .addTo(this.map);

      marker.on('dragend', () =>{
        console.log(marker.getLngLat());
      })
      }
       


}
