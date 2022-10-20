import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFlight=()=>{
    return this.http.get("http://localhost:8080/viewflight")
  }

  addFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/add",data)
  }

  deleteFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteflight",data)
  }

  searchFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/searchFlight",data)
  }

 

}
