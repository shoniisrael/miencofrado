import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ContratosComponent } from './contratos.component';
import { ContratosCreateUpdateComponent } from './contratos-create-update/contratos-create-update.component';


const routes: VexRoutes = [
  {
    path: '',
    component: ContratosComponent,
    data: {
      toolbarShadowEnabled: true
    }    
  },
  {
    path: 'create',
    component: ContratosCreateUpdateComponent,
    data: {
      toolbarShadowEnabled: true
    }    
  },  
  {
    path: "ver",
    loadChildren: () =>
      import("./invoice/invoice.module").then(
        (m) => m.InvoiceModule
      ),
  },
  {
    path: "ver/{id}",
    loadChildren: () =>
      import("./invoice/invoice.module").then(
        (m) => m.InvoiceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule {
}
