import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
        path: 'add-bicycle',
        loadChildren: () => import('./pages/pagesProfile/add-bicycle/add-bicycle.module').then(m => m.AddBicyclePageModule)
  },
  {
    path: 'tab-profile',
    loadChildren: () => import('./pages/pagesProfile/tab-profile/tab-profile.module').then( m => m.TabProfilePageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
