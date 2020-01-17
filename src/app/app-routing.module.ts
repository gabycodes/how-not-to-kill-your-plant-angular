import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPlantsComponent } from './search-plants/search-plants.component'
import { HomeComponent } from './home/home.component'
import { AddOrUpdatePlantComponent } from './add-or-update-plant/add-or-update-plant.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchPlantsComponent },
  { path: "add", component: AddOrUpdatePlantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
