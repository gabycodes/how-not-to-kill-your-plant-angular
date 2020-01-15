import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BasicButtonComponent } from '../basic-button/basic-button.component';

@NgModule({
  declarations: [
    BasicButtonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
