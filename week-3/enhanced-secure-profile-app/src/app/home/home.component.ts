/*
============================================
; Title:  home.component.ts
; Author: Jonathan Disla
; Date: 12 June 2021
; Description: Component for home
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor() {}

  ngOnInit(): void {}
}
