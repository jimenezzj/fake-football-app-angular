import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
