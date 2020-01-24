import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants.service';
import { Plant } from "../models/plant.model";

@Component({
  selector: 'app-search-plants',
  templateUrl: './search-plants.component.html',
  styleUrls: ['./search-plants.component.scss']
})
export class SearchPlantsComponent implements OnInit {
  plants: Plant[] = []
  query: string = ''
  filteredPlants: Plant[]

  constructor(private plantService: PlantsService) { }

  ngOnInit() {
    this.plantService.getPlants().subscribe(plants => {
      console.log(plants)
      this.plants = plants;
      this.filteredPlants = plants;
    })
  }

  onChange() {
    this.filteredPlants = this.plants.filter(plant => {
      if (plant.name.toLowerCase().includes(this.query.toLowerCase()) || plant.latinName.toLowerCase().includes(this.query.toLowerCase())) {
        return true
      }
    })
  }
}
