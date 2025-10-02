import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadBicyclePageRoutingModule } from './upload-bicycle-routing.module';

import { UploadBicyclePage } from './upload-bicycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadBicyclePageRoutingModule
  ],
  declarations: [UploadBicyclePage]
})
export class UploadBicyclePageModule {}
