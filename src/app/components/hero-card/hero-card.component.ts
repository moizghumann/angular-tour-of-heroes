import { Component } from '@angular/core';
import { Listing } from '../../interfaces/listing';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  home: Listing = {
    homeHeading: 'home in nebraska',
    rating: '⭐️ 4.91 (194)',
    location: 'sandhills gateway',
    homeInfo: '4 king beds',
    bookingDate: 'jan 21 - 26',
    homePrice: 149
  }
}
