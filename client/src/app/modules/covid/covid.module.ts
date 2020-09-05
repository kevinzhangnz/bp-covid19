import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WidgetComponent } from '@components/index';
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
  declarations: [
    CovidComponent,
    WidgetComponent
  ],
  exports: [RouterModule]
})
export class CovidModule { }
