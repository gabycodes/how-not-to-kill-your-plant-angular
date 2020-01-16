import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { Plant } from "./models/plant.model";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(
      "https://how-not-to-kill-your-plant.firebaseio.com/plants.json",
      // "https://movieapp-9dd4f.firebaseio.com/movies.json",
      // httpOptions
  ); }
}