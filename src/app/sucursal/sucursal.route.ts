import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { SucursalComponent } from './components/sucursal.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards
// import { RequireAuthGuard } from '../auth';


export const SucursalRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'sucursal',
    component: SucursalComponent,
    // canActivate: [RequireAuthGuard]
  }
]);
