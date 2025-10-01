import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogosBicyclesPageRoutingModule } from './catalogos-bicycles-routing.module';

import { CatalogosBicyclesPage } from './catalogos-bicycles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogosBicyclesPageRoutingModule
  ],
  declarations: [CatalogosBicyclesPage]
})
export class CatalogosBicyclesPageModule {}
