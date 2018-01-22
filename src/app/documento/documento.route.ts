import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { DocumentoComponent } from './components/documento.component';

export const DocumentoRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'documentos',
    component: DocumentoComponent
  }
]);
