import { Routes } from '@angular/router';
import { Sample01Component } from './sample01/sample01.component';
import { Sample02Component } from './sample02/sample02.component';
import { Sample03Component } from './sample03/sample03.component';

export const routes: Routes = [
  {
    path: 'sample01',
    component: Sample01Component,
  },
  {
    path: 'sample02',
    component: Sample02Component,
  },
  {
    path: 'sample03',
    component: Sample03Component,
  },
];
