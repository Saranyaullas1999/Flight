import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private myapis:ApiService) { }

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
      alert("Successfully added")
      this.myapis.addFlight(data).subscribe(
        (response)=>{
          console.log(response)
          
        }
      )
      this.name=""
      this.origin=""
      this.destination=""
      this.capacity=""
    }

  ngOnInit(): void {
  }

}
