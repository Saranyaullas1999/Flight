import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewFlight().subscribe(
      (data)=>{
        this.flightData=data
      }
    )
  }

  deleteFlights=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteFlight(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
     }


  flightData:any=[]

  ngOnInit(): void {
  }

}
