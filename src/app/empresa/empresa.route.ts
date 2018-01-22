import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { EmpresaComponent } from './components/empresa.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const EmpresaRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'empresa',
    component: EmpresaComponent
  }
]);
