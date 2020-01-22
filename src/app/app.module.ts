import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPlantsComponent } from './search-plants/search-plants.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { AddOrUpdatePlantComponent } from './add-or-update-plant/add-or-update-plant.component';

import { PlantsService } from './plants.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BasicButtonComponent,
    FooterComponent,
    SearchPlantsComponent,
    PlantCardComponent,
    ResultsListComponent,
    AddOrUpdatePlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
