import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
/* DOCUMENTACIÓN: https://angular.io/guide/lazy-loading-ngmodules */
const routes: Routes = [
  {
    path: '**', redirectTo: 'customers/home', pathMatch: 'full',
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  }, // loadChildren: './admin/admin.module#AdminModule'
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule)
  } // loadChildren: './customers/customers.module#CustomersModule'
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
