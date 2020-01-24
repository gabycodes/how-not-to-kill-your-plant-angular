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
      // "https://how-not-to-kill-your-plant.firebaseio.com/plants.json"
      "http://localhost:8080/plants"
  ); }

  addPlant(plant: Plant) {
    return this.http.post("http://localhost:8080/plants", {
      ...plant
    })
  }


  
  savePlant(plant: Plant) {
    console.log('saving plant...')
    return this.http.post('http://localhost:8080/plants', plant)
  }
  
  getPlant(id) {
    console.log('getting plants?')
    return this.http.get('http://localhost:8080/plants/:id')
  }
  
  // deletePlant(id: string) {
  //   return this.http.get('http://localhost:8080/delete-plant/', { 'id': id })
  // }
}