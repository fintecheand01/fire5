import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { CargoComponent } from './components/cargo.component';

export const CargoRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cargos',
    component: CargoComponent
  }
]);
