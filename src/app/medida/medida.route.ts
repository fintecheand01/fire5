import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { MedidaComponent } from './components/medida.component';

export const MedidaRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'medidas',
    component: MedidaComponent
  }
]);
