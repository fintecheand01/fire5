import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { DolenciaComponent } from './components/dolencia.component';

export const DolenciaRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dolencias',
    component: DolenciaComponent
  }
]);
