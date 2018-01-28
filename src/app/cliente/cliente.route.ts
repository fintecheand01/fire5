import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { ClienteComponent } from './components/cliente.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const ClienteRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'clientes',
    component: ClienteComponent
  }
]);
