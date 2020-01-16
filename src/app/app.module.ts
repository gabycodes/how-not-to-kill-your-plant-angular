import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPlantsComponent } from './search-plants/search-plants.component';
import { PlantCardComponent } from './plant-card/plant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BasicButtonComponent,
    FooterComponent,
    SearchPlantsComponent,
    PlantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
