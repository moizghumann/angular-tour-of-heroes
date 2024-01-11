import { Component } from '@angular/core';

// @Component is a decorator function that specifies the Angular metadata for the component. 
@Component({
  // component metadata properties
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
}
