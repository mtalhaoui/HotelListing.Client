import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Country } from '../core/models/country.model';
import { Hotel } from '../core/models/hotel.model';
import { CountriesService } from '../core/services/countries.service';

@Component({
  selector: 'app-country-hotels',
  templateUrl: './country-hotels.component.html',
  styleUrls: ['./country-hotels.component.scss']
})
export class CountryHotelsComponent implements OnInit, OnDestroy {
  private routeSub!: Subscription;
  private countrySub!: Subscription;
  country!: Country;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getHotels(+params['id']);
    });
  }

  getHotels(id: number) {
    this.countrySub = this.countriesService.getHotels(id).subscribe(country => {
      this.country = country;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.countrySub.unsubscribe();
  }
}
