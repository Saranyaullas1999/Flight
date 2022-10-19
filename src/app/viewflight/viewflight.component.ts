import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor() { }

  flightData=[{"id":1,"name":"Emirates","origin":"Dubai","destination":"Saudi","capacity":450},{"id":2,"name":"Indigo","origin":"India","destination":"Dubai","capacity":200},{"id":3,"name":"Air India","origin":"India","destination":"Quatar","capacity":250},{"id":4,"name":"Spice Jet","origin":"India","destination":"Dubai","capacity":200},{"id":5,"name":"Vistara","origin":"India","destination":"Mumbai","capacity":210}]

  ngOnInit(): void {
  }

}
