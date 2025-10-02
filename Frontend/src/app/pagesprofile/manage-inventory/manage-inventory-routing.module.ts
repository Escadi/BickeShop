import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageInventoryPage } from './manage-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: ManageInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageInventoryPageRoutingModule {}
