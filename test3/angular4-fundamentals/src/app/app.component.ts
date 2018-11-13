import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <div>
      <app-simple-form></app-simple-form>
    </div>
  `
})
export class AppComponent {
  title = 'Hello';
}
