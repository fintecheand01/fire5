import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { EmpleadoComponent } from './components/empleado.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const EmpleadoRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'empleados',
    component: EmpleadoComponent
  }
]);
