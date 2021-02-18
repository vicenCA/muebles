import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CategoryComponent } from './screens/category/category.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children:[
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'category/:id', component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
