import { Component } from '@angular/core';
import { HEROES } from '../../interfaces/mock-heroes';
import { Hero } from '../../interfaces/hero';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;

  constructor(private heroService: FetchDataService) { };

  onSelect(hero: Hero): void {
    // Using "this.selectedHero" ensures that we update the class-level property,
    // making the change visible throughout the entire class instance.
    // Without "this," it would create a local variable, limiting its scope to this method.
    // The "this" keyword refers to the current instance, maintaining consistency
    // and clarity in class properties.
    // By using this.selectedHero, you're indicating that you want to access the 
    // selectedHero property of the current class instance.
    this.selectedHero = hero;
    this.heroService.updateSelectedHero(hero);
    console.log(this.selectedHero.name);
  }
}
