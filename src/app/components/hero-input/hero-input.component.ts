import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-hero-input',
  templateUrl: './hero-input.component.html',
  styleUrls: ['./hero-input.component.css']
})
export class HeroInputComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor(public heroService: FetchDataService) { }

}
