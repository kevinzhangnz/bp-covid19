import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CovidComponent } from './covid.component';

const routes: Routes = [
  {
    path: '',
    component: CovidComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CovidComponent],
  exports: [RouterModule]
})
export class CovidModule { }
