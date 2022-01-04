import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountriesService } from '../core/services/countries.service';
import { Country } from '../core/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.populateCountries();
  }

  populateCountries(): void {
    this.countries$ = this.countriesService.getAll();
  }
}
