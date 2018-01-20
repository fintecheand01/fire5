import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { VentaComponent } from './components/venta.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const VentaRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'ventas',
    component: VentaComponent
  }
]);
