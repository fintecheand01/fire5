import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// components
import { CoolChartComponent } from './components/cool-chart.component';
// directives

// modules
import { ChartRoutesModule } from './chart.route';
// services
import { ChartService } from './chart.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CoolChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartRoutesModule,
    NgxPaginationModule

  ],
  providers: [
    ChartService
  ]
})
export class ChartModule { }
