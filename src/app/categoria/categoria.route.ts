import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { CategoriaComponent } from './components/categoria.component';

export const CategoriaRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'categorias',
    component: CategoriaComponent
  }
]);
