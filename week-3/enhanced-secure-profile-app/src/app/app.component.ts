/*
============================================
; Title:  app.component.ts
; Author: Jonathan Disla
; Date: 12 June 2021
; Description: Component for app
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Secure Profile App';
}
