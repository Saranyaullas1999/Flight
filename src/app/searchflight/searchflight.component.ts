import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchFlight(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
