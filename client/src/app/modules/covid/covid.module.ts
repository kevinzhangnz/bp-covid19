import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

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
    FormsModule,
    RouterModule.forChild(routes),
    NgSelectModule,
  ],
  declarations: [
    CovidComponent,
    WidgetComponent
  ],
  exports: [RouterModule]
})
export class CovidModule { }
