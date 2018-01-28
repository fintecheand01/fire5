import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { CoolChartComponent } from './components/cool-chart.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const ChartRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'charts',
    component: CoolChartComponent
  }
]);
