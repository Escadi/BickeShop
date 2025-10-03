import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {//Catalogues of all bicycles
        path: 'catalogos-bicycles',
        loadChildren: () => import('../catalogos-bicycles/catalogos-bicycles.module').then(m => m.CatalogosBicyclesPageModule)
      },

      {//Shopping of my bicycles
        path: 'my-bicycles',
        loadChildren: () => import('../my-bicycles/my-bicycles.module').then(m => m.MyBicyclesPageModule)
      },
      {//home information
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: "",
        redirectTo: "./tab/inicio",
        pathMatch: "full"
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
