import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogosBicyclesPage } from './catalogos-bicycles.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogosBicyclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogosBicyclesPageRoutingModule {}
