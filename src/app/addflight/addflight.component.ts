import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor() { }

  name=""
    origin=""
    destination=""
    capacity=""

    readValue=()=>{
      let data={
        "name":this.name,
        "origin":this.origin,
        "destination":this.destination,
        "capacity":this.capacity
      }
      console.log(data)
      this.name=""
      this.origin=""
      this.destination=""
      this.capacity=""
    }

  ngOnInit(): void {
  }

}
