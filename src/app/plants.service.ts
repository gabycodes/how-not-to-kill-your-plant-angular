import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http"; 
import { Plant } from "./models/plant.model";

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(
      "https://how-not-to-kill-your-plant.firebaseio.com/plants.json"
  ); }

  addPlant(plant: Plant) {
    return this.http.post("https://how-not-to-kill-your-plant.firebaseio.com/plants.json", {
      ...plant
    })
  }


  
  savePlant(plant: Plant) {
    console.log('saving plant...')
    return this.http.post('http://localhost:8080/save-plant/', plant)
  }
  
  getPlant() {
    console.log('getting plants?')
    return this.http.get('http://localhost:8080/plants')
  }
  
  // deletePlant(id: string) {
  //   return this.http.get('http://localhost:8080/delete-plant/', { 'id': id })
  // }
}