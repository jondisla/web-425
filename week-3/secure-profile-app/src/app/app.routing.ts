/*
============================================
; Title:  app.routing.ts
; Author: Jonathan Disla
; Date: 12 June 2021
; Description: Routes
;===========================================
*/

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
