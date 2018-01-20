import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { InicioComponent } from './components/inicio.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards
// import { RequireAuthGuard } from '../auth';


export const InicioRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'Home',
    component: InicioComponent,
    // canActivate: [RequireAuthGuard]
  }
]);
