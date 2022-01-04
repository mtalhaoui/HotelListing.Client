import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Hotel } from '../models/hotel.model';

@Injectable()
export class HotelsService {
  constructor(private apiService: ApiService) { }

  getAll(): Observable<Hotel[]> {
    return this.apiService.get(`/hotel`);
  }
}
