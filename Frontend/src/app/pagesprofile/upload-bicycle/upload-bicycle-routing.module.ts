import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadBicyclePage } from './upload-bicycle.page';

const routes: Routes = [
  {
    path: '',
    component: UploadBicyclePage,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('..//ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
       {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadBicyclePageRoutingModule {}
