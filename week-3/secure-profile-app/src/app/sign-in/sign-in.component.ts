/*
============================================
; Title:  sign-in.component.ts
; Author: Jonathan Disla
; Date: 12 June 2021
; Description: Component for sign in
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
