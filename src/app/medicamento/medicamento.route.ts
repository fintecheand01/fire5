import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { MedicamentoComponent } from './components/medicamento.component';
// import { HistorialAulasComponent } from './components/aulas.component';

// guards



export const MedicamentoRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'medicamentos',
    component: MedicamentoComponent
  }
]);
