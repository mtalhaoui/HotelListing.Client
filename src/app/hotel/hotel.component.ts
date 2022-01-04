import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HotelsService } from '../core/services/hotels.service';
import { Hotel } from '../core/models/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotels$!: Observable<Hotel[]>;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.populateHotels();
  }

  populateHotels(): void {
    this.hotels$ = this.hotelsService.getAll();
  }
}
