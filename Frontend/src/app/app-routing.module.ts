import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then(m => m.TabPageModule)
  },
  {
    path: 'add-bicycle',
    loadChildren: () => import('../app/pagesprofile/add-bicycle/add-bicycle.module').then(m => m.AddBicyclePageModule)
  },
  {
    path: 'tab-profile',
    loadChildren: () => import('../app/pagesprofile/tab-profile/tab-profile.module').then(m => m.TabProfilePageModule)
  },
  {
    path: 'manage-inventory',
    loadChildren: () => import('../app/pagesprofile/manage-inventory/manage-inventory.module').then(m => m.ManageInventoryPageModule)
  },
  {
    path: 'upload-bicycle',
    loadChildren: () => import('./pagesprofile/upload-bicycle/upload-bicycle.module').then(m => m.UploadBicyclePageModule)
  },
  {//Profile Login of user
        path: 'profile',
        loadChildren: () => import('../app/pages/profile/profile.module').then(m => m.ProfilePageModule)
      },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
