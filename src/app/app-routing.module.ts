import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelComponent } from './hotel/hotel.component';
import { CountryComponent } from './country/country.component';
import { CountryHotelsComponent } from './country-hotels/country-hotels.component';

const routes: Routes = [
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'country/:id',
    component: CountryHotelsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
