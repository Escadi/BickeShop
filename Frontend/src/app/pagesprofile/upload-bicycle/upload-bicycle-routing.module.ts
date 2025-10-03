import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadBicyclePage } from './upload-bicycle.page';

const routes: Routes = [
  {
    path: '',
    component: UploadBicyclePage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadBicyclePageRoutingModule {}
