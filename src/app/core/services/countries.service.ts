import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Country } from '../models/country.model';

@Injectable()
export class CountriesService {
  constructor(private apiService: ApiService) { }

  getAll(): Observable<Country[]> {
    return this.apiService.get(`/Country`);
  }

  getHotels(id: number): Observable<Country> {
    return this.apiService.get(`/Country/${id}`);
  }
}
