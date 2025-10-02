import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageInventoryPageRoutingModule } from './manage-inventory-routing.module';

import { ManageInventoryPage } from './manage-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageInventoryPageRoutingModule
  ],
  declarations: [ManageInventoryPage]
})
export class ManageInventoryPageModule {}
