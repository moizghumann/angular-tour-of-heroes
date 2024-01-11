import { Component } from '@angular/core';
import { Hero } from '../hero';

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
}
