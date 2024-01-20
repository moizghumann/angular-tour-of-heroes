import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '../interfaces/hero';

// what this service is doing?
// The FetchDataService is a service that uses a BehaviorSubject to manage and share the selected hero's state across Angular components.

// The @Injectable decorator is used to make the FetchDataService class injectable into other components or services. This decorator allows Angular to use dependency injection to provide instances of this service where needed.
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  // 1. create a private behaviour subject with null as an initial value

  // A Subject is a special type of Observable that allows values to be multicasted to multiple Observers
  // It serves as both an Observable and an Observer, making it an essential tool for managing event streams and state changes in Angular applications.

  // A BehaviorSubject, on the other hand, is a more advanced version of Subject. It has an initial value and always emits the most recent value to new subscribers. This makes it particularly useful for scenarios where you need to provide an initial value or maintain the current state of an application component.

  // The private selectedHeroSubject is a private instance variable that holds the BehaviorSubject for the selected hero. 
  // It is initialized with null as the initial value. 
  // Private means it can only be accessed within the FetchDataService class.
  public selectedHeroSubject: BehaviorSubject<Hero | null> = new BehaviorSubject<Hero | null>(null);

  // 2. set up an observable to notify components when selected hero updates

  // The selectedHero$ is an observable that emits the current selected hero or null.

  // It is based on a BehaviorSubject, allowing subscribers to receive updates
  // and access additional BehaviorSubject methods if needed.

  // Using asObservable() ensures that subscribers interact with it as a standard observable,
  // providing a level of abstraction over the underlying BehaviorSubject implementation.

  // This approach allows flexibility and consistency in managing and sharing the selected hero's state.
  selectedHero$: Observable<Hero | null> = this.selectedHeroSubject.asObservable();

  // 3. method to update the selected hero
  // the 'next' method of the BehaviorSubject is used to emit a new value to all subscribers.
  updateSelectedHero(hero: Hero | null): void {
    this.selectedHeroSubject.next(hero);
  }

}

// Notes:
// Use a service with a BehaviorSubject when you need to manage state and share it across multiple components.
// It's beneficial in scenarios where components are not directly related or are not in a parent-child relationship, and you need a central place to manage and distribute state changes.
