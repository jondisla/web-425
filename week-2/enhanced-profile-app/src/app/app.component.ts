import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Excersice 2.3 - Data Binding';
}
