import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { ApiService } from './core/services/api.service';
import { HotelsService } from './core/services/hotels.service';
import { CountryComponent } from './country/country.component';
import { CountriesService } from './core/services/countries.service';
import { CountryHotelsComponent } from './country-hotels/country-hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelComponent,
    CountryComponent,
    CountryHotelsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    HotelsService,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
