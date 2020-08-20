import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [],
  },
  {
    path: 'apps',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/apps/clientes/aio-table.module').then(
            (m) => m.AioTableModule
          ),
        data: {
          toolbarShadowEnabled: true,
        },
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./pages/apps/clientes/aio-table.module').then(
            (m) => m.AioTableModule
          ),
        data: {
          toolbarShadowEnabled: true,
        },
      },
      {
        path: 'contratos',
        loadChildren: () =>
          import('./pages/apps/contratos/contratos.module').then(
            (m) => m.ContratosModule
          ),
        data: {
          toolbarShadowEnabled: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
