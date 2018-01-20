import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { CompraComponent } from './components/compra.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const CompraRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'compras',
    component: CompraComponent
  }
]);
