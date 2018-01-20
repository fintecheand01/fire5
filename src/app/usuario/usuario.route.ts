import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { UsuarioComponent } from './components/usuario.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const UsuarioRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'usuarios',
    component: UsuarioComponent
  }
]);
