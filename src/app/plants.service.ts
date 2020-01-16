import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"; 
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
}