import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './profile.component';

const profileModuleRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(profileModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class ProfileModule { }
