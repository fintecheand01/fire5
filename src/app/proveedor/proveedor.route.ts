import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { ProveedorComponent } from './components/proveedor.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards
// import { RequireAuthGuard } from '../auth';


export const ProveedorRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'proveedores',
    component: ProveedorComponent,
    // canActivate: [RequireAuthGuard]
  }
]);
